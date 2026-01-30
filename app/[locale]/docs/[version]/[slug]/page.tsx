import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import Feedback from "@/components/Feedback";
import TableOfContents from "@/components/TableOfContents";
import CopyCode from "@/components/CopyCode";

export const revalidate = 60;

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

async function getDoc(version: string, slug: string) {
  const filePath = path.join(process.cwd(), "content", "docs", version, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(file);

  const headings: { id: string; text: string; level: number }[] = [];

  content
    .split(/\r?\n/)
    .map((l) => l.trim())
    .forEach((line) => {
      const match = line.match(/^(#{1,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = slugify(text);
        headings.push({ id, text, level });
      }
    });

  const processed = await remark().use(html).process(content);
  let docHtml = processed.toString();

  docHtml = docHtml.replace(
    /<(h[1-3])>(.*?)<\/h[1-3]>/g,
    (full, tag, inner) => {
      const clean = inner.replace(/<[^>]*>/g, "").trim();
      const id = slugify(clean);
      return `<${tag} id="${id}">${inner}</${tag}>`;
    }
  );

  return { html: docHtml, headings };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ locale: string; version: string; slug: string }>;
}) {
  const { locale, version, slug } = await params;

  const doc = await getDoc(version, slug);
  if (!doc) notFound();

  return (
    <div>
      <Header locale={locale} version={version} slug={slug} />

      <div className="flex">
        <Sidebar locale={locale} version={version} />

        <main className="p-6 w-full">
          <SearchBox locale={locale} />

          <TableOfContents headings={doc.headings} />

          <div
            data-testid="doc-content"
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: doc.html }}
          />

          <CopyCode />

          <Feedback />
        </main>
      </div>
    </div>
  );
}

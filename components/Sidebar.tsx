"use client";

import Link from "next/link";

const pages = [
  { slug: "introduction", label: "Introduction" },
  { slug: "getting-started", label: "Getting Started" },
  { slug: "installation", label: "Installation" }
];

export default function Sidebar({
  locale,
  version,
}: {
  locale: string;
  version: string;
}) {
  return (
    <aside data-testid="sidebar" className="w-64 border-r p-4 min-h-screen">
      <h2 className="font-semibold mb-4">Navigation</h2>
      <div className="flex flex-col gap-2">
        {pages.map((p) => (
          <Link
            key={p.slug}
            data-testid={`sidebar-nav-link-${p.slug}`}
            href={`/${locale}/docs/${version}/${p.slug}`}
            className="hover:underline"
          >
            {p.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}

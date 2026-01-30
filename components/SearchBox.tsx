"use client";

import { useState } from "react";

const docsIndex = [
  { title: "Introduction", url: "/docs/v1/introduction" },
  { title: "Getting Started", url: "/docs/v1/getting-started" },
  { title: "Installation", url: "/docs/v1/installation" }
];

export default function SearchBox({ locale }: { locale: string }) {
  const [query, setQuery] = useState("");

  const results =
    query.trim().length === 0
      ? []
      : docsIndex.filter((d) =>
          d.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="my-4">
      <input
        data-testid="search-input"
        className="border px-3 py-2 rounded w-full"
        placeholder="Search docs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query.trim().length > 0 && (
        <div className="mt-2 border rounded p-3">
          {results.length > 0 ? (
            <div data-testid="search-results" className="flex flex-col gap-2">
              {results.map((r) => (
                <a
                  key={r.url}
                  href={`/${locale}${r.url}`}
                  className="text-blue-600 underline"
                >
                  {r.title}
                </a>
              ))}
            </div>
          ) : (
            <div data-testid="search-no-results">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}

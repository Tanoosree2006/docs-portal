"use client";

export default function TableOfContents({
  headings
}: {
  headings: { id: string; text: string; level: number }[];
}) {
  return (
    <div
      data-testid="table-of-contents"
      style={{
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16
      }}
    >
      <h3 style={{ marginTop: 0 }}>On this page</h3>

      {headings && headings.length > 0 ? (
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          {headings.map((h) => (
            <li key={h.id} style={{ marginLeft: (h.level - 1) * 10 }}>
              <a href={`#${h.id}`} style={{ textDecoration: "underline" }}>
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ margin: 0 }}>No headings found</p>
      )}
    </div>
  );
}

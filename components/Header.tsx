"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const locales = ["en", "es", "fr", "de"];
const versions = ["v1", "v2", "v3"];

export default function Header({
  locale,
  version,
  slug
}: {
  locale: string;
  version: string;
  slug: string;
}) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = saved ? saved === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldDark);
    setDark(shouldDark);
  }, []);

  function toggleTheme() {
    const newValue = !dark;
    setDark(newValue);
    document.documentElement.classList.toggle("dark", newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
  }

  function switchLocale(newLocale: string) {
    const parts = pathname.split("/");
    parts[1] = newLocale;
    return parts.join("/");
  }

  function switchVersion(newVersion: string) {
    return `/${locale}/docs/${newVersion}/${slug}`;
  }

  return (
    <div className="flex items-center justify-between p-4 border-b">
      {/* Logo / Home */}
      <Link
        href={`/${locale}/docs/${version}/introduction`}
        className="font-bold text-lg"
      >
        Docs Portal
      </Link>

      <div className="flex gap-4 items-center">

        {/* API Reference Link */}
        <Link
          href="/api-reference"
          className="px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          API Reference
        </Link>

        {/* Version Selector */}
        <div>
          <select
            data-testid="version-selector"
            className="border px-2 py-1 rounded"
            value={version}
            onChange={(e) =>
              (window.location.href = switchVersion(e.target.value))
            }
          >
            {versions.map((v) => (
              <option
                key={v}
                data-testid={`version-option-${v}`}
                value={v}
              >
                {v.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Language Switcher */}
        <div data-testid="language-switcher" className="flex gap-2">
          {locales.map((l) => (
            <Link
              key={l}
              href={switchLocale(l)}
              className={`px-2 py-1 rounded border ${
                l === locale ? "bg-black text-white" : ""
              }`}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          data-testid="theme-toggle"
          onClick={toggleTheme}
          className="border px-3 py-1 rounded"
        >
          {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </div>
  );
}

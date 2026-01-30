"use client";

import { useEffect } from "react";

export default function CopyCode() {
  useEffect(() => {
    const pres = document.querySelectorAll("pre");

    pres.forEach((pre) => {
      if (pre.getAttribute("data-copy") === "true") return;
      pre.setAttribute("data-copy", "true");

      const btn = document.createElement("button");
      btn.innerText = "Copy";
      btn.setAttribute("data-testid", "copy-code-button");

      btn.style.position = "absolute";
      btn.style.top = "8px";
      btn.style.right = "8px";
      btn.style.padding = "4px 10px";
      btn.style.border = "1px solid var(--border)";
      btn.style.borderRadius = "6px";
      btn.style.cursor = "pointer";
      btn.style.background = "transparent";
      btn.style.color = "inherit";

      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      wrapper.appendChild(btn);

      btn.addEventListener("click", async () => {
        const code = pre.innerText;
        await navigator.clipboard.writeText(code);
        btn.innerText = "Copied!";
        setTimeout(() => (btn.innerText = "Copy"), 1000);
      });
    });
  }, []);

  return null;
}

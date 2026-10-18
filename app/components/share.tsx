"use client";

import { useState } from "react";

export function Share() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [url, setURL] = useState("");

  async function copy(url: string) {
    await navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 1500);
  }

  function handleClick() {
    setOpen((value) => !value);
    setURL(window.location.href);
  }

  return (
    <div className="relative font-sans">
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={open}
        className="text-black hover:text-black/60 dark:text-[#FFFDF0] dark:hover:text-[#FFFDF0]/60"
      >
        Share
      </button>

      {open && (
        <div className="absolute right-0 top-full z-20 mt-3 w-80 max-w-[calc(100vw-3rem)] rounded-xl border border-black/15 bg-[#FFFDF0] p-3 shadow-lg dark:border-[#FFFDF0]/15 dark:bg-black">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close share menu"
              className="text-black/40 hover:text-black dark:text-[#FFFDF0]/40 dark:hover:text-[#FFFDF0]"
            >
              ×
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 rounded-lg border border-black/15 p-2 dark:border-[#FFFDF0]/15">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="min-w-0 flex-1 truncate text-sm text-black/70 hover:underline dark:text-[#FFFDF0]/80"
                title={url}
              >
                {url}
              </a>

              <button
                type="button"
                onClick={() => copy(url)}
                className="shrink-0 rounded-md px-2 py-1 text-xs font-medium text-black hover:bg-black/5 dark:text-[#FFFDF0] dark:hover:bg-[#FFFDF0]/10"
              >
                {copied === url ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

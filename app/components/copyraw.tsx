"use client"

import { Copy as CopyIcon } from "lucide-react"

// type CopyRawProps = React.ComponentProps<'div'> & {
//   raw: string // data
// }

async function copyToClipboard(data: string) {
  const clipboardItemData = { 'text/plain' : data }
  const clipboardItem = new ClipboardItem(clipboardItemData)
  await navigator.clipboard.write([clipboardItem])
}

export function Copy({ data }: { data: string }) {
  return (
    <div 
      onClick={() => copyToClipboard(data)} 
      className=""
    >
      <div 
        title="copy raw markdown" 
        className="
          dark:text-white font-sans cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-800 
          p-2 w-fit rounded-full transition-colors ease-in-out"
        >
          <CopyIcon size={16} />
      </div>
    </div>
  )
}

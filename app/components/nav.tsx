"use client"

import Link from "next/link";
import { Share } from "./share";

export default function Nav() {
  return (
    <div className="font-sans ">
      <div className="flex items-center justify-between sm:px-15 sm:py-6.25 py-2">
        <div>
          <Link href="/" className="font-semibold text-2xl tracking-wide dark:text-white">The Blog</Link>
        </div>
          <Share />
      </div>
    </div>
  )
}

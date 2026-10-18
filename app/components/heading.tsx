"use client"
import React from "react"

// these will come from a file
type HeadingProps = React.ComponentProps<'section'> & {
  title: string
  description: string
  date: string
}

export function Heading({ title, description, date, className }: HeadingProps) {
  return (
    <div className={`${className}`}>
      <div className="prose lg:prose-xl prose-headings:leading-[1.2em] mx-auto font-serif dark:prose-invert ">
        <h1 className="font-extrabold ">
          {title}
        </h1>
        <p><em>{description}</em></p>
        <div className="">
          <span className="font-mono text-sm text-[#8C8C8C] sm:text-base">
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}


import { Posts } from "@/lib/posts";
import Link from "next/link";

export default async function Page() {
  "use cache"
  // fetch posts
  const posts = new Posts();
  const metadata = await posts.parse_metadata();
  if (metadata == null) {
    return ''
  }

  const arrow = '→'
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10 space-y-3">
          <p className="text-sm font-medium tracking-wide text-stone-500 dark:text-stone-400">
            THE JOURNAL
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            All my thoughts, united in one place.
          </h1>

          <p className="text-base leading-relaxed text-stone-600 dark:text-stone-400">
            Notes, ideas, and things I've learned along the way.
          </p>
        </header>

        <div className="divide-y divide-stone-200 border-y border-stone-200 dark:divide-stone-800 dark:border-stone-800">
          {metadata.map((meta) => (
            <article key={meta.slug} className="group py-6">
              <Link
                href={`/post/${meta.slug.trim()}`}
                className="block"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg font-medium tracking-tight text-stone-800 transition-colors group-hover:text-stone-500 dark:text-stone-200 dark:group-hover:text-stone-400 sm:text-xl">
                    {meta.title.trim()}
                  </h2>

                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-stone-400 transition-transform group-hover:translate-x-1 dark:text-stone-500"
                  >
                    {arrow}
                  </span>
                </div>

                {/*{meta.date && (
                  <time className="mt-2 block text-sm text-stone-500 dark:text-stone-400">
                    {meta.date}
                  </time>
                )}*/}
              </Link>
            </article>
          ))}
        </div>

        <footer className="mt-6 text-sm text-stone-500 dark:text-stone-400">
          {metadata.length} {metadata.length === 1 ? "post" : "posts"}
        </footer>
      </div>
    </>
  );
}

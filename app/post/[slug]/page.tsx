import Img from "@/app/asset_tmp/img.webp";
import { Copy } from "@/app/components/copyraw";
import { Heading } from "@/app/components/heading";
import { Posts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Markdown from "react-markdown";
import { ArrowLeft } from "lucide-react";

async function getPost(slug: string) {
  "use cache"
  const posts = new Posts()
  const contents = await posts.find_post_by_slug(slug);
  return contents
}

// This is bullshit, the amount of things I have to do just to make it happy.
export async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // I know it could be much better but I'm sleppy so anyway
  const { slug } = await params;
  const contents = await getPost(slug)
  const body = contents.slice(contents.lastIndexOf("---") + 3).trim();

  const posts = new Posts()
  const meta = posts.__parse_metadata(contents);

  const arrow = "←"; // I should probably use an svg 'cause I can rely in the font but ah...
  return (
    <>
      {/*body*/}
      <section className="flex flex-col lg:gap-24 mb-20">
        <div className="hidden lg:block mx-31">
            <Link
              href="/"
              className="dark:text-white font-semibold font-sans
              hover:text-gray-500 transition-colors flex items-center w-fit"
            >
              <span className="mr-1.5 peer w-fit"><ArrowLeft size={16} /></span>
              <span className="peer-hover:opacity-0 tracking-wide font-normal">back</span>
            </Link>
        </div>
        <div className="w-full max-w-181.5 flex flex-col lg:gap-24 sm:gap-16 mx-auto">
          {/*Heading*/}

          <Heading
            title={meta.title}
            description={meta.description}
            date={meta.date}
            className="w-full"
          />
          {/*Image*/}
          <div className="my-3">
            <Image
              src={Img}
              alt="Generic Image Pattern"
              className="w-170 h-95.5 m-auto object-contain"
            />
            {/*Caption*/}
            <div className="w-full m-auto text-center">
              <span>Caption</span>
            </div>
          </div>
          {/*Writing*/}
          <div className="w-full m-auto prose lg:prose-xl font-serif prose-headings:leading-[1.2em] dark:prose-invert">
            <Copy data={body} />
            <div>
              {/*Content*/}
              <Markdown>{body}</Markdown>
            </div>
          </div>
        </div>
      </section>
      <footer>
        made with love by <em>franksodrelima</em>
      </footer>
    </>
  );
}

export default async function Page({ params }: {
  params: Promise<{ slug: string }>
}) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Post params={params} />
    </Suspense>
  )
}

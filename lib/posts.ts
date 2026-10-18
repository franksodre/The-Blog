// create a "proper" parser to extract all the metadata
// make it possible to pick specific fields.
// handle error or nullability
import fs from "node:fs/promises";
import fspath from "node:path";

const path = fspath.relative('./', 'contents/')

type Metadata = Record<string, string>

export class Posts {
  private posts_dir: string;
  constructor() {
    this.posts_dir = path
  }

  // maybe create a class for metadata parsing
  public __parse_metadata(data: string): Metadata {
    // handle properly later
    const meta = this.get_metadata(data) ?? ''
    const metadata = meta.split('\n').map((it) => {
      const [key, ...rest] = it.split(':')
      return [key, rest.join(':').trim()]
    })
    console.log(Object.fromEntries(metadata))
    return Object.fromEntries(metadata)
  }

  public async find_post_by_slug(slug: string): Promise<string> {
    const files = await this.list_posts()
    for (const file of files) {
      const path = fspath.join(file.parentPath, file.name)
      const data = await this.read_file(path) ?? ''
      const metadata = this.__parse_metadata(data) as { title: string, slug: string }
      if (metadata.slug == slug) {
        return data
      }
    }
    return ''
  }

  private get_metadata(data: string): string | null {
    const del = '---'
    const metadata = data.slice(data.indexOf(del) + del.length, data.lastIndexOf(del)).trim()
    if (metadata.length <= 0) {
      return null
    }
    return metadata
  }

  private async read_file(file_path: string): Promise<string | null> {
    const data = await fs.readFile(file_path, 'utf-8')
    return data
  }
  private async list_posts() {
    const entries = await fs.readdir(this.posts_dir, { withFileTypes: true, encoding: 'utf-8' })
    return entries
  }

  // there's should be a parse_metadata by path
  public async parse_metadata(): Promise<Metadata[] | null> {
    const entries = await this.list_posts()
    const metadata: Metadata[] = []
    for (const entry of entries) {
      if (!entry.isFile()) {
        continue
      }
      const path = fspath.join(entry.parentPath, entry.name)
      const data = await this.read_file(path)
      // const metadata = await data.then((value) => value)
      if (data == null) {
        return null
      }
      const meta = this.__parse_metadata(data)
      metadata.push(meta)
    }
    return metadata
  }

//   public async get_posts_data_by_slug(): string | null {
//     const entries = await this.list_posts()
//     for (const entry of entries) {
//       if (!entry.isFile()) {
//         continue
//       }
//       const path = fspath.join(entry.parentPath, entry.name)
//       const data = await this.read_file(path)
//       if (data == null) {
//         return null
//       }
//
//       const metadata = this.__parse_metadata(data)
//     }
//   }
}

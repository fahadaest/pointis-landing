import Image from "next/image";
import AvatarBlog from "../avatars/AvatarBlog";
import { formatDate } from "@/utils";

interface BlogEntry {
  frontmatter: {
    cardImage: string;
    cardImageAlt: string;
    author: string;
    authorImage: string;
    pubDate: string;
    title: string;
    description: string;
  };
  slug: string;
}

interface Props {
  blogEntry: BlogEntry;
  blogLocale?: string;
}

const BlogCard: React.FC<Props> = ({ blogEntry, blogLocale = "" }) => {
  // Determine blog URL based on locale
  const blogUrl =
    blogLocale !== ""
      ? `/${blogLocale}/blog/${blogEntry.slug}/`
      : `/blog/${blogEntry.slug}/`;

  return (
    <a
      className="group relative block rounded-xl outline-none ring-zinc-500 transition duration-500 focus-visible:ring dark:ring-zinc-400 dark:focus:outline-none/"
      href={blogUrl}
    >
      {/* Blog post cover image */}
      <div className="relative h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:w-full before:h-full before:bg-gradient-to-t before:from-neutral-900/[.7]">
        <Image
          className="absolute start-0 top-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
          src={blogEntry.frontmatter.cardImage}
          alt={blogEntry.frontmatter.cardImageAlt}
          width={300}
          height={200}
        />
      </div>

      {/* Blog author's avatar and metadata */}
      <div className="absolute top-0 right-0 z-20 bg-primary rounded-l-full">
        <div className="flex h-full flex-col p-1 sm:p-2">
          <div className="flex items-center">
            <AvatarBlog
              blogEntry={{
                data: {
                  authorImage: blogEntry.frontmatter.authorImage,
                  authorImageAlt: blogEntry.frontmatter.author,
                },
              }}
            />
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-bold text-neutral-50">
                {blogEntry.frontmatter.author}
              </h4>
              <p className="text-xs text-neutral-50/[.8]">
                {formatDate(new Date(blogEntry.frontmatter.pubDate))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog post title and description */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex h-full flex-col px-4 sm:px-6 py-2 sm:py-2 bg-primary opacity-90 rounded-b">
          <h3 className="truncate overflow-hidden whitespace-nowrap font-bold sm:text-lg lg:text-xl text-neutral-50 group-hover:text-neutral-50/[.8]">
            {blogEntry.frontmatter.title}
          </h3>
          <p className="truncate overflow-hidden whitespace-nowrap mt-2 text-sm text-neutral-50/[.8]">
            {blogEntry.frontmatter.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;

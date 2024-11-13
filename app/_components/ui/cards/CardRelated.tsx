import { formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  blogEntry: {
    frontmatter: {
      cardImage: string;
      cardImageAlt: string;
      title: string;
      pubDate: string;
    };
    slug: string;
  };
  recentBlogLocale?: string;
}

// Define the functional component with props
const CardRelated: FC<Props> = ({ blogEntry, recentBlogLocale = "" }) => {
  const href =
    recentBlogLocale !== ""
      ? `/${recentBlogLocale}/blog/${blogEntry.slug}/`
      : `/blog/${blogEntry.slug}/`;

  return (
    <Link href={href} legacyBehavior>
      <a
        className="group block rounded-xl outline-none ring-zinc-500 transition duration-300 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"
        data-prefetch="true"
      >
        <div>
          <Image
            className="aspect-video rounded-xl"
            src={blogEntry.frontmatter.cardImage}
            alt={blogEntry.frontmatter.cardImageAlt}
            width={720}
            height={405}
            draggable={false}
          />
          {/* Blog title */}
          <h3 className="mt-2 text-balance text-lg font-medium text-neutral-800 group-hover:text-primary dark:text-neutral-300 dark:group-hover:text-neutral-50">
            {blogEntry.frontmatter.title}
          </h3>
          {/* Blog publication date */}
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(new Date(blogEntry.frontmatter.pubDate))}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default CardRelated;

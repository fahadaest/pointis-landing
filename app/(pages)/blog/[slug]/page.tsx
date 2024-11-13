import { Layout } from "@/components/Layout";
import { getBlogPosts } from "@/lib/getBlogPosts";
import { capitalize, formatDate } from "@/utils";
import AvatarBlogLarge from "@/app/_components/ui/avatars/AvatarBlogLarge";
import BookmarkButton from "@/app/_components/ui/buttons/Bookmark";
import CardRelated from "@/app/_components/ui/cards/CardRelated";
import SocialShare from "@/app/_components/ui/buttons/SocialShare";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/app/_components/ui/icons/loadingSpinner";

const MDXContentClient = dynamic(
  () => import("@/app/_components/mdx/MDXContentClient"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <LoadingSpinner
          props={{
            className: "w-10 h-10 text-primary",
          }}
        />
      </div>
    ),
  }
);

// Generate static paths for the blog posts
export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Fetch metadata dynamically for the blog post
export async function generateMetadata({ params }: { params: any }) {
  const blogPosts = await getBlogPosts();
  const post = blogPosts.find((post) => post.slug === params.slug);

  return {
    title: post ? post.frontmatter.title : "Blog Post",
  };
}

// Fetch blog post and related posts
async function getPostData(slug: string) {
  const blogPosts = await getBlogPosts();
  const post = blogPosts.find((post) => post.slug === slug);
  const relatedPosts = post
    ? blogPosts.filter((blogEntry) => blogEntry.slug !== post.slug)
    : [];

  return { post, relatedPosts };
}

// Generate static paths for the blog posts
// export async function getStaticPaths() {
//   const blogPosts = await getBlogPosts();

//   // Handle no blog posts case
//   if (!blogPosts) {
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }

//   return {
//     paths: blogPosts.map((post) => ({
//       params: { slug: post.slug },
//     })),
//     fallback: false,
//   };
// }

// Blog post detail
export default async function BlogPostPage({params}: {params: {slug: string} }) {

  const { post, relatedPosts } = await getPostData(params.slug);

  //  If Post not found
  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <Layout title={`${post.frontmatter.title}`}>
      <div className="dark:bg-custom-dark">
        <section className="mx-auto max-w-screen-mdxx px-4 pb-2 pt-6 sm:px-6 lg:px-8 lg:pt-10">
          <div className="mx-auto max-w-screen-mdx px-5">
            {/* Post metadata (author, date, read time) */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
                <AvatarBlogLarge blogEntry={post} />
                <div className="grow">
                  <div className="flex items-center justify-between gap-x-2">
                    <div>
                      {/* Author */}
                      <span className="font-bold text-neutral-700 dark:text-neutral-300">
                        {post.frontmatter.author}
                      </span>
                      <ul className="text-xs text-neutral-500">
                        {/* Published Date */}
                        <li className="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 dark:text-neutral-400 dark:before:bg-neutral-600">
                          {formatDate(new Date(post.frontmatter.pubDate))}
                        </li>
                        {/* Read Time */}
                        <li className="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 dark:text-neutral-400 dark:before:bg-neutral-600">
                          {post.frontmatter.readTime} min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Title */}
            <h2 className="mb-3 text-2xl font-semibold text-slateGray dark:text-neutral-200 md:text-3xl">
              {post.frontmatter.title}
            </h2>

            {/* Post Content */}
            <div className="md mb-5 space-y-5 md:mb-8 md:space-y-8">
              <article className="prose text-neutral-700 dark:text-neutral-300">
                <MDXContentClient
                  compiledSource={post.mdxSource.compiledSource}
                  frontmatter={post.frontmatter}
                  scope={post.mdxSource.scope}
                />
              </article>
            </div>

            {/* Post Tags */}
            <div className="mx-auto grid max-w-screen-lg gap-y-5 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
              <div className="flex flex-wrap gap-x-2 gap-y-1 sm:flex-nowrap sm:items-center sm:gap-y-0">
                {post.frontmatter.tags?.map((tag: any) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-x-1.5 rounded-lg bg-neutral-400/30 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:bg-neutral-700/60 dark:text-neutral-300"
                  >
                    {capitalize(tag)}
                  </span>
                ))}
              </div>

              {/* Bookmark and Share */}
              <div className="flex items-center justify-end gap-x-1.5">
                <BookmarkButton />
                <div className="mx-3 block h-4 border-e border-neutral-400 dark:border-neutral-500"></div>
                <div className="inline-flex">
                  <SocialShare pageTitle={post.frontmatter.title} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mx-auto max-w-screen-mdx px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-balance text-xl font-semibold text-slateGray dark:text-neutral-200 md:text-3xl md:leading-tight">
              Related articles
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {relatedPosts.length > 0 ? (
              relatedPosts.map((entry: any) => (
                <CardRelated key={entry.slug} blogEntry={entry} />
              ))
            ) : (
              <p className="text-neutral-500 dark:text-neutral-400">
                No related posts found.
              </p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}

import BlogCard from "@/app/_components/ui/cards/CardBlog";
import { Layout } from "@/components/Layout";
import { getBlogPosts } from "@/lib/getBlogPosts";
import React from "react";

type Props = {
  props: any;
};

// Define types for the posts
interface BlogPost {
  frontmatter: {
    title: string;
    description: string;
  };
  mdxSource: string;
  slug: string;
}

const Blog: React.FC<any> = async ({ props }) => {
  const posts = await getBlogPosts();

  return (
    <Layout title="Latest News & Articles">
      <section className="dark:bg-custom-dark min-h-screen">
        <section className="mx-auto max-w-screen-lg space-y-8 px-4 pt-12 sm:px-6 lg:px-8 2xl:max-w-full">
          {/* <!--Page header--> */}
          <div className="mx-auto max-w-3xl text-left sm:text-center py-4">
            <h1 className="text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slateGray dark:text-neutral-200">
              Latest News & <span className="text-primary">Articles.</span>
            </h1>

            <p className="mt-6 text-pretty text-neutral-600 dark:text-neutral-400">
              Transform Your Browsing into a Searchable Knowledge Base – No
              Note-Taking Required
            </p>
          </div>

          {/* <!--Blog Posts--> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {posts.map((post) => {
              if (!post || !post.frontmatter) return null;
              return (
                <div
                  key={post.slug}
                  className="bg-white dark:bg-custom-dark rounded-xl shadow-lg dark:shadow-gray-500"
                >
                  <BlogCard
                    blogEntry={{
                      frontmatter: {
                        cardImage: post.frontmatter.cardImage,

                        cardImageAlt: post.frontmatter.cardImageAlt,
                        authorImage: post.frontmatter.authorImage,
                        author: post.frontmatter.author,
                        pubDate: post.frontmatter.pubDate,
                        title: post.frontmatter.title,
                        description: post.frontmatter.description,
                      },
                      slug: post.slug,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Blog;

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

// Define the path to the 'en' content folder inside 'content'
const blogDirectory = path.join(process.cwd(), "content/blog/en");

// Define the types for blog post frontmatter and return structure
interface Frontmatter {
  title: string;
  description: string;
  author: string;
  authorImage: string;
  authorImageAlt: string;
  pubDate: string;
  cardImage: string;
  cardImageAlt: string;
  readTime: number;
  tags?: string[];
}

interface BlogPost {
  frontmatter: Frontmatter;
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
}

// Function to get all blog posts from the 'en' directory
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Get all file names from the /content/en directory
  const fileNames = fs.readdirSync(blogDirectory);

  // Read each file and extract the frontmatter
  const blogPosts = await Promise.all(
    fileNames.map(async (fileName) => {
      // Get the full path to the file
      const filePath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      // Use gray-matter to parse the frontmatter from the MDX file
      const { data: frontmatter, content } = matter(fileContents);

      // Serialize the MDX content for rendering
      const mdxSource = await serialize(content);

      // Return frontmatter + serialized content + slug
      return {
        frontmatter: frontmatter as Frontmatter,
        mdxSource,
        slug: fileName.replace(/\.mdx?$/, ""),
      };
    })
  );

  return blogPosts;
}

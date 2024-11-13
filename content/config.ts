import { z } from "zod";

export const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  contents: z.array(z.string()),
  author: z.string(),
  role: z.string().optional(),
  authorImage: z.string(),
  authorImageAlt: z.string(),
  pubDate: z.date(),
  cardImage: z.string(),
  cardImageAlt: z.string(),
  readTime: z.number(),
  tags: z.array(z.string()).optional(),
});

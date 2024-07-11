import { BlogPost as TBlogPost } from "../api/blogPost/BlogPost";

export const BLOGPOST_TITLE_FIELD = "id";

export const BlogPostTitle = (record: TBlogPost): string => {
  return record.id?.toString() || String(record.id);
};

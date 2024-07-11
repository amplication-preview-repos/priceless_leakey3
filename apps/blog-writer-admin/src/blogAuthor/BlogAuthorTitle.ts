import { BlogAuthor as TBlogAuthor } from "../api/blogAuthor/BlogAuthor";

export const BLOGAUTHOR_TITLE_FIELD = "id";

export const BlogAuthorTitle = (record: TBlogAuthor): string => {
  return record.id?.toString() || String(record.id);
};

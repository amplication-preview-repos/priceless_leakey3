import { BlogAuthorWhereInput } from "./BlogAuthorWhereInput";
import { BlogAuthorOrderByInput } from "./BlogAuthorOrderByInput";

export type BlogAuthorFindManyArgs = {
  where?: BlogAuthorWhereInput;
  orderBy?: Array<BlogAuthorOrderByInput>;
  skip?: number;
  take?: number;
};

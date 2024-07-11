import * as graphql from "@nestjs/graphql";
import { BlogAuthorResolverBase } from "./base/blogAuthor.resolver.base";
import { BlogAuthor } from "./base/BlogAuthor";
import { BlogAuthorService } from "./blogAuthor.service";

@graphql.Resolver(() => BlogAuthor)
export class BlogAuthorResolver extends BlogAuthorResolverBase {
  constructor(protected readonly service: BlogAuthorService) {
    super(service);
  }
}

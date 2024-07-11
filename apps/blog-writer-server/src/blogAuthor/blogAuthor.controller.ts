import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogAuthorService } from "./blogAuthor.service";
import { BlogAuthorControllerBase } from "./base/blogAuthor.controller.base";

@swagger.ApiTags("blogAuthors")
@common.Controller("blogAuthors")
export class BlogAuthorController extends BlogAuthorControllerBase {
  constructor(protected readonly service: BlogAuthorService) {
    super(service);
  }
}

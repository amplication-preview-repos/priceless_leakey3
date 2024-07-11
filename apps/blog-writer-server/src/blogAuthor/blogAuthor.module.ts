import { Module } from "@nestjs/common";
import { BlogAuthorModuleBase } from "./base/blogAuthor.module.base";
import { BlogAuthorService } from "./blogAuthor.service";
import { BlogAuthorController } from "./blogAuthor.controller";
import { BlogAuthorResolver } from "./blogAuthor.resolver";

@Module({
  imports: [BlogAuthorModuleBase],
  controllers: [BlogAuthorController],
  providers: [BlogAuthorService, BlogAuthorResolver],
  exports: [BlogAuthorService],
})
export class BlogAuthorModule {}

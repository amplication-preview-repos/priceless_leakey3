import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogAuthorServiceBase } from "./base/blogAuthor.service.base";

@Injectable()
export class BlogAuthorService extends BlogAuthorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

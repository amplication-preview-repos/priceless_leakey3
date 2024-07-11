/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlogAuthorService } from "../blogAuthor.service";
import { BlogAuthorCreateInput } from "./BlogAuthorCreateInput";
import { BlogAuthor } from "./BlogAuthor";
import { BlogAuthorFindManyArgs } from "./BlogAuthorFindManyArgs";
import { BlogAuthorWhereUniqueInput } from "./BlogAuthorWhereUniqueInput";
import { BlogAuthorUpdateInput } from "./BlogAuthorUpdateInput";

export class BlogAuthorControllerBase {
  constructor(protected readonly service: BlogAuthorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BlogAuthor })
  async createBlogAuthor(
    @common.Body() data: BlogAuthorCreateInput
  ): Promise<BlogAuthor> {
    return await this.service.createBlogAuthor({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BlogAuthor] })
  @ApiNestedQuery(BlogAuthorFindManyArgs)
  async blogAuthors(@common.Req() request: Request): Promise<BlogAuthor[]> {
    const args = plainToClass(BlogAuthorFindManyArgs, request.query);
    return this.service.blogAuthors({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BlogAuthor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async blogAuthor(
    @common.Param() params: BlogAuthorWhereUniqueInput
  ): Promise<BlogAuthor | null> {
    const result = await this.service.blogAuthor({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BlogAuthor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBlogAuthor(
    @common.Param() params: BlogAuthorWhereUniqueInput,
    @common.Body() data: BlogAuthorUpdateInput
  ): Promise<BlogAuthor | null> {
    try {
      return await this.service.updateBlogAuthor({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BlogAuthor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBlogAuthor(
    @common.Param() params: BlogAuthorWhereUniqueInput
  ): Promise<BlogAuthor | null> {
    try {
      return await this.service.deleteBlogAuthor({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

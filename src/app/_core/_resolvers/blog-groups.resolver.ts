import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ResponseData } from "../data/responseData";
import { BlogGroupDTO } from "../data/blogGroup/blogGroupDTO";
import { BlogGroupService } from "../_services/blogGroup.service";



export const BlogGroupsResolver: ResolveFn<ResponseData<BlogGroupDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(BlogGroupService).getAllBlogGroup();
    };

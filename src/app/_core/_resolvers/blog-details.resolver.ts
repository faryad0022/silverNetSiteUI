import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { BlogContentService } from "../_services/blog.service";
import { BlogContentDTO } from "../data/blogContent/blogContentDTO";
import { ResponseData } from "../data/responseData";



export const BlogDetailsResolver: ResolveFn<ResponseData<BlogContentDTO>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(BlogContentService).getBlogContentWithDetails(parseInt(route.paramMap.get('blogId')!));
    };

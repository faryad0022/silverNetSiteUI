import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { BannerService } from "../_services/banner.service";
import { BannerDTO } from "../data/banner/bannerDTO";
import { ResponseData } from "../data/responseData";
import { SocialDTO } from "../data/social/socialDTO";
import { SocialService } from "../_services/social.service";



export const SocialResolver: ResolveFn<ResponseData<SocialDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(SocialService).getAllSocial();
    };

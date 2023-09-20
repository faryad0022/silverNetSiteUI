import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { BannerService } from "../_services/banner.service";
import { BannerDTO } from "../data/banner/bannerDTO";
import { ResponseData } from "../data/responseData";



export const BannerResolver: ResolveFn<ResponseData<BannerDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(BannerService).getAllBanner();
    };

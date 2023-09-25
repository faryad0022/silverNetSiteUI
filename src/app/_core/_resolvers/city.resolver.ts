import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { BannerService } from "../_services/banner.service";
import { BannerDTO } from "../data/banner/bannerDTO";
import { ResponseData } from "../data/responseData";
import { CityDTO } from "../data/city/cityDTO";
import { CityService } from "../_services/city.service";



export const CityResolver: ResolveFn<ResponseData<CityDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(CityService).getCityListWithDetails();
    };

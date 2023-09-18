import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { PropertyVideoService } from "../_services/propertVideo.service";
import { PropertyVideoDTO } from "../data/propertyVideo/propertyVideoDTO";
import { ResponseData } from "../data/responseData";



export const PropertyVideoResolver: ResolveFn<ResponseData<PropertyVideoDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(PropertyVideoService).getAllPropertyVideo(parseInt(route.paramMap.get('propertyId')!));
    };

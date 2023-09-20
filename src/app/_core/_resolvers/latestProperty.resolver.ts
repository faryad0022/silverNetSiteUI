import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { PropertyService } from "../_services/property.service";
import { PropertyDTO } from "../data/property/propertyDTO";
import { ResponseData } from "../data/responseData";



export const LatestPropertyResolver: ResolveFn<ResponseData<PropertyDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(PropertyService).getLatestProperty();
    };

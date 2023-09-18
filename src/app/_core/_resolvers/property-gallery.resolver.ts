import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { PropertyGalleryService } from "../_services/propertGallery.service";
import { PropertyGalleryDTO } from "../data/propertyGallery/propertyGalleryDTO";
import { ResponseData } from "../data/responseData";



export const PropertyGalleryResolver: ResolveFn<ResponseData<PropertyGalleryDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(PropertyGalleryService).getAllPropertyGallery(parseInt(route.paramMap.get('propertyId')!));
    };

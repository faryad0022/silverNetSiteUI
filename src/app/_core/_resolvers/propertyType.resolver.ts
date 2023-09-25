import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { PropertyTypeService } from "../_services/propertyType.service";
import { PropertyTypeDTO } from "../data/propertyType/propertyTypeDTO";
import { ResponseData } from "../data/responseData";



export const PropertyTypeResolver: ResolveFn<ResponseData<PropertyTypeDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(PropertyTypeService).getAllPropertyType();
    };

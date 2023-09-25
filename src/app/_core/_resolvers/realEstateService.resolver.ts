import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { RealEstateServicesService } from "../_services/realestate-services.service";
import { RealEstateServiceDTO } from "../data/realestate-service/realestateServiceDTO";
import { ResponseData } from "../data/responseData";



export const RealEstateServiceResolver: ResolveFn<ResponseData<RealEstateServiceDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(RealEstateServicesService).getAllRealEstateService();
    };

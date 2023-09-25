import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ContractTypeService } from "../_services/contractType.service";
import { ContractTypeDTO } from "../data/contractType/contractTypeDTO";
import { ResponseData } from "../data/responseData";



export const PropertyContractTypeResolver: ResolveFn<ResponseData<ContractTypeDTO[]>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(ContractTypeService).getAllContractType();
    };

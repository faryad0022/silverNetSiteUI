import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyContractType_GetAll } from '../../_config/pathUtility/pathTool';
import { ContractTypeDTO } from '../data/contractType/contractTypeDTO';
import { ResponseData } from '../data/responseData';


@Injectable({ providedIn: 'root' })
export class ContractTypeService {


    constructor(private http: HttpClient) { }


    public getAllContractType(): Observable<ResponseData<ContractTypeDTO[]>> {
        return this.http.get<ResponseData<ContractTypeDTO[]>>(PropertyContractType_GetAll);
    }


}

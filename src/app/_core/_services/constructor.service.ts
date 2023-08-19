import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstructorInformation_GetAll } from '../../_config/pathUtility/pathTool';
import { ConstructorInformationDTO } from '../data/constructor/constructorInformationDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class ConstructorService {

    constructor(private http: HttpClient) { }


    public getAllConstructorInformation(): Observable<ResponseData<ConstructorInformationDTO[]>> {
        return this.http.get<ResponseData<ConstructorInformationDTO[]>>(ConstructorInformation_GetAll);
    }

}

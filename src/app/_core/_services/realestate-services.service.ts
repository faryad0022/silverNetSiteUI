import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstateService_GetAll } from '../../_config/pathUtility/pathTool';
import { RealEstateServiceDTO } from '../data/realestate-service/realestateServiceDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class RealEstateServicesService {

    constructor(private http: HttpClient) { }

    public getAllRealEstateService(): Observable<ResponseData<RealEstateServiceDTO[]>> {
        return this.http.get<ResponseData<RealEstateServiceDTO[]>>(RealEstateService_GetAll);
    }

}

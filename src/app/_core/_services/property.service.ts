import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property_Get, Property_GetAll, Property_GetLatest } from '../../_config/pathUtility/pathTool';
import { PropertyDTO } from '../data/property/propertyDTO';
import { ResponseData } from '../data/responseData';


@Injectable({ providedIn: 'root' })
export class PropertyService {


    constructor(private http: HttpClient) { }


    public getAllProperty(): Observable<ResponseData<PropertyDTO[]>> {
        return this.http.get<ResponseData<PropertyDTO[]>>(Property_GetAll);
    }

    public getPropertyWithDetails(id:number):Observable<ResponseData<PropertyDTO>>{
        let params = new HttpParams();
        params = params.append('id', id);              
        return this.http.get<ResponseData<PropertyDTO>>(Property_Get,{params})
    }

    public getLatestProperty():Observable<ResponseData<PropertyDTO[]>> {
        return this.http.get<ResponseData<PropertyDTO[]>>(Property_GetLatest)
    }


}

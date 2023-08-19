import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyPlan_GetAll } from 'src/app/_config/pathUtility/pathTool';
import { PropertyPlanDTO } from '../data/propertyPlan/propertyPlanDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class PropertyPlanService {


    constructor(private http: HttpClient) { }


    public getAllPropertyPlan(propertyId:number): Observable<ResponseData<PropertyPlanDTO[]>> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('propertyId', propertyId);
        return this.http.get<ResponseData<PropertyPlanDTO[]>>(PropertyPlan_GetAll,{params:queryParams});
    }

}

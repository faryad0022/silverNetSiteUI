import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyVideo_GetAll } from 'src/app/_config/pathUtility/pathTool';
import { PropertyVideoDTO } from '../data/propertyVideo/propertyVideoDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class PropertyVideoService {


    constructor(private http: HttpClient) { }


    public getAllPropertyVideo(propertyId:number): Observable<ResponseData<PropertyVideoDTO[]>> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('propertyId', propertyId);
        return this.http.get<ResponseData<PropertyVideoDTO[]>>(PropertyVideo_GetAll,{params:queryParams});
    }

}

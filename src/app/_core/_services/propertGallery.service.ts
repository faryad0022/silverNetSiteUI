import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyGallery_GetAll } from 'src/app/_config/pathUtility/pathTool';
import { PropertyGalleryDTO } from '../data/propertyGallery/propertyGalleryDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class PropertyGalleryService {


    constructor(private http: HttpClient) { }


    public getAllPropertyGallery(propertyId:number): Observable<ResponseData<PropertyGalleryDTO[]>> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('propertyId', propertyId);
        return this.http.get<ResponseData<PropertyGalleryDTO[]>>(PropertyGallery_GetAll,{params:queryParams});
    }


}

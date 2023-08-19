import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property_GetAll } from '../../_config/pathUtility/pathTool';
import { PropertyDTO } from '../data/property/propertyDTO';
import { ResponseData } from '../data/responseData';


@Injectable({ providedIn: 'root' })
export class PropertyService {


    constructor(private http: HttpClient) { }


    public getAllProperty(): Observable<ResponseData<PropertyDTO[]>> {
        return this.http.get<ResponseData<PropertyDTO[]>>(Property_GetAll);
    }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyType_GetAll } from '../../_config/pathUtility/pathTool';
import { PropertyTypeDTO } from '../data/propertyType/propertyTypeDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class PropertyTypeService {


    constructor(private http: HttpClient) { }


    public getAllPropertyType(): Observable<ResponseData<PropertyTypeDTO[]>> {
        return this.http.get<ResponseData<PropertyTypeDTO[]>>(PropertyType_GetAll);
    }


}

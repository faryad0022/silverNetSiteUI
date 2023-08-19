import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutUs_GetAll } from '../../_config/pathUtility/pathTool';
import { AboutUsDTO } from '../data/aboutUs/aboutUsDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class AboutUsService {


    constructor(private http: HttpClient) { }


    public getAllAboutUs(): Observable<ResponseData<AboutUsDTO[]>> {
        return this.http.get<ResponseData<AboutUsDTO[]>>(AboutUs_GetAll);
    }

}

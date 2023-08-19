import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    Banner_GetAll
} from '../../_config/pathUtility/pathTool';
import { BannerDTO } from '../data/banner/bannerDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class BannerService {


    constructor(private http: HttpClient) { }


    public getAllBanner(): Observable<ResponseData<BannerDTO[]>> {
        return this.http.get<ResponseData<BannerDTO[]>>(Banner_GetAll);
    }

}

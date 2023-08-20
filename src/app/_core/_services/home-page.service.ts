import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    HomePage
} from '../../_config/pathUtility/pathTool';
import { HomeDTO } from '../data/homeData/homeDTO';
import { ResponseData } from '../data/responseData';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HomePageService {


    constructor(private http: HttpClient) { }


    public getAllHomeData(): Observable<ResponseData<HomeDTO>> {
        return this.http.get<ResponseData<HomeDTO>>(HomePage);
    }

}

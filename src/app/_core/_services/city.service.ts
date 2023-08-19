import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City_GetCityListOfCountry_WithDetails, City_GetCityList_WithDetails } from '../../_config/pathUtility/pathTool';
import { CityDTO } from '../data/city/cityDTO';
import { ResponseData } from '../data/responseData';


@Injectable({ providedIn: 'root' })
export class CityService {


    constructor(private http: HttpClient) { }


    public getCityListOfCouuntryWithDetails(countryId: number): Observable<ResponseData<CityDTO[]>> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('countryId', countryId);
        return this.http.get<ResponseData<CityDTO[]>>(City_GetCityListOfCountry_WithDetails, { params: queryParams });
    }
    public getCityListWithDetails(): Observable<ResponseData<CityDTO[]>> {
        return this.http.get<ResponseData<CityDTO[]>>(City_GetCityList_WithDetails);
    }


}

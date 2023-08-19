import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country_GetAll } from '../../_config/pathUtility/pathTool';
import { CountryDTO } from '../data/country/countryDTO';
import { ResponseData } from '../data/responseData';


@Injectable({ providedIn: 'root' })
export class CountryService {


    constructor(private http: HttpClient) { }


    public getAllCountry(): Observable<ResponseData<CountryDTO[]>> {
        return this.http.get<ResponseData<CountryDTO[]>>(Country_GetAll);
    }


}

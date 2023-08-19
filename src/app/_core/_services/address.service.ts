import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address_GetAll } from '../../_config/pathUtility/pathTool';
import { AddressDTO } from '../data/address/addressDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class AddressService {


    constructor(private http: HttpClient) { }


    public getAllAddress(): Observable<ResponseData<AddressDTO[]>> {
        return this.http.get<ResponseData<AddressDTO[]>>(Address_GetAll);
    }

}

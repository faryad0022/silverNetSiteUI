import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Social_GetAll } from '../../_config/pathUtility/pathTool';
import { ResponseData } from '../data/responseData';
import { SocialDTO } from '../data/social/socialDTO';

@Injectable({ providedIn: 'root' })
export class SocialService {


    constructor(private http: HttpClient) { }


    public getAllSocial(): Observable<ResponseData<SocialDTO[]>> {
        return this.http.get<ResponseData<SocialDTO[]>>(Social_GetAll);
    }
}

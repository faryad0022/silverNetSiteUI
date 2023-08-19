import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    BlogGroup_GetAll
} from '../../_config/pathUtility/pathTool';
import { BlogGroupDTO } from '../data/blogGroup/blogGroupDTO';
import { ResponseData } from '../data/responseData';


@Injectable({ providedIn: 'root' })
export class BlogGroupService {


    constructor(private http: HttpClient) { }


    public getAllBlogGroup(): Observable<ResponseData<BlogGroupDTO[]>> {
        return this.http.get<ResponseData<BlogGroupDTO[]>>(BlogGroup_GetAll);
    }


}

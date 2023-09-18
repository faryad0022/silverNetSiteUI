import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogContent_GetAll_WithDetails, BlogContent_GetLatest, BlogContent_Get_WithDetails } from '../../_config/pathUtility/pathTool';
import { BlogContentDTO } from '../data/blogContent/blogContentDTO';
import { ResponseData } from '../data/responseData';


@Injectable({ providedIn: 'root' })
export class BlogContentService {


    constructor(private http: HttpClient) { }

    public getBlogContentWithDetails(id: number): Observable<ResponseData<BlogContentDTO>> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('id', id);        
        return this.http.get<ResponseData<BlogContentDTO>>(BlogContent_Get_WithDetails, { params: queryParams });
    }
    public getAllBlogContentWithDetails(): Observable<ResponseData<BlogContentDTO[]>> {
        return this.http.get<ResponseData<BlogContentDTO[]>>(BlogContent_GetAll_WithDetails);
    }
    public getLatestBlogsWithDetails():Observable<ResponseData<BlogContentDTO[]>>{
        return this.http.get<ResponseData<BlogContentDTO[]>>(BlogContent_GetLatest)
    }


}

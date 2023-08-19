import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonQuestiom_GetAll } from '../../_config/pathUtility/pathTool';
import { CommonQuestionDTO } from '../data/commonQuestion/commonQuestionDTO';
import { ResponseData } from '../data/responseData';

@Injectable({ providedIn: 'root' })
export class CommonQuestionService {


    constructor(private http: HttpClient) { }


    public getAllCommonQuestiom(): Observable<ResponseData<CommonQuestionDTO[]>> {
        return this.http.get<ResponseData<CommonQuestionDTO[]>>(CommonQuestiom_GetAll);
    }

}

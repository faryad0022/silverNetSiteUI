import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { GetAllTeamMemberPath } from '../../_config/pathUtility/pathTool';
import { ResponseData } from '../data/responseData';
import { TeamMemberDTO } from '../data/team/team-member-DTO';

@Injectable({ providedIn: 'root' })
export class TeamMemberService {
    response: BehaviorSubject<ResponseData<TeamMemberDTO>> = new BehaviorSubject<any>(null);

    constructor(private http: HttpClient) { }


    public getAllTeamMember(): Observable<ResponseData<TeamMemberDTO[]>> {
        return this.http.get<ResponseData<TeamMemberDTO[]>>(GetAllTeamMemberPath);
    }
}

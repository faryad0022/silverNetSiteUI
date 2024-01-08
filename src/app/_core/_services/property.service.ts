import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Property_Get, Property_GetAll, Property_GetLatest } from '../../_config/pathUtility/pathTool';
import { PropertyDTO } from '../data/property/propertyDTO';
import { ResponseData } from '../data/responseData';
import { FilterPropertyDTO } from '../data/property/filterPropertyDTO';
import { Property_GetFilter } from '../../_config/pathUtility/pathTool';


@Injectable({ providedIn: 'root' })
export class PropertyService {
    filterValues: FilterPropertyDTO = null;
    private subject = new BehaviorSubject(this.filterValues);
    constructor(private http: HttpClient) { }

    public setFilterValues(filter: FilterPropertyDTO) {
        this.subject.next(filter)
    }
    public resetFilterValues() {
        this.subject.next(this.filterValues)
    }
    public getFilterValues() {
        return this.subject.asObservable();
    }




    public getAllProperty(): Observable<ResponseData<PropertyDTO[]>> {
        return this.http.get<ResponseData<PropertyDTO[]>>(Property_GetAll);
    }

    public getPropertyWithDetails(id: number): Observable<ResponseData<PropertyDTO>> {
        let params = new HttpParams();
        params = params.append('id', id);
        return this.http.get<ResponseData<PropertyDTO>>(Property_Get, { params })
    }

    public getLatestProperty(): Observable<ResponseData<PropertyDTO[]>> {
        return this.http.get<ResponseData<PropertyDTO[]>>(Property_GetLatest)
    }
    public getFilteredProperties(filter?: FilterPropertyDTO): Observable<ResponseData<FilterPropertyDTO>> {
        let params;
        if (filter !== null) {
            params = new HttpParams()

                .set('cityId', filter.cityId.toString())
                .set('pageId', filter.pageId.toString())
                .set('propertyContractTypeId', filter.propertyContractTypeId.toString())
                .set('propertyTypeId', filter.propertyTypeId.toString())
                .set('numberOfBathroom', filter.numberOfBathroom.toString())
                .set('numberOfBedroom', filter.numberOfBedroom.toString())
        }

        return this.http.get<ResponseData<FilterPropertyDTO>>(Property_GetFilter, { params });
    }

}

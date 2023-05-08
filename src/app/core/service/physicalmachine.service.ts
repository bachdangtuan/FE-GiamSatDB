import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";

@Injectable({providedIn: 'root'})
export class PhysicalMachineService {

    constructor(public http: HttpClient) {
    }
    public getCompanyDetail(id: any): Observable<any> {
        return this.http.get(`${API_URL.LIST_PHYSICAL_MACHINE}/${id}`) as Observable<any>;
    }

}

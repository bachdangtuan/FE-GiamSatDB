import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";

@Injectable({providedIn: 'root'})
export class ProjectService {

    constructor(public http: HttpClient) {
    }
    public getCompanyDetail(id: any): Observable<any> {
        return this.http.get(`${API_URL.LIST_PROJECT}/${id}`) as Observable<any>;
    }

}

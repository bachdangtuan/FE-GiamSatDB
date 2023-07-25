import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})


export class DiskpartitionService {
    private username = 'bachdangtuan.dev@gmail.com'; // Replace with your API username
    private password = 'Tuan!Bach@Dang#93&deV';

    constructor(public http: HttpClient) {

    }

    public getInfoDiskService(param: any): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
            })
        };

        return this.http.get(API_URL.LIST_DISK, {
            headers:httpOptions.headers,
            params: param
        }) as Observable<any>;
    }

}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DiskpartitionService {

  constructor(public http: HttpClient) { }

  public getInfoDiskService(param: any): Observable<any> {

    return this.http.get(API_URL.LIST_DISK, {
      params: param
    }) as Observable<any>;
  }

}

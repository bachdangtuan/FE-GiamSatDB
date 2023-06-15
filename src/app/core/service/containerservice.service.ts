import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../constants/url";

@Injectable({
  providedIn: 'root'
})
export class ContainerserviceService {

  constructor(public http: HttpClient) {}


  public getInfoContainerService(param: any): Observable<any> {

    return this.http.get(API_URL.LIST_CONTAINER, {
      params: param
    }) as Observable<any>;
  }


}

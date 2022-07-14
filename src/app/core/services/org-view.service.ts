import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrgViewService {

  constructor(private http:HttpClient) { }

  public getOrgData():Observable<any>{
    return this.http.get('https://ongapi.alkemy.org/api/organization');
  }
}

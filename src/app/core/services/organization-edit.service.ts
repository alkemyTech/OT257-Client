import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from 'src/app/core/models/IOrganization';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrganizationEditService {

  url = environment.urlOrganization;

  constructor(private http: HttpClient) { }

  public getorganizationData(): Observable<any> {
    return this.http.get(this.url);
  }

  public getOrganizationDataById(id: string): Observable<any> {
    return this.http.get(this.url + "/" + id);
  }

  public editOrganization(id: string, data: Data): Observable<any> {
    return this.http.put(this.url + "/" + id, data);
  }
}

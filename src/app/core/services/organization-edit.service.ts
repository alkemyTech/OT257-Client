import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization, Data } from 'src/app/core/models/IOrganization';


@Injectable({
  providedIn: 'root'
})
export class OrganizationEditService {

  constructor(private http: HttpClient) { }

  public getorganizationData(): Observable<any> {
    return this.http.get('https://ongapi.alkemy.org/api/organization');
  }

  public getOrganizationDataById(id: string): Observable<any> {
    return this.http.get(`https://ongapi.alkemy.org/api/organization/${id}`);
  }

  public editOrganization(id: string, data: Data): Observable<any> {
    return this.http.put(`https://ongapi.alkemy.org/api/organization/${id}`, data);
  }
}

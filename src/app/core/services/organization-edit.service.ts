import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from 'src/app/core/models/IOrganization';
import { environment } from "src/environments/environment";
import { PrivateApiServiceService } from './private-api-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationEditService extends PrivateApiServiceService {

  url = environment.urlOrganization;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  public getorganizationData(): Observable<any> {
    return this.sendGetRequest(this.url);
  }

  public getOrganizationDataById(id: string): Observable<any> {
    return this.sendGetRequest(this.url, id);
  }

  public editOrganization(id: string, data: Data): Observable<any> {
    return this.sendPutRequest(this.url, id, data);
  }
}

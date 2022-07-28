import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { PrivateApiServiceService } from './private-api-service.service';


@Injectable({
  providedIn: 'root'
})
export class OrgViewService extends PrivateApiServiceService {

  url = environment.urlOrganization;

  constructor(private httpClient: HttpClient) { super(httpClient); }

  public getorganizationData() {
    return this.sendGetRequest(`${this.url}`);
  }
}

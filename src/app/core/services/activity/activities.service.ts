import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "../../models/activity.model";
import { PrivateApiServiceService } from '../private-api-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class ActivitiesService extends PrivateApiServiceService{
  
  private url = "https://ongapi.alkemy.org/api";


  constructor(private httpClient: HttpClient) {
    super(httpClient)
  }

  getActivity() {
    return this.sendGetRequest(`${this.url}/activities`);
  }

  createActivity(data: Activity) {
    return this.sendPostRequest(`${this.url}/activities`, data);
  }

  getActivityById(id: number) {
    return this.sendGetRequest(`${this.url}/activities`, id);
  }

  updateActivity(id: number, data: Activity) {
    return this.sendPutRequest(`${this.url}/activities`, id, data);
  }

  deleteActivity(id: number) {
    return this.sendDeleteRequest(`${this.url}/activities`, id);
  }

  getListActivity(): Observable<any>{
    return this.http.get(`${this.url}/activities`);
  }
}

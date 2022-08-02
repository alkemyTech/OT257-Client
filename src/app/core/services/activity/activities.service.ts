import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "../../models/activity.model";
import { PrivateApiServiceService } from '../private-api-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: "root",
})
export class ActivitiesService extends PrivateApiServiceService{
  
  url = environment.urlActivities;


  constructor(private httpClient: HttpClient) {
    super(httpClient)
  }

  getActivity() {
    return this.sendGetRequest(`${this.url}`);
  }

  createActivity(data: Activity) {
    return this.sendPostRequest(`${this.url}`, data);
  }

  getActivityById(id: number) {
    return this.sendGetRequest(`${this.url}`, id);
  }

  updateActivity(id: number, data: Activity) {
    return this.sendPutRequest(`${this.url}`, id, data);
  }

  deleteActivity(id: number) {
    return this.sendDeleteRequest(`${this.url}`, id);
  }

}

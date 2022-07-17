import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Activity } from "../models/activity.model";

@Injectable({
  providedIn: "root",
})
export class ActivitiesService {
  private url = "https://ongapi.alkemy.org/api";

  constructor(private http: HttpClient) {}

  createActivity(data: Activity) {
    return this.http.post(`${this.url}/activities`, data);
  }
}

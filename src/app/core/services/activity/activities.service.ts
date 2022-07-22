import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Activity } from "../../models/activity.model";

@Injectable({
  providedIn: "root",
})
export class ActivitiesService {
  private url = "https://ongapi.alkemy.org/api";

  constructor(private http: HttpClient) {}

  createActivity(data: Activity) {
    return this.http.post(`${this.url}/activities`, data);
  }

  getActivity(id: number) {
    return this.http.get(`${this.url}/activities/${id}`);
  }

  updateActivity(id: number, data: Activity) {
    return this.http.put(`${this.url}/activities/${id}`, data);
  }

  getImageAsBlob(url: string): Observable<Blob>{
    return this.http.get(url,{responseType:'blob'})
  }

  getListActivity(): Observable<any>{
    return this.http.get(`${this.url}/activities`);
  }
}

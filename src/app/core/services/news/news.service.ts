import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { NewModel } from "../../models/new.model";
import { PrivateApiServiceService } from '../private-api-service.service';


@Injectable({
  providedIn: "root",
})
export class NewsService extends PrivateApiServiceService {
  url = "https://ongapi.alkemy.org/api/news";

  constructor(private httpClient:HttpClient) {

    super(httpClient);
  }




 // Get all items
  getNews() {
    return this.sendGetRequest(`${this.url}`);
    //return this.http.get(`${this.url}`);
  }

  createNew(dataNew: NewModel) {
    return this.sendPostRequest(`${this.url}`, dataNew);
  }

  getNew(id: string) {
    return this.sendGetRequest(`${this.url}/${id}`);
  }

/*
  updateNew(id: string, dataNew: NewModel) {
    dataNew["id"] = id;
    return this.http.put(`${this.url}/${id}`, dataNew);
  }

  createNew(dataNew: NewModel) {
    return this.http.post(`${this.url}`, dataNew);
  }

  deleteNew(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getNew(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  */
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { NewModel } from "../../models/new.model";
import { PrivateApiServiceService } from "../private-api-service.service";

@Injectable({
  providedIn: "root",
})
export class NewsService extends PrivateApiServiceService {
  url = "https://ongapi.alkemy.org/api/news";

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  // Get all items
  getNews() {
    return this.sendGetRequest(`${this.url}`);
  }

  createNew(dataNew: NewModel) {
    return this.sendPostRequest(`${this.url}`, dataNew);
  }

  getNew(id: string) {
    return this.sendGetRequest(`${this.url}`, id);
  }

  updateNew(id: string, dataNew: NewModel) {
    dataNew["id"] = id;
    return this.sendPutRequest(`${this.url}`, id, dataNew);
  }

  deleteNew(id: string) {
    return this.sendDeleteRequest(`${this.url}`, id);
  }
}

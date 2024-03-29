import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { NewModel } from "../../models/new.model";
import { PrivateApiServiceService } from "../private-api-service.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewsService extends PrivateApiServiceService {

  //Get URL of environment
  url = environment.urlNews;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  // Get all items
  getNews() {
    return this.sendGetRequest(`${this.url}`);
  }

  gerNewsSearch(search: string) {
    return this.sendGetRequest(`${this.url}?search=${search}`);
  }

  createNew(dataNew: NewModel) {
    return this.sendPostRequest(`${this.url}`, dataNew);
  }

  getNew(id: string | null) {
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

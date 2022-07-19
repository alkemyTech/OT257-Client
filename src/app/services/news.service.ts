import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewModel } from "../models/new.model";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  url = "https://ongapi.alkemy.org/api/news";

  constructor(private http: HttpClient) {}

  updateNew(id: string, dataNew: NewModel) {
    dataNew["id"] = id;

    return this.http.put(`${this.url}/${id}`, dataNew);
  }

  createNew(dataNew: NewModel) {
    return this.http.post(`${this.url}`, dataNew);
  }

  getNew(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  getNews() {
    return this.http.get(`${this.url}`);
  }
}

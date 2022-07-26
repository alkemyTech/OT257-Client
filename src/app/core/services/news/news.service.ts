import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewModel } from "../../models/new.model";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  url = "https://ongapi.alkemy.org/api/news";

  constructor(private http: HttpClient) {}


  getNews() {
    return this.http.get(`${this.url}`);
  }


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

}

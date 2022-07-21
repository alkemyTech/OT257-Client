import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  //funtion get categories

  getCategories() {
    return this.http.get("https://ongapi.alkemy.org/api/categories");
  }
}

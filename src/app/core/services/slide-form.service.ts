import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SlideFormService {
  URL: string = "https://ongapi.alkemy.org/api/slides";
  constructor(private httpClient: HttpClient) {}

  saveSlide(form: any): Observable<any> {
    return this.httpClient.post(this.URL, form);
  }

  getSlide(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  getOneSlide(id:any):Observable<any>{
    return this.httpClient.get(this.URL+"/"+id);
  }

  updateSlide(slide:any, id:any):Observable<any>{
    return this.httpClient.put(this.URL+"/"+id, slide);
  }

  deleteSlide(id:any):Observable<any>{
    return this.httpClient.delete(`${this.URL}/slides/${id}`);
  }
}

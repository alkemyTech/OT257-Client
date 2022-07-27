import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PrivateApiServiceService } from '../services/private-api-service.service';

@Injectable({
  providedIn: "root",
})
export class SlideFormService extends PrivateApiServiceService{

  URL: string = "https://ongapi.alkemy.org/api/slides";
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  saveSlide(form: any) {
    return this.sendPostRequest(`${this.URL}`,form);
  }

  getSlide() {
    return this.sendGetRequest(this.URL);
  }

  getOneSlide(id:any){
    return this.sendGetRequest(this.URL,id);
  }

  updateSlide(slide:any, id:any){
    return this.sendPutRequest(this.URL,id, slide);
  }

  deleteSlide(id:any){
    return this.sendDeleteRequest(`${this.URL}`,id);
  }
}

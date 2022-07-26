import { Injectable } from "@angular/core";
import { PrivateApiServiceService } from '../private-api-service.service';

@Injectable({
  providedIn: "root",
})
export class HomeService extends PrivateApiServiceService{
  
  private url = "https://ongapi.alkemy.org/api";


  getDatesPublics() {
    return this.sendGetRequest(`${this.url}/organization`);
  }

  getNews() {
    return this.sendGetRequest(`${this.url}/news`);
  }

  getSlider() {
    return this.sendGetRequest(`${this.url}/slides`);
  }



}

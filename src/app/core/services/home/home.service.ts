import { Injectable } from "@angular/core";
import { PublicApiServicesService } from "../api-services/public-api-services.service";

@Injectable({
  providedIn: "root",
})
export class HomeService extends PublicApiServicesService{
  
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

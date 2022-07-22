import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  
  private url = "https://ongapi.alkemy.org/api";


  constructor(private http: HttpClient) { }


  getSlider(){
    return this.http.get(`${this.url}/slides`);
  }

}

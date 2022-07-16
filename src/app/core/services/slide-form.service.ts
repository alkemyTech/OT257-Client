import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideFormService {
URL: string = 'https://ongapi.alkemy.org/api/slides';
  constructor(private httpClient: HttpClient) { }


saveSlide(form:any):Observable<any>{
  return this.httpClient.post(this.URL, form);
}

getSlide():Observable<any>{
  return this.httpClient.get(this.URL);
}
}

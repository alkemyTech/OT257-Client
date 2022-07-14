import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewModel } from '../models/new.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  //new:NewModel=new NewModel;

  constructor(private http: HttpClient) { }



  updateNew(dataNew: NewModel) {


  }


  createNew(dataNew: NewModel) {



    return this.http.post("https://ongapi.alkemy.org/api/news",dataNew);



  }



}

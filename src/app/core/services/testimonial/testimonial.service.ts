import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonial } from '../../models/testimonial.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private url = environment.urlTestimonials;


  constructor(private http: HttpClient) { }


  createTestimonial(data: Testimonial) {
    return this.http.post(`${this.url}/testimonials`, data);
  }

  getTestimonial(id: number) {
    return this.http.get(`${this.url}/testimonials/${id}`);
  }

  updateTestimonial(id: number, data: Testimonial) {
    return this.http.put(`${this.url}/testimonials/${id}`, data);
  }

  getImageAsBlob(url: string): Observable<Blob>{
    return this.http.get(url,{responseType:'blob'})
  }
}

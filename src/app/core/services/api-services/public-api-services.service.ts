import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

export class PublicApiServicesService {
    
  constructor(private http: HttpClient) {}

  private httpHeaders = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  /**
   * Send a GET request
   * @param url
   * @returns {Promise<Object>}
   */
  public async sendGetRequest(url: any, id: any|null): Promise<any> {
    return this.http
      .get(url + "/" + id, this.httpHeaders)
      .pipe(
        tap({
          error: (error) => {
            if (error.status === 500) {
              // Handle 500
            } else if (error.status === 400) {
              // Handle 400
            } else if (error.status === 401) {
              // Handle 401
            }
          },
        })
      )
      .toPromise();
  }
}

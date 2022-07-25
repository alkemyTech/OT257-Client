import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PrivateApiServiceService {
  private httpHeaders = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private http: HttpClient) {}

  /**
   * Send a POST request
   * @param url
   * @param data
   * @returns {Promise<Object>}
   */
  public async sendPostRequest(url: any, data: any) {
    return this.http
      .post(url, data, this.httpHeaders)
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

  /** Send a GET request*/
  public async sendGetRequest(url: any, id: any | null) {
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

  /**
   * send delete request
   *
   * @param url
   * @param id
   */
   public async sendDeleteRequest(url: string, id: number): Promise<any> {
    return this.http
      .delete(`${url}/${id}`, this.httpHeaders)
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

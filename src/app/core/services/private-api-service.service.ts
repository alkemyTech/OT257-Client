import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PrivateApiServiceService {

    constructor(private http: HttpClient) { 
       
      }

  private httpHeaders = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'  
    })
};
  
verifyToken(){
    let token = JSON.parse(localStorage.getItem('token') || '{}');
    const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      };
    if(token){
        return httpOptions;
    }else{
        return null;
    }
}


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
      ).toPromise();
  }

    /**
   * Send a PATCH request
   * @param url 
   * @param id 
   * @param data 
   * @returns {Promise<Object>}
   */
     public async sendPatchRequest(url: any, id: any, data: any) {
      return this.http
        .patch(`${url}/${id}`, data, this.httpHeaders)
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
        ).toPromise();
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
   * send put request
   * 
   * @param url 
   * @param id 
   * @param data 
   * @returns {Promise<Object>}
   */
  public async sendPutRequest(url: string, id: number, data: any): Promise<any> {
    return this.http
      .put(`${url}/${id}`, data, this.httpHeaders)
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
      ).toPromise();
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
          ).toPromise();
      }
}

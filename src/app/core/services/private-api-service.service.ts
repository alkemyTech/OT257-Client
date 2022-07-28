import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";

import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})

export class PrivateApiServiceService {

    toast = Swal.mixin({
        toast: true,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        position: "bottom-end",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });



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




   public sendPostRequest(url: string, data: any): Observable<any> {
    return this.http.post(url, data, this.httpHeaders).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err: Error) => {
        return this.toast.fire({
          icon: "error",
          title: `Error de conexión ${err.name}`,
        });
      })
    );
  }


  /** Send a GET request*/
  public sendGetRequest(url: string, id?: any): Observable<any> {
    return this.http.get(url + `${id ? "/"+id : ""}`, this.httpHeaders).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err: Error) => {
        return this.toast.fire({
          icon: "error",
          title: `Error de conexión ${err.name}`,
        });
      })
    );
  }

  /**
   * send put request
   * 
   * @param url 
   * @param id 
   * @param data 
   * @returns {Promise<Object>}
   */
  

   /** Send a GET request*/
   public sendPutRequest(url: string, id?: any, data?: any): Observable<any> {
    return this.http.put(`${url}/${id}`,data,  this.httpHeaders).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err: Error) => {
        return this.toast.fire({
          icon: "error",
          title: `Error de conexión ${err.name}`,
        });
      })
    );
  }

   /**
   * send delete request
   *
   * @param url
   * @param id
   */
    public sendDeleteRequest(url: string, id?: any): Observable<any> {
        return this.http.delete(`${url}/${id}`,  this.httpHeaders).pipe(
          map((res: any) => {
           
            return res;
          }),
          catchError((err: Error) => {
            return this.toast.fire({
              icon: "error",
              title: `Error de conexión ${err.name}`,
            });
          })
        );
      }
}

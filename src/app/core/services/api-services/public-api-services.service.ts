import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})

export class PublicApiServicesService {
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

  public sendGetRequest(url: string, id?: any): Observable<any> {
    return this.http.get(url + `${id ? id : ""}`, this.httpHeaders).pipe(
      catchError((err: Error) => {
        return this.toast.fire({
          icon: "error",
          title: err.name,
        });
      })
    );
  }

  public sendPostRequest(url: string, data: any): Observable<any> {
    return this.http.post(url, data, this.httpHeaders).pipe(
      catchError((err: Error) => {
        return this.toast.fire({
          icon: "error",
          title: err.name,
        });
      })
    );
  }
}

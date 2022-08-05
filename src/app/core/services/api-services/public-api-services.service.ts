import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { toastError } from "src/app/shared/components/layouts/alerts/alerts";

@Injectable({
  providedIn: "root",
})

export class PublicApiServicesService {

  private httpHeaders = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  public sendGetRequest(url: string, id?: any): Observable<any> {
    return this.http.get(url + `${id ? id : ""}`, this.httpHeaders).pipe(
      catchError((err: Error) => {
        return toastError.fire({
          title: 'Ocurrio un error'
        });
      })
    );
  }

  public sendPostRequest(url: string, data: any): Observable<any> {
    return this.http.post(url, data, this.httpHeaders).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((err: Error) => {
        return toastError.fire({
          title: 'Ocurrio un error'
        });
      })
    );
  }
}

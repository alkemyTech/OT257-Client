import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PublicApiServicesService {

    private httpHeaders = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(private http: HttpClient) { }

    /**
       * Send a GET request
       * @param url
       * @returns {Promise<Object>}
       */
    public async sendGetRequest(url: any, id: any): Promise<any> {
        return this.http.get(url + '/' + id, this.httpHeaders).pipe(
            tap({
                error: error => {
                    if (error.status === 500) {
                        // Handle 500
                    } else if (error.status === 400) {
                        // Handle 400
                    } else if (error.status === 401) {
                        // Handle 401
                    }
                }
            })).toPromise();
    }

    public async sendPostRequest(url: any, data: any): Promise<any> {
        return this.http.post(url, data, this.httpHeaders).pipe(
            tap({
                error: error => {
                    if (error.status === 500) {
                        // Handle 500
                    } else if (error.status === 400) {
                        // Handle 400
                    } else if (error.status === 401) {
                        // Handle 401
                    }
                }
            })).toPromise();
    }
}

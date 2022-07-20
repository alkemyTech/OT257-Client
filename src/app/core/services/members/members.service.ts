import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MembersService {
  url = "https://ongapi.alkemy.org/api/members";

  constructor(private http: HttpClient) {}

  updateMember(id: string, dataMember: any) {
    dataMember["id"] = id;

    return this.http.put(`${this.url}/${id}`, dataMember);
  }

  createMember(dataMember: any) {
    return this.http.post(`${this.url}`, dataMember);
  }

  getMember(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }
}

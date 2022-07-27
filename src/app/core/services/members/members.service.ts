import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PrivateApiServiceService } from "../private-api-service.service";

@Injectable({
  providedIn: "root",
})
export class MembersService  extends PrivateApiServiceService{
  url = "https://ongapi.alkemy.org/api/members/";

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
  

  getMembers() {
    return this.sendGetRequest(`${this.url}`);
  }

  updateMember(id: string, dataMember: any) {
    dataMember["id"] = id;
    return this.sendPutRequest(`${this.url}`,id, dataMember);
  }

  createMember(dataMember: any) {
    return this.sendPostRequest(`${this.url}`, dataMember);
  }

  deleteMember(id: string) {
    return this.sendDeleteRequest(`${this.url}`,id);
  }

  getMember(id: string) {
    return this.sendGetRequest(`${this.url}`,id);
  }
}

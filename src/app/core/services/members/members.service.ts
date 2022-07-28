import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PrivateApiServiceService } from "../private-api-service.service";

@Injectable({
  providedIn: "root",
})
export class MembersService extends PrivateApiServiceService {

  //It use environment and it save in variable url
  url = environment.urlMembers;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getMembers() {
    return this.sendGetRequest(`${this.url}`);
  }

  updateMember(id: string, dataMember: any) {
    dataMember["id"] = id;
    return this.sendPutRequest(`${this.url}`, id, dataMember);
  }

  createMember(dataMember: any) {
    return this.sendPostRequest(`${this.url}`, dataMember);
  }

  deleteMember(id: string) {
    return this.sendDeleteRequest(`${this.url}`, id);
  }

  getMember(id: string) {
    return this.sendGetRequest(`${this.url}`, id);
  }
}

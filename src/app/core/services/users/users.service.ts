import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../../models/user.model";
import { PrivateApiServiceService } from "../private-api-service.service";

@Injectable({
  providedIn: "root",
})
export class UsersService extends PrivateApiServiceService {
  url = "https://ongapi.alkemy.org/api/users";
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getUsers() {
    return this.sendGetRequest(`${this.url}`);
  }

  createUser(dataUser: User) {
    return this.sendPostRequest(`${this.url}`, dataUser);
  }

  getUser(id: string) {
    return this.sendGetRequest(`${this.url}`, id);
  }

  updateUser(id: any, dataUser: User) {
    dataUser["id"] = id;
    return this.sendPutRequest(`${this.url}`, id, dataUser);
  }

  deleteUser(id: string) {
    return this.sendDeleteRequest(`${this.url}`, id);
  }
}

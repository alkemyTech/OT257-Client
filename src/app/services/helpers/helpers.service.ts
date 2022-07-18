import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelpersService {
  constructor() {}

  /* check if image is jpg or png */
  fileExtensionCheck(event: any) {
    const extensionFile = event.target.files[0].type;
    if (extensionFile === "image/jpg" || extensionFile === "image/png") {
      return true;
    } else {
      return false;
    }
  }
}

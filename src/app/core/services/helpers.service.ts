import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  /* check if image is jpg or png */
  fileExtensionCheck( event: any ) {
    const extensionFile = event.target.files[0].type;

    if ( extensionFile === 'image/jpg' || extensionFile === 'image/png' ) {
      return true
    } else {
      return false
    }
  }

  // convert file image to base64
  convertFileToBase64(file:any):Observable<string>{
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();

    reader.readAsBinaryString(file.target.files[0]);
    reader.onload = (event) => result.next(btoa(event.target?.result?.toString() ?? ''));
    return result;
  }

}

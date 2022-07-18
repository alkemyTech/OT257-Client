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

    return extensionFile === 'image/jpg' || extensionFile === 'image/png' ;
  }
}

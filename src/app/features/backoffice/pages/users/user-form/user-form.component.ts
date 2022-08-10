import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @ViewChild("placesRef") placesRef!: GooglePlaceDirective;

  options: any = {
    types: [],
    componentRestrictions: { country: 'AR' }
  };

  constructor() { }

  ngOnInit(): void {
  }

  public handleAddressChange(address: Address) {
    // Do some stuff
  }

}

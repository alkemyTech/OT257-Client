import { Component, OnInit, ViewChild } from "@angular/core";
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { Address } from "ngx-google-places-autocomplete/objects/address";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  @ViewChild("placesRef") placesRef!: GooglePlaceDirective;

  options: any = {
    types: [],
    componentRestrictions: { country: "AR" },
  };
  title!: string;
  latitude!: number;
  longitude!: number;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  display: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setCurrentPosition();
  }

  handleAddressChange(address: Address) {
    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
    this.center = {
      lat: this.latitude,
      lng: this.longitude,
    };
    this.zoom = 15;
  }

  public setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.zoom = 15;
      });
    }
  }

  moveMap(event: google.maps.MapMouseEvent | any) {
    this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent | any) {
    this.display = event.latLng.toJSON();
  }
}

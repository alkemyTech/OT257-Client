import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { circle, icon, Map, marker, tileLayer } from "leaflet";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.min(10000000), Validators.required]],
      message: ["", [Validators.required]],
    });
  }

  get Name() {
    return this.form.get("name");
  }
  get Email() {
    return this.form.get("email");
  }
  get Phone() {
    return this.form.get("phone");
  }
  get Message() {
    return this.form.get("message");
  }

  ngAfterViewInit(): void {
    const map = new Map("map").setView([-34.59771,-58.37742], 13);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const greenIcon = icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    const marketItem = marker([-34.59771,-58.37742], {icon: greenIcon}).addTo(map).bindPopup("Nuestra institución");

    map.fitBounds([
      [marketItem.getLatLng().lat, marketItem.getLatLng().lng]
    ]);
  }

  ngOnInit(): void {}

  sendConsult() {
    if (this.form.valid) {
    } else {
      this.form.markAllAsTouched();
    }
  }
}

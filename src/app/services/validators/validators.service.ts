import { Injectable } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ValidatorsService {
  constructor() {}

  typeImagen(control: FormControl): ValidationErrors | null {
    if (!control.value?.includes("JPG") && !control.value?.includes("PNG")) {
      return {
        imageNoValido: true,
      };
    }

    return null;
  }
}

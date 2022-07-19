import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-back-office-home',
  templateUrl: './back-office-home.component.html',
  styleUrls: ['./back-office-home.component.scss']
})
export class BackOfficeHomeComponent implements OnInit {

  homeForm!: FormGroup;


  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.editHomeForm();
  }

  editHomeForm() {
    this.homeForm = this.fb.group({
      longDescription: ["", [Validators.required, Validators.minLength(20)]],
    });
  }

  invalidInput(input: string) {
    // return this.homeForm.get(input).invalid && this.homeForm.get(input).touched;
  }

  onSubmit() {
    console.log(this.homeForm.value);
  }

}

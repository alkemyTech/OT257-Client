import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-back-office-home',
  templateUrl: './back-office-home.component.html',
  styleUrls: ['./back-office-home.component.scss']
})
export class BackOfficeHomeComponent implements OnInit {

  homeForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  invalidInput(input: string) {
    // return this.homeForm.get(input).invalid && this.homeForm.get(input).touched;
  }

  onSubmit() {
    console.log(this.homeForm.value);
  }

}

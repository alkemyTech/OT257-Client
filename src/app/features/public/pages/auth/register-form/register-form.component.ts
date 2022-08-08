import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  template: `
  <div class="formRegister">
    <app-auth-form [options]='options'></app-auth-form>
  </div>
  `,
  styles: ['']
})
export class RegisterFormComponent implements OnInit {
  options = {
    id: 'register',
    label: 'Registrarse'
  }
  constructor() { }

  ngOnInit(): void {
  }

}

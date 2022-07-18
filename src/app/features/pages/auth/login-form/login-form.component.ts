import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  template: `
  <div class="formLogin">
    <app-auth-form [options]='options'></app-auth-form>
  </div>
  `,
  styles: ['']
})
export class LoginFormComponent implements OnInit {
  options = {
    id: 'login',
    label: 'Iniciar sesión'
  }
  constructor() { }

  ngOnInit(): void {
  }
}

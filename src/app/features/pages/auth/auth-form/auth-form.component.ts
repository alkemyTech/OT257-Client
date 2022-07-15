import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styles: ['']
})
export class AuthFormComponent implements OnInit {
  authForm!: FormGroup;
  signIn = 'login';
  signUp = 'register';
  @Input() options!: {
    id: string,
    label: string
  };

  constructor(private readonly fb: FormBuilder, private authSvc: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    if(this.authForm.valid && this.options.id === this.signIn) {
    this.authSvc.login(this.authForm.value).subscribe()
    console.log('Form ->', this.authForm.value);
    this.initForm();
    }else{
      console.log('Form is invalid');
    }

    if(this.authForm.valid && this.options.id === this.signUp) {
      this.authSvc.register(this.authForm.value).subscribe()
      console.log('Form ->', this.authForm.value);
      this.initForm();
    }else{
      console.log('Form is invalid');
    }
  }

  private initForm(): void {
    if (this.signIn === this.options.id) {
      this.authForm = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required]
      })
    } else {
      this.authForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', 
          [Validators.required,
          // 2. check whether the entered password has a number
          Validators.pattern(/[0-9]/),
          // 4. check whether the entered password has a letter
          Validators.pattern(/[a-zA-Z]/),
          // 5. check whether the entered password has a special character
          Validators.pattern(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/),
          // 6. Has a minimum length of 6 characters
          Validators.minLength(6)]],
        password_again: ['', Validators.required]
    })
  }
}

}

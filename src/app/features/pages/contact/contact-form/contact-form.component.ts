import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.minLength(8)]],
      message: ['',[Validators.required]]
    })
   }

   get Name(){
    return this.form.get('name');
   }
   get Email(){
    return this.form.get('email');
   }
   get Phone(){
    return this.form.get('phone');
   }
   get Message(){
    return this.form.get('message');
   }

  ngOnInit(): void {
  }

}

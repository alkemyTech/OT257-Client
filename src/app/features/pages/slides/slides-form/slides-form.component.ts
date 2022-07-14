import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {
  // variable to contain property from ckeditor
  public Editor = ClassicEditor;
  // variable containing the form properties
  form: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      description:['',[Validators.required]],
      order:['',[Validators.required]],
      image:['',[Validators.required]],
      userId:['',[]],
      create_at:['',[]],
      update_at:['',[]],
      delete_at:['',[]]
    })
   }

   get Name(){
    return this.form.get('name');
   }

   get Description(){
    return this.form.get('description');
   }

   get Order(){
    return this.form.get('order');
   }

   get Image(){
    return this.form.get('image');
   }

  ngOnInit(): void {
  }

}

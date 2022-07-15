import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HelpersService } from 'src/app/core/services/helpers.service';

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

  constructor(private formBuilder:FormBuilder,private helpers:HelpersService) {
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

  fileChange(e:Event){
    e.preventDefault();
    console.log("valor del evento cuando se selecciona un archivo");
    console.log(e);
    if(!this.helpers.fileExtensionCheck(e)){
      this.form.controls['image'].setErrors({'incorrect':true});
      console.log("valor del input image");
      console.log(this.form.get('image'));
    }else{
      
    }
  }

  sendForm(){
    console.log("Valor del form cuando se presiona guardar");
    console.log(this.form.value);
    if(this.form.valid){

    }else{
      this.form.markAllAsTouched();
    }

  }

}

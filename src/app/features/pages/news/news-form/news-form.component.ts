import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { NewModel } from 'src/app/models/new.model';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})

export class NewsFormComponent implements OnInit {
  public Editor = ClassicEditor;
  form: FormGroup;
  categories:any;
  img;

  

  constructor( 
               private categoriesService:CategoriesService,
               private newsService:NewsService,
               private fb: FormBuilder
               ) { 
                this.crearFormulario();

               }

  ngOnInit(): void {

      this.categoriesService.getCategories()
          .subscribe((resp:any)=>{
            console.log('Respu',resp);
            this.categories = resp.data;
          })

  }

  crearFormulario() {
    this. form = this.fb.group({
      name : ['', [ Validators.required, Validators.minLength(5) ]  ],
      image: null,
      category_id: ['', [Validators.required  ]],
      content: ['']
      
    });

    
    //console.log("Forma",this. form);

     this.form.get('image').valueChanges.subscribe((value) => {
       if (value !== null && value !== '') {
         this.imgToBase64((document.querySelector('input[type="file"]') as HTMLInputElement).files[0]);
       }
     });

  }


    private imgToBase64(file: any) {
      if (file) {
        const reader = new FileReader();
        reader.onload = this.toBase64.bind(this);
        reader.readAsBinaryString(file);
      }
    }
    
    
    toBase64(e) {
      this.img='data:image/png;base64,' + btoa(e.target.result)
      //console.log('data:image/png;base64,' + btoa(e.target.result));
    }


  createNew(){
     
     console.log("Forma2",this. form.value);
     console.log(this.form.invalid)

     if(this.form.invalid){
      return
     }

    if(this.form.value.image!=''){
     this.form.value.image=this.img;
    }else{

      delete this.form.value.image;
    }
     this.newsService.createNew(this.form.value)
         .subscribe(resp=>{
          console.log(resp);
         })

         

  }
  

}

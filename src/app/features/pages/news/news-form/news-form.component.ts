import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Router} from '@angular/router';
import { NewModel } from 'src/app/models/new.model';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})

export class NewsFormComponent implements OnInit {
  public Editor = ClassicEditor;
  form!: FormGroup;
  categories:any;
  img: string='';
  file!:any;
  

  
 
  constructor( 
               private categoriesService:CategoriesService,
               private newsService:NewsService,
               private fb: FormBuilder,
               private router:Router,
               
               ) { 
                this.crearFormulario();

               }

  ngOnInit(): void {

    

      this.categoriesService.getCategories()
          .subscribe((resp:any)=>{
            this.categories = resp.data;
          })

  }

      get nombreNoValido() {
        return this.form.get('name')?.invalid && this.form.get('name')?.touched
      }

      get categoriaNoValido() {
        return this.form.get('category_id')?.invalid && this.form.get('category_id')?.touched
      }


      get contentNoValido() {
        return this.form.get('content')?.invalid && this.form.get('content')?.touched
      }

      get imageNoValido() {
        return this.form.get('image')?.invalid && this.form.get('image')?.touched
      }



  crearFormulario() {
    this. form = this.fb.group({
      name : ['', [ Validators.required, Validators.minLength(4) ]  ],
      image: null,
      category_id: ['', [Validators.required, ]],
      content: ['', [Validators.required, ]]
      
    });

  


  }


    private imgToBase64(file: any) {
      if (file) {
        const reader = new FileReader();
        reader.onload = this.toBase64.bind(this);
        reader.readAsBinaryString(file);
      }
    }
    
    
    toBase64(e:any) {
      this.img='data:image/png;base64,' + btoa(e.target.result);
    }


    onFileSelected(event:any){
      this.file=event.target.files[0];
      this.imgToBase64(this.file); 

    }




  createNew(){
    
     if(this.form.invalid){
      return Object.values( this.form.controls ).forEach( control => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
        
        
      });
     }

    if(this.form.value.image!=''){
     this.form.value.image=this.img;
    }else{

      delete this.form.value.image;
    }
     this.newsService.createNew(this.form.value)
         .subscribe((resp:any)=>{
         this.router.navigate([`/new/${resp.data.id}`]);

         })
  }
  

}

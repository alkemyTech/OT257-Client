import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { NewsService } from 'src/app/services/news.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {

  public Editor = ClassicEditor;
  idNew:string;
  categories:any;
  form: FormGroup;
  img;
  new:any;


  constructor(private route: ActivatedRoute, 
              private newsService: NewsService,
              private categoriesService:CategoriesService,
              private fb: FormBuilder,
              ) { 

    this.route.paramMap.subscribe(params => {
      this.idNew = params.get('id');
      console.log(this.idNew);
      
    });
    this.crearFormulario();
    

  }

  ngOnInit(): void {

    this.categoriesService.getCategories()
          .subscribe((resp:any)=>{
            console.log('Respu',resp);
            this.categories = resp.data;
          })
    
    this.newsService.getNew(this.idNew)
        .subscribe((result:any) => {
          this.new=result.data;
          this.cargarDataForm(this.new);
          console.log("Dato New",this.new);
        })
    

  }

  
  crearFormulario() {
    this. form = this.fb.group({
      name : ['', [ Validators.required, Validators.minLength(5) ]  ],
      image: [null, [Validators.required, ]],
      category_id: ['', [Validators.required, ]],
      content: ['', [Validators.required, ]]
      
    });

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
            this.img='data:image/png;base64,' + btoa(e.target.result);
        
            //console.log('data:image/png;base64,' + btoa(e.target.result));
          }


  cargarDataForm(dato){

      this.img=dato.image;
      this.form.setValue({
        name: dato.name,
        image: null,
        category_id: dato.category_id,
        content: dato.content
      });

      
    
      console.log(this.form.value)
  }

  updateNew(){

    console.log(this.form.value)

    if(this.form.invalid){
      return
     }
     if(this.form.value.image){
      this.form.value.image=this.img;
     }else{
       console.log("borrar")
       delete this.form.value.image;
     }
    this.newsService.updateNew(this.idNew,this.form.value)
        .subscribe(resp => {
          console.log("UpdateNew",resp)
        })

  }

}

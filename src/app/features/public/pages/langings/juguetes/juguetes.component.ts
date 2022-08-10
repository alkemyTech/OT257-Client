import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juguetes',
  templateUrl: './juguetes.component.html',
  styleUrls: ['./juguetes.component.scss']
})
export class JuguetesComponent implements OnInit {

  fecha_fin= new Date('2022-12-1').getTime();
  fecha_actual:any;
  textoTiempo!:string;


  constructor() { }

  ngOnInit(): void {

    console.log('Oninit');

  this.fecha_actual=Date.now();
  console.log(this.fecha_actual)
  let diff=this.fecha_fin - this.fecha_actual;
  let tiempo= new Date(diff);
  this.textoTiempo=`${tiempo.getDay()} dias ${tiempo.getHours()} Horas y ${tiempo.getMinutes()} Minutos`
  console.log(this.textoTiempo);

  }

  
  

}

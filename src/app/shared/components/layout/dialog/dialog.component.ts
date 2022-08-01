import { Component, Input, OnInit } from '@angular/core';
import Swal from "sweetalert2";



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() showDialog!: boolean;

  constructor() { }

  ngOnInit(): void {

    if(this.showDialog){ Swal.fire("Error", ` Error de conexion ${this.showDialog}`, "error")}
  }

}

import { Component, OnInit } from "@angular/core";
import { MembersService } from "../../../../../core/services/members/members.service";
import Swal from "sweetalert2";
import { alertConfirm } from "src/app/shared/components/layouts/alerts/alerts";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
})
export class MembersComponent implements OnInit {
  members!: any;
  spinner!:boolean;

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.spinner=true;
    this.memberService.getMembers().subscribe((resp: any) => {
      this.members = resp.data;
      setInterval(()=>this.spinner=false , 1000);
    });
  }

  deleteMember(id: string) {
    alertConfirm
      .fire({
        title: "Esta seguro de borrar?",
        text: "Esta accion no tiene revercion!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrarlo!",
      })
    .then((result) => {
      if (result.isConfirmed) {
        this.memberService.deleteMember(id).subscribe((resp) => {
          alertConfirm.fire({
            title: "Borrado!",
            text: `Registro ${id} ha sido borrado`,
            icon: "success",
            showCancelButton: false,
          });
          this.ngOnInit();
        });
      }
    });
  }
}

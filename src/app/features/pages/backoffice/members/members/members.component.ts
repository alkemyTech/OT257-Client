import { Component, OnInit } from "@angular/core";
import { MembersService } from "../../../../../core/services/members/members.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
})
export class MembersComponent implements OnInit {
  members!: any;

  constructor(private memberService: MembersService) {}

  ngOnInit(): void {
    this.memberService.getMembers().then((resp: any) => {
      this.members = resp.data;
    });
  }

  deleteMember(id: string) {
    Swal.fire({
      title: "Esta seguro de borrar?",
      text: "Esta accion no tiene revercion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.memberService.deleteMember(id).then((resp) => {
          Swal.fire("Borrado!", `Registro ${id} ha sido borrado`, "success");
          this.ngOnInit();
        });
      }
    });
  }
}

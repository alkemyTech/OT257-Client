import { Component, OnInit } from "@angular/core";
import { SlideFormService } from "src/app/core/services/slide-form.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-list-slides",
  templateUrl: "./list-slides.component.html",
  styleUrls: ["./list-slides.component.scss"],
})
export class ListSlidesComponent implements OnInit {
  listSlides: any;
  noData: boolean = false;
  loading: boolean = true;

  constructor(private slideService: SlideFormService) {}

  ngOnInit(): void {
    this.slideService.getSlide().subscribe((resp) => {
      this.listSlides = resp.data;
      this.loading = false;
      if (this.listSlides.length === 0) {
        this.noData = true;
      }
    });
  }

  deleteSlide(id: string) {
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
        this.slideService.deleteSlide(id).subscribe((resp) => {
          Swal.fire("Borrado!", `Registro ${id} ha sido borrado`, "success");
          this.ngOnInit();
        });
      }
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { Slides } from "src/app/core/models/slides.model";

@Component({
  selector: "app-toys",
  templateUrl: "./toys.component.html",
  styleUrls: ["./toys.component.scss"],
})
export class ToysComponent implements OnInit {
  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year: number = 2023;
  month: number = 6;
  months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  day: number = 31;
  tiempoFaltante!: string;
  slides: Slides[] = []
  toys: any = [
    {
      id: null,
      name: "Colecta de juguetes para el día del niño",
      description: "Festejemos juntos este día especial para los niños",
      image: 'assets/images/colecta-juguetes.jpg',
      order: null,
      user_id: null,
      created_at: null,
      updated_at: null,
      deleted_at: null
    },
    {
      id: null,
      name: "Donación de juguetes",
      description: "Acercate a nuestra sede para donar juguetes",
      image: 'assets/images/juguetes3.png',
      order: null,
      user_id: null,
      created_at: null,
      updated_at: null,
      deleted_at: null
    },
    {
      id: null,
      name: "Juguetes para más sonrisas",
      description: "Hagamos que nuestros niños se sientan más felices",
      image: 'assets/images/colecta-juguetes3.jpg',
      order: null,
      user_id: null,
      created_at: null,
      updated_at: null,
      deleted_at: null
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.myTimer();
  }

  myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2022, 12, 31);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    this.tiempoFaltante = `${this.days} días ${this.hours} Horas ${this.minutes} Minutos ${this.seconds} Segundos   `;
    setInterval(this.myTimer, 1000);
  }

  //SliderToys
  public getToySlider() {
    this.slides = this.toys
  }
}

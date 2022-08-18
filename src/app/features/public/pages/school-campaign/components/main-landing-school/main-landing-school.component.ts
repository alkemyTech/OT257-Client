import { Component, OnInit } from "@angular/core";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-main",
  templateUrl: "./main-landing-school.component.html",
  styleUrls: ["./main-landing-school.component.scss"],
})
export class MainLandingSchoolComponent implements OnInit {
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

  constructor() {}

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

    this.tiempoFaltante = `${this.days} dias ${this.hours} Horas ${this.minutes} Minutos ${this.seconds} Segundos   `;

    setInterval(this.myTimer, 1000);
  }
}

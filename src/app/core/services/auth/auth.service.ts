import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { UserRegister, UserLogin } from "../../models/auth.model";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit {
  private auth = "https://ongapi.alkemy.org/api/";
  private loggedIn = new BehaviorSubject<boolean>(false);
  toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    position: 'bottom-end',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }
  ngOnInit(): void {}

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(user: UserLogin): Observable<any> {
    return this.http
      .post<UserLogin>(this.auth + "login", {
        email: user.email,
        password: user.password,
      })
      .pipe(
        map((res: any) => {
          this.toast.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
          });
          return res;
        }),
        catchError(() => {
          return this.toast.fire({
            icon: 'error',
            title: 'Inicio de sesión incorrecto',
          })
        })
      );
  }

  saveToken(token: string): void {
    localStorage.setItem("token", token);
  }
  
  logout(): void {
    localStorage.removeItem("token");
    this.loggedIn.next(false);
    this.router.navigate(["/iniciar-sesion"]);
  }
  
  checkToken() {
    const userToken = localStorage.getItem("token");
    userToken ? this.loggedIn.next(true) : this.logout();
    return this.loggedIn;
  }

  //register
  register(user: UserRegister): Observable<any> {
    return this.http
      .post<UserRegister>(this.auth + "register", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .pipe(
        map((res: UserRegister) => {
          this.toast.fire({
            icon: 'success',
            title: 'Registro exitoso',
          });
          return res;
        }),
        catchError(() => {
          return this.toast.fire({
            icon: 'error',
            title: 'Registro fallido',
          })
        })
      );
  }
}

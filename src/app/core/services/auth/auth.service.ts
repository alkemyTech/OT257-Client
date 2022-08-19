import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { UserRegister, UserLogin } from "../../models/auth.model";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import { toastError, toastSuccess } from "src/app/shared/components/layouts/alerts/alerts";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit {
  private auth = "https://ongapi.alkemy.org/api/";
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private afAuth: AngularFireAuth) {
    this.checkToken();
  }
  ngOnInit(): void {}

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  async loginGoogle(){
    try{
      const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      return res;
    }catch(err){
      return toastError.fire({
        title: "Error al iniciar sesión con Google",
      });
    }
  }
 
  login(user: UserLogin): Observable<any> {
    return this.http
      .post<UserLogin>(this.auth + "login", {
        email: user.email,
        password: user.password,
      })
      .pipe(
        map((res: any) => {
          if (res.data.token) {
            toastSuccess.fire({
              title: "Inicio de sesión exitoso",
            });
            return res;
          }
        }),
        catchError(() => {
          return toastError.fire({
            title: "Inicio de sesión incorrecto",
          });
        })
      );
  }

  saveToken(token: string): void {
    localStorage.setItem("token", token);
  }

  logout(): void {
    localStorage.removeItem("token");
    this.afAuth.signOut();
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
          toastSuccess.fire({
            title: "Registro exitoso",
          });
          return res;
        }),
        catchError(() => {
          return toastError.fire({
            title: "Registro fallido",
          });
        })
      );
  }
}

import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { UserAuth } from "../../models/auth.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit {
  private auth = "https://ongapi.alkemy.org/api/";
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }
  ngOnInit(): void {}

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(user: UserAuth): Observable<any> {
    return this.http
      .post<UserAuth>(this.auth + "login", {
        email: user.email,
        password: user.password,
      })
      .pipe(
        map((res: any) => {
          this.saveToken(res.data.token);
          this.loggedIn.next(true);
          this.router.navigate(["/"]);
          return res;
        }),
        catchError(() => {
          this.loggedIn.next(false);
          console.log("error");
          return "error";
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
  register(user: UserAuth): Observable<any> {
    return this.http
      .post<UserAuth>(this.auth + "register", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .pipe(
        map((res: UserAuth) => {
          console.log(res);
          return res;
        }),
        catchError(() => {
          return "error";
        })
      );
  }
}

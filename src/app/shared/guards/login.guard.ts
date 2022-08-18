// import { Injectable } from "@angular/core";
// import { CanActivate, Router } from "@angular/router";
// import { map } from "rxjs/operators";
// import { AuthService } from "../../core/services/auth/auth.service";

// @Injectable({
//   providedIn: "root",
// })
// export class LoginGuard implements CanActivate {
//   constructor(private router: Router, private auth: AuthService) { }
//   canActivate() {
//     return this.auth.isLogged.pipe(
//       map((logged) => {
//         if (logged) {
//           this.router.navigate(["/backoffice"]);
//           return false;
//         }
//         this.router.navigate(["/iniciar-sesion"]);
//         return true;
//       })
//     );
//   }
// }

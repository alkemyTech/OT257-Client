import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../core/services/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  isLogged!: boolean;
  constructor(private auth: AuthService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.auth.isLogged.subscribe((res) => (this.isLogged = res));
    if (this.isLogged) {
      return true;
    }
    return false;
  }
}

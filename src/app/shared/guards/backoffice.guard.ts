import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from "src/app/state/app.state";
import { Store } from "@ngrx/store";
import { selectIsAuthenticated } from "src/app/state/selectors/auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class BackofficeGuard implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) {}
  valor = localStorage.getItem('token')
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.valor){
          return true;
        }else{
          this.router.navigate(['/iniciar-sesion']);
          return false
        }
      }
  
}

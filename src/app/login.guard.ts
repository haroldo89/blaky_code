import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';
import { TokenService } from './services/token.service';
import { LogService } from './services/log.service';
import { UserLogged } from './model/UserLogged';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(public authService: LoginService, protected tok: TokenService, private router: Router,
              private logService: LogService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.validateExpTok()) {
        this.router.navigate(['/']);
        // localStorage.clear();
        return false;
      }
      return true;
  }

  validateExpTok() {

    if (this.tok.recoverSession() && this.authService.recoverSession()) {
      console.log('se recupera session');
    }

    const invalid: boolean = new Date(Date.now()) >= this.tok.getExpJwt();
    if (invalid) {
      if (this.authService.userValue != null) {
      if (this.authService.userValue.securityLevel !== 0) {
        console.log('Se hace cierre de session.');
        // this.logService.logout().subscribe(); // se genera el log de cerrar sesion
        }
      }

      this.authService.set_User(new UserLogged()); // se reinicia el usuario logueado
      this.authService.userValue.securityLevel = 0; // se da nivel de seguridad 0
    }
    localStorage.clear();
    return invalid || this.authService.userValue.securityLevel === 0; // se retorna validadcion de nivel de usuario
  }

}

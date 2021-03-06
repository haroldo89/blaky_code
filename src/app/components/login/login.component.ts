import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UserLogged } from 'src/app/model/UserLogged';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  userName: string;
  password: string;
  showDialog = false;

  constructor(private authService: LoginService, private snackBar: MatSnackBar, private router: Router, private tok: TokenService,
    private dialog: MatDialog) { }

  ngOnInit() {
    // navega a la ventana main a penas sea llamado
    localStorage.clear();
    this.tok.setTokJwt('');
    this.tok.setUser('');
    this.authService.set_User({
      id: 0,
      name: '',
      username: '',
      password: '',
      securityLevel: 0
    });
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  login(): void {
    if (this.loginForm.controls.username.valid && this.loginForm.controls.password.valid) {
      this.openDialog();
      this.showDialog = true;

      if (this.loginForm.controls.username.value === 'hacaicedoto' && this.loginForm.controls.password.value === '12345') {
        const userLogged = new UserLogged();
        userLogged.name = this.loginForm.controls.username.value;
        userLogged.password = this.loginForm.controls.password.value;
        this.tok.setTokJwt('item'); // guarda el token en memoria
        this.tok.setUser(userLogged.name);
        // this.tok.setExpJwt(new Date(1000)); // almacenar fecha de expiracion
        this.authService.set_User(userLogged);
        this.closeDialog();
        this.router.navigate(['/home']);
      }

      // this.authService
      //   .confirmCredentials(this.loginForm.value as UserLogged)
      //   .subscribe(item => {
      //     this.showDialog = false;
      //     if (item === '0') {
      //       this.closeDialog();
      //       this.userNotValid('Favor validar credenciales de acceso');
      //     } else {
      //       const formValue = this.loginForm.value as UserLogged;
      //       this.tok.setUsername(formValue.username);
      //       this.userValid(item);
      //     }
      //   });
    } else {
      this.openSnackBar('formulario invalido, favor validar', 'reintentar');
    }
  }

  userValid(item: any) {
    const userLogged = new UserLogged();
    const x = item.split('.', 3);
    const data = JSON.parse(atob(x[1]));
    userLogged.securityLevel = data.role;
    userLogged.username = data.unique_name;
    // console.log(data);
    this.tok.setTokJwt(item); // guarda el token en memoria
    this.tok.setUser(data.primarysid);
    this.tok.setExpJwt(new Date(data.exp * 1000)); // almacenar fecha de expiracion
    this.authService.set_User(userLogged);
    this.closeDialog();
    this.router.navigate(['/home']);
  }

  userNotValid(mensaje: string) {
    this.openSnackBar(mensaje, 'reintentar');
    this.loginForm.reset();
  }

  openDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    this.dialog.open(DialogContentLoaderDialog, { disableClose: true });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  getErrorMessage(control: string) {
    if (control === 'username') {
      return this.loginForm.get(control).hasError('required')
        ? 'Debe Ingresar el Nombre de Usuario'
        : '';
    }
    if (control === 'password') {
      return this.loginForm.get(control).hasError('required')
        ? 'Debe Ingresar la Contraseña'
        : '';
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'top',
      panelClass: ['custom-snack']
    });
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-content-loader-dialog',
  templateUrl: './dialog-content-loader-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class DialogContentLoaderDialog { }

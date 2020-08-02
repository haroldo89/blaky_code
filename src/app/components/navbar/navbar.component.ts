import { LoginService } from './../../services/login.service';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: LoginService,
              private routerp: Router,
              protected tok: TokenService) { }

  ngOnInit() {
  }

  signout() {
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
    this.routerp.navigate(['/']);
  }

}

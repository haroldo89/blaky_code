import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-intellisense',
  templateUrl: './intellisense.component.html',
  styleUrls: ['./intellisense.component.css']
})
export class IntellisenseComponent implements OnInit {

  constructor(public authService: LoginService,
              public tokenService: TokenService) { }

  ngOnInit() {
  }

  @HostListener('window:beforeunload', ['$event'])
  public doSomething() {
    console.log('recarga de pagina'); // <---- this logs to the console.
    this.authService.keepSession(this.authService);
    this.tokenService.keepSession(this.tokenService);
    return false;
  }

}

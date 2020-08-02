import { SqlEncriptComponent } from './components/sql-encript/sql-encript.component';
import { DevsecopsComponent } from './components/devsecops/devsecops.component';
import { PostRequestComponent } from './components/post-request/post-request.component';
import { Aes256Component } from './components/aes256/aes256.component';
import { JwtComponent } from './components/jwt/jwt.component';
import { IntellisenseComponent } from './components/intellisense/intellisense.component';
import { LoginGuard } from './login.guard';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AngularComponent } from './components/angular/angular.component';
import { SqlComponent } from './components/sql/sql.component';
import { CsharpComponent } from './components/csharp/csharp.component';

const routes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'Tecnificacion' } },
  {
    path: 'home',
    component: HomeComponent
    //canActivate: [LoginGuard]
  },
  {
    path: 'angular',
    component: AngularComponent
    //canActivate: [LoginGuard]
  },
  {
    path: 'sql',
    component: SqlComponent
    //canActivate: [LoginGuard]
  },
  {
    path: 'csharp',
    component: CsharpComponent
    //canActivate: [LoginGuard]
  },
  {
    path: 'intellisense',
    component: IntellisenseComponent
    //canActivate: [LoginGuard]
  },
  {
    path: 'jwt',
    component: JwtComponent
    //canActivate: [LoginGuard]
  }
  ,
  {
    path: 'aes256',

    component: Aes256Component
    //canActivate: [LoginGuard]
  }
  ,
  {
    path: 'postrequest',
    component: PostRequestComponent
    //canActivate: [LoginGuard]
  }
  ,
  {
    path: 'devsecops',
    component: DevsecopsComponent
    //canActivate: [LoginGuard]
  },
  {
    path: 'sqlEncript',
    component: SqlEncriptComponent
    //canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Angular material
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogContentLoaderDialog } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AngularComponent } from './components/angular/angular.component';
import { SqlComponent } from './components/sql/sql.component';
import { CsharpComponent } from './components/csharp/csharp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './services/login.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntellisenseComponent } from './components/intellisense/intellisense.component';
import { Aes256Component } from './components/aes256/aes256.component';
import { JwtComponent } from './components/jwt/jwt.component';
import { PostRequestComponent } from './components/post-request/post-request.component';
import { DevsecopsComponent } from './components/devsecops/devsecops.component';
import { SqlEncriptComponent } from './components/sql-encript/sql-encript.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DockerComponent } from './components/docker/docker.component';
import { LinuxComponent } from './components/linux/linux.component';
import { ProxyComponent } from './components/proxy/proxy.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogContentLoaderDialog,
    LoginComponent,
    HomeComponent,
    AngularComponent,
    SqlComponent,
    CsharpComponent,
    NavbarComponent,
    IntellisenseComponent,
    Aes256Component,
    JwtComponent,
    PostRequestComponent,
    DevsecopsComponent,
    SqlEncriptComponent,
    SidebarComponent,
    DockerComponent,
    LinuxComponent,
    ProxyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  entryComponents: [
    DialogContentLoaderDialog
  ],
  providers: [
    LoginService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

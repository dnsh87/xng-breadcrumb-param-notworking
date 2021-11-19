import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { MainComponent } from './main.component';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child.component';
import { SubChildComponent } from './subchild.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BreadcrumbModule, AppRoutingModule],
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    ChildComponent,
    SubChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

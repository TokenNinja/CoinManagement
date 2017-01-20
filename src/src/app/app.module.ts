import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router'

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
// import { ResumeComponent } from './resume/resume.component';
import { BillboardComponent } from './billboard/billboard.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FormComponent,
    AboutComponent,
    // ResumeComponent,
    BillboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

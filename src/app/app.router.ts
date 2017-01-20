import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';
// import { ResumeComponent } from './resume/resume.component'


export const router:Routes =[
  {path:'',redirectTo:'page',pathMatch:'full'},
  {path:'page',component:PageComponent},
  {path:'about',component:AboutComponent},
  // {path:'resume20170118',component:ResumeComponent}
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);

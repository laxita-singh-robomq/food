import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {path:'home',component:HeaderComponent},
  {path:'**',component:IntroductionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

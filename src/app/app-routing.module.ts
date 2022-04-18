import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'gitsearch', component: AppComponent},
  
  { path: '', redirectTo:"/gitsearch", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

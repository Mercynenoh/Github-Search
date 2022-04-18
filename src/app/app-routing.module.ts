import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  { path: 'gitsearch', component: GithubComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

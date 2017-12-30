import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowSearchComponent} from './show-search/show-search.component';

const routes: Routes = [
  {path: 'showSearch', component: ShowSearchComponent},
  {path: '', redirectTo: '/showSearch', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

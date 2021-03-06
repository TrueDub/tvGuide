import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowSearchComponent} from './show-search/show-search.component';
import {ShowDetailComponent} from './show-detail/show-detail.component';
import {ShowResolver} from './services/show-resolver.service';
import {ShowSearchResultsComponent} from './show-search-results/show-search-results.component';

const routes: Routes = [
  {path: 'showSearch', component: ShowSearchComponent},
  {path: 'showSearchResults', component: ShowSearchResultsComponent},
  {path: 'showDetail/:id', component: ShowDetailComponent, resolve: {showDetail: ShowResolver}},
  {path: '', redirectTo: '/showSearch', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ShowResolver]
})
export class AppRoutingModule {
}

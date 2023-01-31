import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SHOW_PATH_PARAM_NAME } from './helpers/route.config';
import { HomePageComponent } from './pages/home/home-page.component';
import { ShowPageComponent } from './pages/show/show-page.component';
import { SearchPageComponent } from './pages/search/search-page.component';

const routes: Routes = [
  { path: `shows/:${SHOW_PATH_PARAM_NAME}`, component: ShowPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: '', component: HomePageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { ShowPageComponent } from './pages/show/show-page.component';
import { SHOW_PATH_PARAM_NAME } from './helpers/route.config';

const routes: Routes = [
  { path: `shows/:${SHOW_PATH_PARAM_NAME}`, component: ShowPageComponent },
  { path: '', component: HomePageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

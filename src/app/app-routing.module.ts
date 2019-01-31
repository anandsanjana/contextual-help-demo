import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrekListComponent } from './components/trek-list/trek-list.component';
import { TrekDetailComponent } from './components/trek-detail/trek-detail.component';

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "treks/:id", component: TrekDetailComponent },
	{ path: "treks", component: TrekListComponent },
	{ path: "**", component: HomeComponent }
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

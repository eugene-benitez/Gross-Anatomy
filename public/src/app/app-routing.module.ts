import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMuscleComponent } from './common/components/view-muscle/view-muscle.component';
import { HomeComponent } from './common/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'muscle/:id', component: ViewMuscleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

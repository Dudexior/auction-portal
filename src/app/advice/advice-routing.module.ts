import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvicesPageComponent } from './advices-page/advices-page.component';

const routes: Routes = [
  // replaced by lazy loading
  // { path: 'advices', component: AdvicesPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }

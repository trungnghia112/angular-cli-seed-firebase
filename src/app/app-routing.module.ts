import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'about', component: AboutPageComponent },
  // { path: 'right', component: RightPageComponent, data: { animation: 'isRight' } },
  // { path: 'left', component: LeftPageComponent, data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

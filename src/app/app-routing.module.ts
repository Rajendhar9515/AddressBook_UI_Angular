import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { FormComponent } from './component/form/form.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashBoard', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'dashBoard', component: DashBoardComponent },
  { path: 'form', component: FormComponent },
  { path: 'edit/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

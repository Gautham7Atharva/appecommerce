import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';

const routes: Routes = [
  {
    path: 'productdetail', redirectTo: 'productdetail'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

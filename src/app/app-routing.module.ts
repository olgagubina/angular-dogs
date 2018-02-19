import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { AboutComponent } from './about/about.component';
import { AddEditComponent} from './add-edit/add-edit.component';

const routes: Routes = [
  { path: '', component: DogsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'add-dog', component: AddEditComponent },
  { path: 'edit-dog/:id', component: AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // imports: [
  //   CommonModule
  // ],
  // declarations: []
})
export class AppRoutingModule { }

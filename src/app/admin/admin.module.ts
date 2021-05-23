import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { EditformComponent } from '../editform/editform.component';
import { AddcakeComponent } from '../addcake/addcake.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'editform/:id', component: EditformComponent},
  { path: 'addcake', component: AddcakeComponent }

  ]

  @NgModule({
    imports: [RouterModule.forChild(routes), FormsModule ],
    exports: [RouterModule]
  })

export class AdminModule { }

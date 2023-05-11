import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVideoComponent } from './list-video/list-video.component';
import { ModifierVideoComponent } from './modifier-video/modifier-video.component';
import { AddVideoComponent } from './add-video/add-video.component';

const routes: Routes = [
  {path:'',redirectTo:'videos',pathMatch:'full'},
  {path:'videos',component:ListVideoComponent},
  {path:'updateVideo',component:ModifierVideoComponent},
  {path:'addVideo',component:AddVideoComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

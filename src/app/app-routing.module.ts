import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { ChercherVideosComponentComponent } from './chercher-videos-component/chercher-videos-component.component';

const routes: Routes = [
  {path:'/ajouter-video',component:AddvideoComponent}
,  { path: '/chercher-videos', component: ChercherVideosComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


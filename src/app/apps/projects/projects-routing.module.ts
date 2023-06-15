import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'docker', loadChildren: () => import('./docker/docker.module').then(m => m.DockerModule) },
  { path: 'disk', loadChildren: () => import('./disk/disk.module').then(m => m.DiskModule) },
  { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

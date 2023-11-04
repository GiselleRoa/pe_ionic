import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangasPage } from './mangas.page';

const routes: Routes = [
  {
    path: '',
    component: MangasPage
  },
  {
    path: 'detalle-manga',
    loadChildren: () => import('./detalle-manga/detalle-manga.module').then( m => m.DetalleMangaPageModule)
  },
  {
    path: 'add-manga',
    loadChildren: () => import('./add-manga/add-manga.module').then( m => m.AddMangaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangasPageRoutingModule {}

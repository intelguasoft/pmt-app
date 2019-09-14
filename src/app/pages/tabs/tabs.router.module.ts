import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'peaje',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../peaje/peaje.module').then(m => m.PeajePageModule)
          }
        ]
      },
      {
        path: 'remisiones',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../remisiones/remisiones.module').then(m => m.RemisionesPageModule)
          }
        ]
      },
      {
        path: 'documentacion',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../documentacion/documentacion.module').then(m => m.DocumentacionPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'admin/peaje',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admin/peaje',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

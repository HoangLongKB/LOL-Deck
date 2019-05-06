import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChampionDetailComponent } from './champions/champion-detail/champion-detail.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'champion-detail/:id',
        component: ChampionDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

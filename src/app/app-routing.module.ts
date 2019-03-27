import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthRoutes} from './modules/auth/auth.routing';
import {ErrorServerComponent} from './components/error-server';
import {Error404Component} from './components/error404';
import {MainRoutes} from './modules/main/main.routing';
import {AuthGuard} from './shared/guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  ...MainRoutes,
  ...AuthRoutes,
  {
    path: 'error-server',
    component: ErrorServerComponent
  },
  {
    path: '**',
    redirectTo: 'error404'
  },
  {
    path: 'error404',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

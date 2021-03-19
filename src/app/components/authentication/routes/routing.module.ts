import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent, LoginComponent } from '../components';
import { AuthenticationRootComponent } from '../components/root';
import { AuthenticationRootActivateGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationRootComponent,
    canActivate: [AuthenticationRootActivateGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}

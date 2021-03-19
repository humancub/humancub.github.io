import { NgModule } from '@angular/core';
import { AuthenticationComponentsModule } from './components';
import { AuthenticationEndpointsService, AuthenticationService } from './core';
import { AuthenticationRoutingModule } from './routes';
import { AuthenticationRootActivateGuard } from './routes/guards';

const PROVIDERS = [
  AuthenticationService,
  AuthenticationRootActivateGuard,
  AuthenticationEndpointsService,
];

@NgModule({
  imports: [AuthenticationRoutingModule, AuthenticationComponentsModule],
  providers: [...PROVIDERS],
})
export class AuthenticationModule {}

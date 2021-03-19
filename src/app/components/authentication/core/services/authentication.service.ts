import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials, Tokens } from '../models';
import { AuthenticationEndpointsService } from './endpoints.service';

@Injectable()
export class AuthenticationService {
  constructor(private endpointsService: AuthenticationEndpointsService) {}

  public login(loginCredentials: LoginCredentials): Observable<Tokens> {
    return this.endpointsService.login(loginCredentials);
  }

  public storeTokens(tokens: Tokens): void {
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
  }

  public isLoggedIn(): boolean {
    return !!(
      localStorage.getItem('accessToken') &&
      localStorage.getItem('refreshToken')
    );
  }

  public clearTokens(): void {
    localStorage.clear();
  }
}

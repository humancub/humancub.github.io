import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginCredentials, Tokens } from '../models';

@Injectable()
export class AuthenticationEndpointsService {
  constructor(private http: HttpClient) {}

  public login(loginCredentials: LoginCredentials): Observable<Tokens> {
    return this.http.post<Tokens>(
      `${environment.backendUrl}/users/login`,
      loginCredentials
    );
  }

  public register() {}
}

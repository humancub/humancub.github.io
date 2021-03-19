import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService, LoginCredentials, Tokens } from '../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  public controls = {
    email: this.loginForm.get('email'),
    password: this.loginForm.get('password'),
  };

  constructor(
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public login() {
    this.authenticationService
      .login(this.loginForm.value as LoginCredentials)
      .subscribe(
        (tokens: Tokens) => {
          this.authenticationService.storeTokens(tokens);
          this.snackBar.open('Login was successfull', 'Undo');
          this.router.navigate(['/main-page']);
          console.log('subsribe', tokens);
        },
        (error) => {
          this.snackBar.open(error.error.message, 'Undo');
          this.loginForm.reset();
          console.log('error', error);
        }
      );
  }
}

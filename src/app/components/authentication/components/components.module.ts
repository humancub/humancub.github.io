import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { LoginComponent } from './login';
import { RegistrationComponent } from './registration';
import { AuthenticationRootComponent } from './root';

const COMPONENTS = [
  LoginComponent,
  RegistrationComponent,
  AuthenticationRootComponent,
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule],
  declarations: [...COMPONENTS],
})
export class AuthenticationComponentsModule {}

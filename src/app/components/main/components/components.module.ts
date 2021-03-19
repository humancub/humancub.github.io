import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

import { AsideComponent } from './aside';
import { AudienceReachComponent } from './audience-reach';
import { DeviceReachComponent } from './device-reach';
import { GenderComponent } from './gender';
import { GeoComponent } from './geo';
import { HeaderComponent } from './header';
import { InfoContentComponent } from './info-content';
import { MainPageRootComponent } from './root';

const COMPONENTS = [
  AsideComponent,
  AudienceReachComponent,
  DeviceReachComponent,
  GenderComponent,
  GeoComponent,
  HeaderComponent,
  InfoContentComponent,
  MainPageRootComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  declarations: [...COMPONENTS],
})
export class MainPageComponentsModule {}

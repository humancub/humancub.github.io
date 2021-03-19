import { NgModule } from '@angular/core';
import { MainPageComponentsModule } from './components/components.module';
import { MainPageRoutingModule } from './routes';

@NgModule({
  imports: [MainPageComponentsModule, MainPageRoutingModule],
})
export class MainPageModule {}

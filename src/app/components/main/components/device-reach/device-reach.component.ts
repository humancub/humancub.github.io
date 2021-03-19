import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';
import { ThemeBasedComponent } from '../../core/classes';

@Component({
  selector: 'app-device-reach',
  templateUrl: './device-reach.component.html',
  styleUrls: ['./device-reach.component.scss'],
})
export class DeviceReachComponent
  extends ThemeBasedComponent
  implements OnInit {
  constructor(public themeService: ThemeService) {
    super(themeService);
  }
}

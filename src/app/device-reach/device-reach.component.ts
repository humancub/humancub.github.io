import { Component, OnInit } from '@angular/core';
import { Theme } from '../core/enums/theme.enum';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-device-reach',
  templateUrl: './device-reach.component.html',
  styleUrls: ['./device-reach.component.scss'],
})
export class DeviceReachComponent implements OnInit {
  public Theme = Theme;
  public theme: Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme.subscribe((theme: Theme) => (this.theme = theme));
  }
}

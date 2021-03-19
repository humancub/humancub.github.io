import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';
import { ThemeBasedComponent } from '../../core/classes';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss'],
})
export class GeoComponent extends ThemeBasedComponent implements OnInit {
  constructor(public themeService: ThemeService) {
    super(themeService);
  }
}

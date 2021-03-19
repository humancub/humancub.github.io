import { Component, Input, OnInit } from '@angular/core';
import { TopInfoStat } from '../../../../core/models/top-info-stats.interface';
import { ThemeService } from '../../../../core/services/theme.service';
import { ThemeBasedComponent } from '../../core/classes';

@Component({
  selector: 'app-info-content',
  templateUrl: './info-content.component.html',
  styleUrls: ['./info-content.component.scss'],
})
export class InfoContentComponent
  extends ThemeBasedComponent
  implements OnInit {
  @Input() topInfoStat: TopInfoStat;

  constructor(public themeService: ThemeService) {
    super(themeService);
  }
}

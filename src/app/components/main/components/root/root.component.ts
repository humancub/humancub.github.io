import { Component, OnInit } from '@angular/core';
import { TopInfoStat } from 'src/app/core/models/top-info-stats.interface';
import { ThemeService } from '../../../../core/services/theme.service';
import { ThemeBasedComponent } from '../../core/classes';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class MainPageRootComponent
  extends ThemeBasedComponent
  implements OnInit {
  public topInfoStats: TopInfoStat[] = [
    {
      title: 'Friends',
      people: 271,
      percents: '+ 86%',
    },
    {
      title: 'Unique visitors',
      people: 69,
      percents: '- 7,1%',
    },
    {
      title: 'Followes',
      people: 288,
      percents: '+ 1%',
    },
  ];

  constructor(public themeService: ThemeService) {
    super(themeService);
  }
}

import { Component, OnInit } from '@angular/core';
import { Theme } from './core/enums/theme.enum';
import { TopInfoStat } from './core/models/top-info-stats.interface';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public Theme = Theme;
  public title = 'vk-stats';
  public topInfoStats: TopInfoStat[] = [
    {
      title: 'Friends',
      people: 271,
      percents: '+0.7 %',
    },
    {
      title: 'Unique visitors',
      people: 69,
      percents: '-7.1 %',
    },
    {
      title: 'Followers',
      people: 288,
      percents: '+1.0 %',
    },
  ];
  public theme: Theme;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme.subscribe((theme: Theme) => {
      this.theme = theme;
    });
  }
}

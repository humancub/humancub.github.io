import { Component, Input, OnInit } from '@angular/core';
import { TopInfoStat } from '../core/models/top-info-stats.interface';
import { Theme } from '../core/enums/theme.enum';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-info-content',
  templateUrl: './info-content.component.html',
  styleUrls: ['./info-content.component.scss'],
})
export class InfoContentComponent implements OnInit {
  @Input() topInfoStat: TopInfoStat;

  public Theme = Theme;
  public theme: Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme.subscribe((theme: Theme) => (this.theme = theme));
  }
}

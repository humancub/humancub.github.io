import { Component, OnInit } from '@angular/core';
import { Theme } from '../core/enums/theme.enum';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-audience-reach',
  templateUrl: './audience-reach.component.html',
  styleUrls: ['./audience-reach.component.scss'],
})
export class AudienceReachComponent implements OnInit {
  public Theme = Theme;
  public theme: Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme.subscribe((theme: Theme) => (this.theme = theme));
  }
}

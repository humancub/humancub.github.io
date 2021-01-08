import { Component, OnInit } from '@angular/core';
import { Theme } from '../core/enums/theme.enum';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  public Theme = Theme;
  public theme: Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme.subscribe((theme: Theme) => (this.theme = theme));
  }

  public themeToggled(toggled: boolean): void {
    const theme = toggled ? Theme.Dark : Theme.Light;

    this.themeService.setTheme(theme);
  }
}

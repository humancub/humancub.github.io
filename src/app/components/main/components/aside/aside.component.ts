import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../../core/enums/theme.enum';
import { ThemeService } from '../../../../core/services/theme.service';
import { ThemeBasedComponent } from '../../core/classes';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent extends ThemeBasedComponent implements OnInit {
  public Theme = Theme;
  public theme: Theme;

  constructor(public themeService: ThemeService) {
    super(themeService);
  }

  public themeToggled(toggled: boolean): void {
    const theme = toggled ? Theme.Dark : Theme.Light;

    this.themeService.setTheme(theme);
  }
}

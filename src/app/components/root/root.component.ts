import { Component, OnInit } from '@angular/core';
import { Theme } from '../../core/enums/theme.enum';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeBasedComponent } from '../main/core/classes';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppRootComponent extends ThemeBasedComponent implements OnInit {
  public Theme = Theme;
  public title = 'vk-stats';

  public theme: Theme;

  constructor(public themeService: ThemeService) {
    super(themeService);
  }

  ngOnInit(): void {
    this.themeService.theme.subscribe((theme: Theme) => {
      this.theme = theme;
    });
  }
}

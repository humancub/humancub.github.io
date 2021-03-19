import { Directive, OnInit } from '@angular/core';
import { Theme } from 'src/app/core/enums/theme.enum';
import { ThemeService } from 'src/app/core/services/theme.service';

@Directive()
export abstract class ThemeBasedComponent implements OnInit {
  public Theme = Theme;
  public theme: Theme;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme.subscribe((theme: Theme) => (this.theme = theme));
  }
}

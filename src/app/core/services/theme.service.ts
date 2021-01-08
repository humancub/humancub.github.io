import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme: BehaviorSubject<Theme> = new BehaviorSubject(Theme.Dark);

  public setTheme(theme: Theme): void {
    this.theme.next(theme);
  }
}

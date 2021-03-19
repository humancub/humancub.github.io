import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../../core/services/theme.service';
import { ThemeBasedComponent } from '../../core/classes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends ThemeBasedComponent implements OnInit {
  constructor(public themeService: ThemeService, private router: Router) {
    super(themeService);
  }

  public logout(): void {
    this.router.navigate(['authentication/login'], {
      state: {
        logoutConfirmed: true,
      },
    });
  }
}

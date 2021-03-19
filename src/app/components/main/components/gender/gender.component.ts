import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';
import { ThemeBasedComponent } from '../../core/classes';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent extends ThemeBasedComponent implements OnInit {
  constructor(public themeService: ThemeService) {
    super(themeService);
  }
}

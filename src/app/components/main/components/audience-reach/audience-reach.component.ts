import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from '../../../../core/services/theme.service';
import { ThemeBasedComponent } from '../../core/classes';

@Component({
  selector: 'app-audience-reach',
  templateUrl: './audience-reach.component.html',
  styleUrls: ['./audience-reach.component.scss'],
})
export class AudienceReachComponent
  extends ThemeBasedComponent
  implements OnInit {
  public dataAudienceReach = new FormGroup({
    calendarData: new FormControl('', [Validators.required]),
    checkboxData: new FormControl('', [Validators.required]),
  });

  public controls = {
    calendarData: this.dataAudienceReach.get('calendarData'),
    checkboxData: this.dataAudienceReach.get('checkboxData'),
  };

  constructor(public themeService: ThemeService) {
    super(themeService);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.dataAudienceReach.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}

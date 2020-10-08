import { Component } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'ffdc-theme-builder-demo',
  templateUrl: './theme-builder-demo.component.html',
  styleUrls: ['./theme-builder-demo.component.scss']
})
export class ThemeBuilderComponent {
  statePrimary = '0, 158, 224';
  stateSecondary = '16, 71, 224';
  constructor() {}

  changePrimaryComplete($event: ColorEvent) {
    console.log($event);
    document.documentElement.style.setProperty(
      '--color-primary',
      $event.color.rgb.r + ',' + $event.color.rgb.g + ',' + $event.color.rgb.b
    );
    //document.documentElement.style.setProperty("--color-primary-100", $event.color.rgb.r+', '+$event.color.rgb.g+', '+$event.color.rgb.b);
  }

  changeSecondaryComplete($event: ColorEvent) {
    console.log($event);
    document.documentElement.style.setProperty(
      '--color-secondary',
      $event.color.rgb.r + ',' + $event.color.rgb.g + ',' + $event.color.rgb.b
    );
  }
}

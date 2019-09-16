import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatCardModule,
  MatChipsModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatButtonToggleModule,
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
  ]
})
export class MaterialModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  exports: [
  	MatIconModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class CustomMaterialModule { }

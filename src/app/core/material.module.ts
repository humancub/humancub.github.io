import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,

    MatToolbarModule,

    MatCardModule,

    MatDialogModule,

    MatTableModule,

    MatProgressSpinnerModule,
  ],

  exports: [
    CommonModule,

    MatToolbarModule,

    MatCardModule,

    MatDialogModule,

    MatTableModule,

    MatProgressSpinnerModule,
  ],
})
export class CustomMaterialModule {}

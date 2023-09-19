import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { FormsModule } from '@angular/forms';

const MaterialComponents = [
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule,

  ReactiveFormsModule,
  MatInputModule,
  FormsModule,
];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    MaterialComponents,
  ],
  exports: [MaterialComponents],
})
export class MaterialModule {}

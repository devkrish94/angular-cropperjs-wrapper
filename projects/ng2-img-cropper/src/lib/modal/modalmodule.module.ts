import { CropperComponent } from './../cropper/cropper.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatDialogModule, MatSliderModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ModalComponent,
    CropperComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatGridListModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
  ],
  exports : [ModalComponent],
  entryComponents: [ModalComponent],
  bootstrap: [ModalComponent],
})

export class ModalModule { }

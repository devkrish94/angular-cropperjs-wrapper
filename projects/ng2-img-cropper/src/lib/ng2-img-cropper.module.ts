import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2ImgCropperComponent } from './ng2-img-cropper.component';
import { ModalComponent } from './modal/modal.component';
import { MatGridListModule, MatDialogModule, MatSliderModule, GestureConfig } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CropperComponent } from './cropper/cropper.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
@NgModule({
  declarations: [Ng2ImgCropperComponent,
    CropperComponent,
    ModalComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
  ],
  exports : [Ng2ImgCropperComponent],
  entryComponents: [ModalComponent],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
  ]
  

})
//
export class Ng2ImgCropperModule { }

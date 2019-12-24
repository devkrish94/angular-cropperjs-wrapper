import { NgModule } from '@angular/core';
import { AngularCropperjsWrapperComponent } from './angular-cropperjs-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatDialogModule, MatSliderModule, GestureConfig } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { CropperComponent } from './cropper/cropper.component';

@NgModule({
  declarations: [AngularCropperjsWrapperComponent,
    ModalComponent,
    CropperComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    MatGridListModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
  ],
  exports: [AngularCropperjsWrapperComponent],
  entryComponents: [ModalComponent],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
  ],
  bootstrap: [ModalComponent],
})
export class AngularCropperjsWrapperModule { }

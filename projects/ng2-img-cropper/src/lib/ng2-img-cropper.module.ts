import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2ImgCropperComponent } from './ng2-img-cropper.component';
import { ModalComponent } from './modal/modal.component';
import { MatGridListModule, MatDialogModule, MatSliderModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CropperComponent } from './cropper/cropper.component';
@NgModule({
  declarations: [Ng2ImgCropperComponent,
    CropperComponent,
    ModalComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    MatGridListModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
  ],
  exports : [Ng2ImgCropperComponent],
  entryComponents: [ModalComponent],

})
//
export class Ng2ImgCropperModule { }

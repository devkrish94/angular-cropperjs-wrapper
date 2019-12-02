import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2ImgCropperModule } from '../../projects/ng2-img-cropper/src/public_api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2ImgCropperModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CropperComponent } from './../cropper/cropper.component';
import { DomSanitizer } from '@angular/platform-browser';
// import { ImageCroppedEvent } from '../image-cropper/interfaces';
// import { ImageCropperComponent } from '../image-cropper/component/image-cropper.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Component, OnInit, ViewChild, Inject, EventEmitter, Output, ElementRef, ChangeDetectorRef } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  selected = {
    image : false,
    template: false
  };
  min = 0;
  max = 100;
  value = 0;
  isValidImage = true;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
    private sanitizer: DomSanitizer, 
    private cd: ChangeDetectorRef,
    private dialogRef: MatDialogRef<ModalComponent> ) {
    // console.log(this.data);

  }
  // @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  @ViewChild('fileType') fileType: ElementRef;
  originalBase64: string;
  safeImgDataUrl: any;
  originalImage: HTMLImageElement;
  originalSize: any;
  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  fileChangeEvent(event: any): void {
    const type = event.target.value.split('.').pop();

      if (type.toLowerCase() === 'jpg' || type.toLowerCase() === 'jpeg' || type.toLowerCase() === 'png'
      || type.toLowerCase() === 'bmp' || type.toLowerCase() === 'gif'|| type.toLowerCase() === 'tiff'  ) {
      this.isValidImage = true;
      this.imageChangedEvent(event);
      this.selected.image = true;
      this.selected.template = false;
    } else {
      // this.imageChangedEvent = '';
      this.isValidImage = false;
      this.fileType.nativeElement.value = '';
      this.selected.image = false;

    }

  }
  imageChangedEvent(event: any) {
    // this.initCropper();
    if (event && event.target && event.target.files && event.target.files.length > 0) {
        this.loadImageFile(event.target.files[0]);
    }
}

loadImageFile(file: File): void {
  const fileReader = new FileReader();
  fileReader.onload = (event: any) => {
      const imageType = file.type;
      if (this.isValidImageType(imageType)) {
        this.loadBase64Image(event.target.result);
          // resetExifOrientation(event.target.result)
          //     .then((resultBase64: string) => this.loadBase64Image(resultBase64))
          //     .catch(() => this.loadImageFailed.emit());
      } else {
          // this.loadImageFailed.emit();
      }
  };
  fileReader.readAsDataURL(file);
}

private isValidImageType(type: string): boolean {
  return /image\/(png|jpg|jpeg|bmp|gif|tiff)/.test(type);
}

private loadBase64Image(imageBase64: string): void {
  this.originalBase64 = imageBase64;
  this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageBase64);
  this.originalImage = new Image();
  // this.originalImage.onload = () => {
  //     this.originalSize.width = this.originalImage.width;
  //     this.originalSize.height = this.originalImage.height;
  //     this.cd.markForCheck();
  // };
  this.originalImage.src = imageBase64;
  
}
  // imageCropped(event: ImageCroppedEvent) {
  //   this.croppedImage = event.base64;

  //   //
  //   // console.log(event);
  // }
  imageLoaded() {
    this.showCropper = true;
    //  console.log('Image loaded');
  }
  cropperReady() {
    // console.log('Cropper ready');
  }
  loadImageFailed () {
    // console.log('Load failed');
  }
  rotateLeft() {
    this.angularCropper.cropper.rotate(-90);
  }
  rotateRight() {
    this.angularCropper.cropper.rotate(90);
  }
  flipHorizontal() {
    this.angularCropper.cropper.scale(-1,1);
  }
  flipVertical() {
    this.angularCropper.cropper.scale(1,-1);  
  }


  onTemplateChange(i) {
    this.croppedImage = i;
    this.selected.template = true;

  }

  ngOnInit() {
    this.croppedImage = this.data.selected;

  }

  onExport() {
   this.croppedImage = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/png');
  //  console.log(this.croppedImage);
   this.dialogRef.close(this.croppedImage);
   
  }
  cropperTouchStart(event){
    event.stopPropagation();
    event.preventDefault(); //Most important
  }
}

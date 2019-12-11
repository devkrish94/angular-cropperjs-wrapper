import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'gobiggi-cropperjs-wrapper',
  templateUrl: './ng2-img-cropper.component.html',
  styleUrls: ['./ng2-img-cropper.component.css']
})
export class Ng2ImgCropperComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() image = '' ;
  @Input() widthOfCropper ;
  @Input() heightOfCropper ;
  @Output() croppedImage = new EventEmitter();
  @Input() resizeToWidth = 128;
  @Input() aspectRatio = NaN;
  @Input() maintainAspectRatio = true;
  @Input() heightOfDialog;
  @Input() widthOfDialog;
  @Input() selected = '' ;
  @Input() originalImage ;


  ngOnInit() {
    // console.log(this.height);
    // console.log(this.width);

  }

  openDialog() {

    const dialogRef = this.dialog.open(ModalComponent, {
      width: window.innerWidth<960 ? this.widthOfDialog +'%' : '50%',
      height: window.innerHeight<960 ? this.heightOfDialog +'%' : '80%',
      data: {
        image: this.image,
        width: this.widthOfCropper,
        height: this.heightOfCropper,
        // imageSize: this.resizeToWidth,
        // maintainAspectRatio: this.maintainAspectRatio,
        aspectRatio: this.aspectRatio,
        selected: this.selected,
        cropBoxMovable: false,
        cropBoxResizable: false,
        responsive: true,
        rotatable : true,
        scalable: true,
        minCropBoxWidth: 100,
        minCropBoxHeight: 200,
        modal: false,
        originalImage: this.originalImage,
        dragMode: 'move'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.croppedImage.emit(result);
    });
  }

  print(e) {
    // console.log(e);
    // console.log('aa');

  }
}

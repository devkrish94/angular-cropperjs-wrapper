import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'lib-angular-cropperjs-wrapper',
  templateUrl: './angular-cropperjs-wrapper.component.html',
  styleUrls: ['./angular-cropperjs-wrapper.component.css']
})
export class AngularCropperjsWrapperComponent implements OnInit {

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
  @Input() cropBoxMovable = true;
  @Input() cropBoxResizable = true;
  @Input() minCropBoxWidth = 0;
  @Input() minCropBoxHeight = 0;
  @Input() dragMode = 'crop';
  @Input() toggleDragModeOnDblclick = false;


  ngOnInit() {
    // console.log(this.height);
    // console.log(this.width);

  }

  openDialog() {

    const dialogRef = this.dialog.open(ModalComponent, {
      width: window.innerWidth<960 ? this.widthOfDialog +'%' : '100%',
      maxWidth: window.innerWidth<960 ? this.widthOfDialog +'vw' : '100vw',
      height: window.innerHeight<960 ? this.heightOfDialog +'%' : '100%',
      panelClass: 'image-cropper-modal-ui',
      data: {
        image: this.image,
        width: this.widthOfCropper,
        height: this.heightOfCropper,
        // imageSize: this.resizeToWidth,
        // maintainAspectRatio: this.maintainAspectRatio,
        aspectRatio: this.aspectRatio,
        selected: this.selected,
        cropBoxMovable: this.cropBoxMovable,
        cropBoxResizable: this.cropBoxResizable,
        responsive: true,
        rotatable : true,
        scalable: true,
        minCropBoxWidth: this.minCropBoxWidth,
        minCropBoxHeight: this.minCropBoxHeight,
        modal: false,
        originalImage: this.originalImage,
        dragMode: this.dragMode,
        toggleDragModeOnDblclick : this.toggleDragModeOnDblclick,
        zoomOnWheel : false
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

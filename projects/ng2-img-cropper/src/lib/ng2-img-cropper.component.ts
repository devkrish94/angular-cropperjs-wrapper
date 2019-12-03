import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-ng2-img-cropper',
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
  @Input() aspectRatio = '1/1';
  @Input() maintainAspectRatio = true;
  @Input() height;
  @Input() width;
  @Input() selected = '' ;


  ngOnInit() {
    // console.log(this.height);
    // console.log(this.width);

  }

  openDialog() {

    const dialogRef = this.dialog.open(ModalComponent, {
      width: window.innerWidth<960 ? this.width +'%' : '50%',
      height: window.innerHeight<960 ? this.height +'%' : '80%',
      data: {
        image: this.image,
        width: this.widthOfCropper,
        height: this.heightOfCropper,
        imageSize: this.resizeToWidth,
        maintainAspectRatio: this.maintainAspectRatio,
        selected: this.selected,
        responsive: true,
        rotatable : true,
        scalable: true,
        minCropBoxWidth: 100,
        minCropBoxHeight: 200
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

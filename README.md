# GoBiggi-Cropperjs-Wrapper

This is an image cropping tool made in angular 7 and angular material using the concepts of cropper.js library. It opens the cropper in the dialog along with some default images where the user can either choose the images from the predefined ones he/she can upload it from the local machine.

## Install from NPM

``` npm install angular-cropperjs-wrapper --save ```

## Usage

Add the AngularCropperjsWrapperModule to the imports of the module which will be using the Image Cropper.

```
import { AngularCropperjsWrapperModule } from 'angular-cropperjs-wrapper';
@NgModule({
    imports: [
        ...
        AngularCropperjsWrapperModule
    ],
    declarations: [
        ...
    ],
    exports: [
        ...
    ],
    providers: [
        ...
    ]
})
export class YourModule {
}
```

Add the element to your HTML:

```
<lib-angular-cropperjs-wrapper [image]='imageURLs'
(croppedImage)="coverImageData($event)"
[aspectRatio] = "1920/430"
[widthOfDialog]='800' 
[heightOfDialog]='1000'
[selected]='1'
[widthOfCropper] = '1920'
[heightOfCropper] = '430'
[dragMode] = "'move'"
[cropBoxMovable] = "false"
[cropBoxResizable] = "false"></lib-angular-cropperjs-wrapper>

```
And add this to your ts file:

```
coverImageData(event) {
    .....

  }
```
## Settings

1. image: string[] - array of default image urls
2. croppedImage - event fired after the cropper dialog is closed; returns base64 of the cropped image or the index of the selected image from the set of default image URLs
3. aspectRatio: number - aspect ratio of the cropper; default is 1:1
4. widthOfDialog: number - width of the cropper dialog 
5. heightOfDialog: number - height of the croper dialog
6. selected: number - default selected image from the set of default image urls
7. widthOfCropper: number - width of the cropped image
8. heightOfCropper: number - height of the cropped image
9. cropBoxMovable: boolean - whether cropper box is movable
10. cropBoxResizable: boolean - whether cropper box is resizable
11. dragMode: 'crop'|'none'|'move' - whether cropper is movale on drag
12. minCropBoxWidth: number - minimum crop box width
13. minCropBoxHeight: number - minimum crop box height
14. originalImage: string - url of the image which you want to prepopulated
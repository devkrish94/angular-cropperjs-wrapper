# GoBiggi-CropperJs-Wrapper

This is an image cropping tool made in angular 7 and angular material using the concepts of cropper.js library. It opens the cropper in the dialog along with some default images where the user can either choose the images from the predefined ones he/she can upload it from the local machine.

## Install from NPM

``` npm install gobiggi-cropperjs-wrapper --save ```

## Usage

```<>```

## Settings

1. image: string[] - array of default image urls
2. croppedImage - event fired after the cropper dialog is closed; returns base64 of the cropped image or the index of the selected image from the set of default image URLs
3. aspectRatio: number - aspect ratio of the cropper; default is 1:1
4. widthOfDialog: number - width of the cropper dialog 
5. heightOfDialog: number - height of the croper dialog
6. selected: number - default selected image from the set of default image urls
7. widthOfCropper: number - width of the cropped image
8. heightOfCropper: number - height of the cropped image
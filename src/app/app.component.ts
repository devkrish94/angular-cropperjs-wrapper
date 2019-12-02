import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng2-img-cropper-app';

  imageURLs = [
    {url: 'https://s3.amazonaws.com/assets.gobiggi.com-new/dashboard-images/business-card/default-01.jpg'},
    {url: 'https://s3.amazonaws.com/assets.gobiggi.com-new/dashboard-images/business-card/default-02.jpg'},
    {url: 'https://s3.amazonaws.com/assets.gobiggi.com-new/dashboard-images/business-card/default-03.jpg'},
    {url: 'https://s3.amazonaws.com/assets.gobiggi.com-new/dashboard-images/business-card/default-04.jpg'},
  ];

  coverImageData(e) {
    console.log(e);

  }
}

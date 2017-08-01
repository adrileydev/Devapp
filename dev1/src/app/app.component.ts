import { Component } from '@angular/core';
import { Config } from './config';
import { Video } from './video';

import { VideoListComponent } from "app/video-list/video-list.component";

@Component({
  selector: 'vhs-root',
  templateUrl: './app.component.html'
 
  //directives: [VideoListComponent]
})
 
export class AppComponent {

  title = Config.TITLE_PAGE;
  videos: Array<Video>;

  constructor() {
    this.videos = [
      new Video(1, "Test", "www.test.com", "Test Description"),
      new Video(2, "Test 2", "www.test2.com")
    ]
  } 
}

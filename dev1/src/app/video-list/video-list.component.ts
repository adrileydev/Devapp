import { Video } from './../video';
import { Component, OnInit, Input } from '@angular/core';
 
 
@Component({
  selector: 'vhs-video-list',
  templateUrl: './video-list.component.html', 

})
export class VideoListComponent implements OnInit {
 @Input() videos;
  constructor() { }

   p(vid: Video) {   
      console.log();
      alert(JSON.stringify(vid));
   }

  ngOnInit() {
  
  }

}

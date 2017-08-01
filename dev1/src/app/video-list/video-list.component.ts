import { Video } from './../video';
import { Component, OnInit, Input } from '@angular/core';
 
 
@Component({
  selector: 'vhs-video-list',
  templateUrl: './video-list.component.html', 
  //inputs: ['videos']
})
export class VideoListComponent implements OnInit {
 @Input() videos;
  constructor() { }

   onSelect(vid: Video) {   
      console.log(JSON.stringify(vid));
   }

  ngOnInit() {
  
  }

}

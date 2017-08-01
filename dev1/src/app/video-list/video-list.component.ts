import { Video } from './../video';
import { Component, OnInit, Input } from '@angular/core';
 
 
@Component({
  selector: 'vhs-video-list',
  templateUrl: './video-list.component.html', 
<<<<<<< HEAD
  //inputs: ['videos']
=======

>>>>>>> master
})
export class VideoListComponent implements OnInit {
 @Input() videos;
  constructor() { }

<<<<<<< HEAD
   onSelect(vid: Video) {   
      console.log(JSON.stringify(vid));
=======
   p(vid: Video) {   
      console.log();
      alert(JSON.stringify(vid));
>>>>>>> master
   }

  ngOnInit() {
  
  }

}

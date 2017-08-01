import { Video } from '../video';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from "events";
@Component({
     selector: 'vhs-video-list',
  templateUrl: './video-list.component.html',
     outputs:['selectVideo']
})
export class VideoListComponent implements OnInit {
  @Input()InputVideos; //// Vai Recebe  o Array de Videos  
  //  @Output() SelectVideo;
    SelectVideo = new EventEmitter();

  onSelect(vid : Video){
           console.log(JSON.stringify(vid));  }
  ngOnInit() {
  }
}
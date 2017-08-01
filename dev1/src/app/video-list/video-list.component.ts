 
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Video } from "app/video";

@Component({
     selector: 'vhs-video-list',
  templateUrl: './video-list.component.html',
     outputs:['selectVideo']
})
export class VideoListComponent implements OnInit {
  @Input()videos; //// Vai Recebe  o Array de Videos  
  //  @Output() SelectVideo;
   SelectVideo = new EventEmitter();
  //  Selecionado(vid: Video){
  //    console.log(JSON.stringify(vid));
   onSelectVideo(vid : Video){
       this.SelectVideo.next(vid);


   }
   
 
  ngOnInit() {
  }
}
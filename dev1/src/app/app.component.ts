 
import { Pessoa } from './Pessoa';
import { Component } from '@angular/core';
import { Config } from './config';
import { Video } from './video';
import { VideoListComponent } from "app/video-list/video-list.component";
@Component({
  selector:    'vhs-root',
  templateUrl: './app.component.html' 
  //directives: [VideoListComponent]
}) 
export class AppComponent {
  PageTitulo = Config.TITLE_PAGE; 
  ArrayVideo: Array<Video>;   
  ArrayPessoa:Array<Pessoa>;
  selectedVideo :Video;
        Np = " Nome das Pessoa "; 
  Detelhes = " Detalhes dos Videos";

  constructor(){
    this.ArrayVideo=[
        new Video(1, "Test 1", "21222", "Test Description"), 
        new Video(2, "Test 2", "asjdkajdajskd"), 
        new Video(3, "Test 3", "212312312"),
        new Video(4, "Test 4", "123123123123")
      ]
    this.ArrayPessoa=[
        new Pessoa("Adriley     Francisco Almeida Pereira",40,"3676777"),
        new Pessoa("Patricia    Siqueira Pereira",36,"3331112"),
        new Pessoa("Ana Luiza   Siqueira Pereira",11,"3223335"),
        new Pessoa("Victor Hugo Siqueira Pereira",12,"555557")
      ]
  } 
    onSelectVideo(InputVideos){
      this.selectedVideo = InputVideos;
    }
}

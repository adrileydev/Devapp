import { Pessoa } from './Pessoa';
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
  Np = "Nome da Pessoa ";
  videos: Array<Video>;
  Pessoas : any[];

  constructor() {
    this.videos = [
      new Video(1, "Test", "www.test.com", "Test Description"),
      new Video(2, "Test 2", "www.test2.com"),
      new Video(3, "Test 2", "www.test2.com")
    ]
    this.Pessoas = [
        new Pessoa("adriley",40,"3676777"),
        new Pessoa("patricxia",36,"367"),
        new Pessoa("Ana Luiza",11,"35"),
        new Pessoa("Victor Hugo Siqueira Pereira",12,"7")
        
        
    ]
  } 
}

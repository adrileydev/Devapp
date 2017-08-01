import { Video } from './../video';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'vhs-detalhe',
  templateUrl: './detalhe.component.html' 
})
export class DetalheComponent implements OnInit {
  @Input()InputVideos;
  constructor() { }
  ngOnInit() {
  }
}

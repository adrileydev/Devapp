import { Component, OnInit, Input } from '@angular/core';
import { Menuitem } from "app/restaurant-detail/menu-item/menu-item-model";

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html' 
})
export class MenuItemComponent implements OnInit {
  @Input() menuitem:Menuitem
  constructor() { }

  ngOnInit() {
  }

}

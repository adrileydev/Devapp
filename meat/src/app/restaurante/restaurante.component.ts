import { Component, OnInit, Input } from '@angular/core';
import { ItemComponent } from "app/restaurante/restaurants/item.component";
import { ItemRestaurant } from "app/restaurante/restaurants/item.model";



@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {
  restaurantes: ItemRestaurant[] =
  [
    {
      id: 1,
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png"
    },
    {
      id: 2,
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png",

    }

  ]

  @Input() itemRestaurante: ItemComponent

  constructor() { }

  ngOnInit() {
  }

}

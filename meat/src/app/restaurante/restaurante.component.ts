import { Component, OnInit } from '@angular/core';
import { Restaurant } from "./restaurant/restaurant.model";




@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {
  
  restaurants : Restaurant[]= 
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

    },
    {
      id: 2,
      name: "  House",
      category: "Pizza",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png",

    },

    {
      id: 2,
      name: "Burger",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png",

    }

  ]

  constructor() { }

  

  ngOnInit() {
  }

}

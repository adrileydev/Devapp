import { Component, OnInit } from '@angular/core';
import { Restaurant } from "./restaurant/restaurant.model";
import { RestauranteService } from "app/restaurante/restaurant/restaurant.service";

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {
  restaurants: Restaurant[]
  constructor(private restauranteService: RestauranteService) { }  

  ngOnInit() {
    this.restauranteService.restaurants().subscribe(restaurants => this.restaurants = restaurants);     
  }

}

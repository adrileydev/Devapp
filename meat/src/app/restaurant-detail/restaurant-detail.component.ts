import { Component, OnInit } from '@angular/core';
import { RestauranteService } from "app/restaurante/restaurant/restaurant.service";
import { Restaurant } from "app/restaurante/restaurant/restaurant.model";
import { ActivatedRoute} from "@angular/router"
@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html' 
})
export class RestaurantDetailComponent implements OnInit {

     restaurant: Restaurant[]
     constructor(private restauranteService: RestauranteService,private route:ActivatedRoute) { }  
 

  ngOnInit() {
      
    
    this.restauranteService.GetId(this.route.snapshot.params['id'])
                                 .subscribe(restaurant => this.restaurant = restaurant )
          


  }

}

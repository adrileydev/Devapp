 
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestauranteService } from "app/restaurante/restaurant/restaurant.service";
import { Observable } from 'rxjs/Observable';
 
 

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

 
 reviews: Observable<any> 

  constructor(private restauranteService: RestauranteService,private route : ActivatedRoute ) {  

  
    this.reviews = this.restauranteService.GetReviews(this.route.parent.snapshot.params['id']);
 
  }
  ngOnInit() {
 
  }

}

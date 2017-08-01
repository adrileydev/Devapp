<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestauranteService } from "app/restaurante/restaurant/restaurant.service";
import { Observable } from 'rxjs/Observable';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> master

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

<<<<<<< HEAD
 reviews: Observable<any> 

  constructor(private restauranteService: RestauranteService,private route : ActivatedRoute ) { }

  ngOnInit() {
    this.reviews = this.restauranteService.GetReviews(this.route.parent.snapshot.params['id']);
=======
  constructor() { }

  ngOnInit() {
>>>>>>> master
  }

}

import { Component, OnInit } from '@angular/core';

import { RestaurantService } from './services/restaurant.service';
import { RestaurantList } from './model/restaurant-list';

@Component({
  selector: 'dr-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
	restaurantList: RestaurantList;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  	this.restaurantService.getRestaurants().subscribe(data => this.restaurantList = data);
  }

  updateRestaurants(page) {
  	this.restaurantService.getRestaurants(page).subscribe(data => this.restaurantList = data);
  }

}

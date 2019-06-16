import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RestaurantList } from '../model/restaurant-list';

const url = "http://localhost:3000/api/restaurants";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(page?): Observable<RestaurantList> {
  	let queryParams = {};

  	if (page) {
  		queryParams = {
  			params: new HttpParams().set("page", page).set("pageSize", '12')
  		}
  	}

  	return this.http.get(url, queryParams).pipe(map(response => {
  		return new RestaurantList(response);
  	}))
  }
}

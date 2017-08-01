import { Restaurant } from "app/restaurante/restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { MET_API } from "app/ap.api";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ErroHandler } from "app/app.erro";

@Injectable()
export class RestauranteService {
    constructor(private http: Http) { }
    All(): Observable<Restaurant[]> {
        return this.http.get(`${MET_API}/restaurants`)
            .map(response => response.json())
            .catch(ErroHandler.handleError)
    }
    GetId(id: string): Observable<Restaurant[]> {
        return this.http.get(`${MET_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErroHandler.handleError)
    }
    GetReviews(id: string): Observable<any> {
        return this.http.get(`${MET_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErroHandler.handleError)
    }
}
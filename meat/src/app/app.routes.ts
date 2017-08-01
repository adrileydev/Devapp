import { Routes } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { RestauranteComponent } from "app/restaurante/restaurante.component";
import { PedidoComponent } from "app/pedido/pedido.component";
import { RestaurantDetailComponent } from "app/restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "app/restaurant-detail/reviews/reviews.component";
import { MenuComponent } from "app/restaurant-detail/menu/menu.component";
 

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'restaurante', component: RestauranteComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
        children:[
               { path : '',redirectTo: 'menu',pathMatch:'full'},
               { path: 'menu', component: MenuComponent},
               { path: 'reviews', component: ReviewsComponent}
        ]
       },
    { path: 'Pedido', component: PedidoComponent },
 


]
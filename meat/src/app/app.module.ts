import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';


import { AppComponent }   from './app.component';
import { HeaderComponent }from './header/header.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component'
 
import { ROUTES }               from "app/app.routes";
import { RestauranteComponent } from './restaurante/restaurante.component';
import { PedidoComponent }      from './pedido/pedido.component';
import { RestaurantComponent }  from "./restaurante/restaurant/restaurant.component";
import { RestauranteService }   from "app/restaurante/restaurant/restaurant.service";
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
<<<<<<< HEAD
 
=======
import { TesteComponent } from './teste/teste.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestauranteComponent,
    PedidoComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
<<<<<<< HEAD
    ReviewsComponent

=======
    ReviewsComponent,
    TesteComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestauranteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

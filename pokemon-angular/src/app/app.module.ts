import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ProfileComponent } from './profile/profile.component';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    NavmenuComponent,
    PokemonDetailComponent,
    ProfileComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

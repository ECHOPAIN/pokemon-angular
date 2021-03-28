import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { RESULTS } from '../mock-pokemons';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor() { }

  ngOnInit(): void {
    RESULTS.forEach(element => {
      let pokemon = {} as Pokemon;
      let splitedUrl = element.url.split('/');
      pokemon.id = +splitedUrl[splitedUrl.length-2];
      pokemon.name = element.name;
      pokemon.front_default = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.id+'.png';
      this.pokemons.push(pokemon);
    });
  }

}

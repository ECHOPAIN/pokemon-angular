import { Injectable } from '@angular/core';
import { Pokemon } from './model/pokemon/pokemon';
import { PokemonDetail } from './model/pokemon/pokemon';
import { POKEMONS } from './mock-pokemons';
import { POKEMONDETAIL } from './mock-pokemon-detail';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Observable<Pokemon[]>  {
    let pokemons: Pokemon[] = [];

    POKEMONS.results.forEach(element => {
      let pokemon = {} as Pokemon;
      let splitedUrl = element.url.split('/');
      pokemon.id = +splitedUrl[splitedUrl.length-2];
      pokemon.name = element.name;
      pokemon.front_default = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.id+'.png';
      pokemons.push(pokemon);
    });
    return of(pokemons);
  }


  getPokemon(id: number): Observable<PokemonDetail> {
    const detail = of(POKEMONDETAIL);
    return detail;
  }
  
}

import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { RESULTS } from './mock-pokemons';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Observable<Pokemon[]>  {
    let pokemons: Pokemon[] = [];

    RESULTS.forEach(element => {
      let pokemon = {} as Pokemon;
      let splitedUrl = element.url.split('/');
      pokemon.id = +splitedUrl[splitedUrl.length-2];
      pokemon.name = element.name;
      pokemon.front_default = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.id+'.png';
      pokemons.push(pokemon);
    });
    return of(pokemons);
  }

  getPokemon(id: number): Observable<Pokemon> {
  // For now, assume that a pokemon with the specified `id` always exists.

  let pokemon = {} as Pokemon;
  pokemon.id = id;
  pokemon.name = 'pikachu';
  pokemon.front_default = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.id+'.png';

  //const pokemon = RESULTS.find(h => h.id === id) as Pokemon;
  return of(pokemon);
  }
}

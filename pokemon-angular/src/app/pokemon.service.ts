import { Injectable } from '@angular/core';
import { Pokemon } from './model/pokemon/pokemon';
import { PokemonDetail } from './model/pokemon/pokemon';
import { POKEMONS } from './mock-pokemons';
import { POKEMONDETAIL } from './mock-pokemon-detail';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';  // URL to web api

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]>  {
    let pokemons: Pokemon[] = [];

    for (let i = 0; i < 251; i++) {
      let pokemon = {} as Pokemon;
      let splitedUrl = POKEMONS.results[i].url.split('/');
      pokemon.id = +splitedUrl[splitedUrl.length-2];
      pokemon.name = POKEMONS.results[i].name;
      pokemon.front_default = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.id+'.png';
      pokemons.push(pokemon);
    }




    //loading all pokemon at once

    //TODO load more pokemon on scroll ?

    /*POKEMONS.results.forEach(element => {
      let pokemon = {} as Pokemon;
      let splitedUrl = element.url.split('/');
      pokemon.id = +splitedUrl[splitedUrl.length-2];
      pokemon.name = element.name;
      pokemon.front_default = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemon.id+'.png';
      pokemons.push(pokemon);
    });*/
    return of(pokemons);
  }


  getPokemon(id: number): Observable<PokemonDetail> {

    return this.http.get<PokemonDetail>(this.pokemonUrl+'/'+id)
    /*
    const detail = of(POKEMONDETAIL);
    return detail;
    */
  }

}

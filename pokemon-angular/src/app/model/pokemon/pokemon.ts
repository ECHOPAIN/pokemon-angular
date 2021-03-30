import { Sprites } from './sprites';
import { Held_items } from './held-items';
import { Game_indices } from './game-indices';
import { Moves } from './moves';
import { Abilities } from './abilities';
import { Stats } from './stats';
import { Forms } from './forms';
import { Types } from './types';
import { Species } from './species';

export interface Pokemon {
  id: number;
  name: string;
  front_default: string
}

export interface PokemonDetail {
    abilities: Abilities[],
    base_experience: number,
    forms: Forms[],
    game_indices: Game_indices[],
    height: number,
    held_items: Held_items[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: Moves[],
    name: string,
    order: number,
    past_types: [],
    species: Species,
    sprites : Sprites,
    stats: Stats[],
    types: Types[],
    weight: number
  }

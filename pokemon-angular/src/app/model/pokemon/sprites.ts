import { SpriteGroup1, SpriteGroup2, SpriteGroup3 } from './sprite-group';

export interface Sprites {
    back_default: string | null,
    back_female: string | null,
    back_shiny: string | null,
    back_shiny_female: string | null,
    front_default: string | null,
    front_female: string | null,
    front_shiny: string | null,
    front_shiny_female: string | null,
    other: {
      dream_world: {
        front_default: string | null,
        front_female: string | null
      },
      "official-artwork": {
        front_default: string | null
      }
    },
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string | null,
          back_gray: string | null,
          front_default: string | null,
          front_gray: string | null
        },
        yellow: {
          back_default: string | null,
          back_gray: string | null,
          front_default: string | null,
          front_gray: string | null
        }
      },
      "generation-ii": {
        crystal: SpriteGroup2,
        gold: SpriteGroup2,
        silver: SpriteGroup2
      },
      "generation-iii": {
        emerald: {
          front_default: string | null,
          front_shiny: string | null
        },
        "firered-leafgreen": SpriteGroup2,
        "ruby-sapphire": SpriteGroup2
      },
      "generation-iv": {
        "diamond-pearl": SpriteGroup1,
        "heartgold-soulsilver": SpriteGroup1,
        platinum: SpriteGroup1
      },
      "generation-v": {
        "black-white": {
          animated: SpriteGroup1,
          back_default: string | null,
          back_female: string | null,
          back_shiny: string | null,
          back_shiny_female: string | null,
          front_default: string | null,
          front_female: string | null,
          front_shiny: string | null,
          front_shiny_female: string | null
        }
      },
      "generation-vi": {
        "omegaruby-alphasapphire": SpriteGroup3,
        "x-y": SpriteGroup3
      },
      "generation-vii": {
        icons: {
          front_default: string | null,
          front_female: string | null
        },
        "ultra-sun-ultra-moon": SpriteGroup3
      },
      "generation-viii": {
        icons: {
          front_default: string | null,
          front_female: string | null
        }
      }
    }
  }

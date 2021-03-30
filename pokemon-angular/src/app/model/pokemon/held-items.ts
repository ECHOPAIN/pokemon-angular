import { Vesrion_details } from './version-details';

export interface Held_items {
  item: {
    name: string,
    url: string
  },
  version_details: Vesrion_details[]
}

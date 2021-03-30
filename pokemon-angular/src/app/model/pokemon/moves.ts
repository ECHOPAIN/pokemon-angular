import { Version_group_details } from './version-group-details';

export interface Moves {
  move: {
    name: string,
    url: string
  },
  version_group_details: Version_group_details[]
}

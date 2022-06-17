import { ActionReducerMap } from '@ngrx/store';
import * as Reducers from './all-imports';

export interface GeneralInterface {
  data: any[];
  load: boolean;
}

export interface IAppState {
  characters: any,
  locations: any,
  episodes: any
}

export const AppReducers: ActionReducerMap<IAppState> = {
  characters: Reducers.CharactersReducer,
  locations: Reducers.LocationsReducer,
  episodes: Reducers.EpisodesReducer
}

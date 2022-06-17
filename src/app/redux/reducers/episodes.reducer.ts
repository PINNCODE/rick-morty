import {GeneralInterface} from "./app-reducers.reducer";
import {createReducer, on} from "@ngrx/store";
import * as episodesActions from '../actions/episodes.actions'

const initialState: GeneralInterface = {
  data: [],
  load: false
}

const _episodes = createReducer(initialState,
  on(episodesActions.EpisodesActionClass.SuccessAction, (state, action) => {
    return {
      ...state,
      load: true,
      data: action.payload
    };
  })
)

export function EpisodesReducer(
  state: GeneralInterface,
  action: any) {
  return _episodes(state,action)
}

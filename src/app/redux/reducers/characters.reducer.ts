import {GeneralInterface} from "./app-reducers.reducer";
import {createReducer, on} from "@ngrx/store";
import * as charactersActions from '../actions/characters.actions'

const initialState: GeneralInterface = {
  data: [],
  load: false
}

const _characters = createReducer(initialState,
  on(charactersActions.CharactersActionClass.SuccessAction, (state, action) => {
    return {
      ...state,
      load: true,
      data: action.payload
    };
  })
)

export function CharactersReducer(
  state: GeneralInterface,
  action: any) {
  return _characters(state,action)
}

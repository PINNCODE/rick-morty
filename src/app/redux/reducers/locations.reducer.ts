import {GeneralInterface} from "./app-reducers.reducer";
import {createReducer, on} from "@ngrx/store";
import * as locationsActions from '../actions/locations.actions'

const initialState: GeneralInterface = {
  data: [],
  load: false
}

const _locations = createReducer(initialState,
  on(locationsActions.LocationsActionClass.SuccessAction, (state, action) => {
    return {
      ...state,
      load: true,
      data: action.payload
    };
  })
)

export function LocationsReducer(
  state: GeneralInterface,
  action: any) {
  return _locations(state,action)
}

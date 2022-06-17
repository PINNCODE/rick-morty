import {createAction, props} from "@ngrx/store";
import * as locations from '../types/locations.types'


const SuccessAction = createAction(locations.SUCCESS,
  props<{payload: any}>()
);

export const LocationsActionClass = {
  SuccessAction
}

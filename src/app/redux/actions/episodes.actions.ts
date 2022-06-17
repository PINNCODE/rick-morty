import {createAction, props} from "@ngrx/store";
import * as episodes from '../types/eposides.types'


const SuccessAction = createAction(episodes.SUCCESS,
  props<{payload: any}>()
);

export const EpisodesActionClass = {
  SuccessAction
}

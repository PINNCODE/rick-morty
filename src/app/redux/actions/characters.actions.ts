import {createAction, props} from "@ngrx/store";
import * as characters from '../types/character.types'


const SuccessAction = createAction(characters.SUCCESS,
  props<{payload: any}>()
);

export const CharactersActionClass = {
  SuccessAction
}

import { createAction, props } from '@ngrx/store';
import { State } from './hero.reducer';

export const homeScore = createAction('[Hero Page] Home Score');
export const awayScore = createAction('[Hero Page] Away Score');
export const resetScore = createAction('[Hero Page] Reset Score');
export const setScore = createAction('[Hero Page] Set Score', props<{game: State}>());

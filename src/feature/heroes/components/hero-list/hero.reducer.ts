import { Action, createReducer, on } from '@ngrx/store';

import * as HeroPageActions from './hero.action';

export interface State {
    home: number;
    away: number;
}

const initialState: State = {
    home: 0,
    away: 0
};

const scoreCardReducer = createReducer(
    initialState,
    on(HeroPageActions.homeScore, state => ({...state, home: state.home + 1})),
    on(HeroPageActions.awayScore, state => ({...state, away: state.away + 1})),
    on(HeroPageActions.resetScore, state => ({home: 0, away: 0})),
    on(HeroPageActions.setScore, (state, {game}) => ({home: game.home, away: game.away}))
);

export function reducer(state: State | undefined, action: Action) {
    return scoreCardReducer(state, action);
}

import { createAction, createReducer } from '@reduxjs/toolkit'

interface EmployeeProfile {
    pokemons: []
}

const initialState: EmployeeProfile = {
    pokemons: []
}

export const loadMore = createAction<[]>('pokemon/loadMore')
export const initPokemon = createAction<[]>('pokemon/initPokemon')

export const pokemonReducer = createReducer(initialState, builder => {
    builder
        .addCase(loadMore, (state, action) => {

        })
        .addCase(initPokemon, (state, action) => {
            const newPokemon = action.payload;
            state.pokemons = [...state.pokemons, ...newPokemon]
        })
})
import { createAction, createReducer } from '@reduxjs/toolkit'
import { Employee } from '../../types/Employee'

export interface UserLogin {
    accessToken: string,
    userDTO: {}
    logged: boolean

}

const initialState: UserLogin = {
    accessToken: "",
    userDTO: {},
    logged: false
}

export const isLogged = createAction<UserLogin>('LOGGED')
export const refreshed = createAction<UserLogin>('REFRESHED')
export const isLogout = createAction('LOGOUT')
export const authReducer = createReducer(initialState, builder => {
    builder
        .addCase(isLogged, (state, action) => {
            let copyState = state;
            copyState = {
                ...copyState,
                accessToken: action.payload.accessToken,
                userDTO: action.payload.userDTO,
                logged: true
            }
            return { ...state, ...copyState }
        })
        .addCase(refreshed, (state, action) => {
            let copyState = state;
            copyState = { ...copyState, accessToken: action.payload.accessToken }
            return { ...state, ...copyState }
        })
        .addCase(isLogout, (state) => {
            return { ...initialState }
        })

})


import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {portfolioReducer} from "../features/Portfolio/portfolio-reducer";

const rootReducer = combineReducers({
  portfolio: portfolioReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>


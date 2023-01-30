import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {ActionCreatorsMapObject, bindActionCreators} from "@reduxjs/toolkit";
import {useMemo} from "react";
import {AppRootStateType, AppThunkDispatch} from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export function useAction<T extends ActionCreatorsMapObject<any>>(action: T) {
    const dispatch = useAppDispatch()

    const boundAction = useMemo(() => {
        return bindActionCreators(action, dispatch)
    }, [])

    return boundAction
}

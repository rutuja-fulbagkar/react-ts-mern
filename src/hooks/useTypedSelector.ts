import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/auth/rootReducer";
import type { AppDispatch } from "../redux/auth/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

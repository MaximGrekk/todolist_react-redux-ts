import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store";

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useCustomDispatch = () => useDispatch<AppDispatch>();

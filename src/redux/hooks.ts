import { AppCombinedState } from '@redux/reducer';
import { AppDispatch } from '@redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppCombinedState> = useSelector;

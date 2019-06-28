import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';

export const store = createStore<any,any,any,any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TS'
} as any);
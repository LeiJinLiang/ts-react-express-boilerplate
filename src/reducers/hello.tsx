import { EnthusiasmAction } from "../actions";
import { StoreState } from "../types/index";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants/index";

const initState = {
  enthusiasmLevel: 1,
  languageName: "TS"
};

export const enthusiasmReducer = (
  state: StoreState = initState,
  action: EnthusiasmAction
): StoreState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
  }
  return state;
};

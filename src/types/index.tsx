import { BooleanLiteral } from "typescript";

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface Remote {
  isFetching: BooleanLiteral;
  fetched: Boolean;
  payload: any[];
  err: any;
}

export interface State {
  enthusiasmReducer: StoreState;
  remoteReducer: Remote;
}

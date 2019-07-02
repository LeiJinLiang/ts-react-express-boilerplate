export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface Remote {
  isFetching: Boolean;
  fetched: Boolean;
  payload: any[];
  err: any;
}

export interface State {
  enthusiasmReducer: StoreState;
  remoteReducer: Remote;
}

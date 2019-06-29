import Hello from "../components/Hello";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../types";

export const mapStateToProps = (state: State) => ({
  enthusiasmLevel: state.enthusiasmReducer.enthusiasmLevel,
  name: state.enthusiasmReducer.languageName
});

export const mapDispatchToProps = (
  dispatch: Dispatch<actions.EnthusiasmAction>
) => ({
  onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  onDecrement: () => dispatch(actions.decrementEnthusiasm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);

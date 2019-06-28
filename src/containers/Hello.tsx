import Hello from "../components/Hello";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export const mapStateToProps = (state: any) => ({
  enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
  name: state.enthusiasm.languageName
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

import Hello from "../components/Hello";
import * as actions from "../actions";
import { StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export const mapStateToProps = ({
  enthusiasmLevel,
  languageName
}: StoreState) => ({
  enthusiasmLevel,
  name: languageName
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

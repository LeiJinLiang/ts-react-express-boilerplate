import * as React from "react";
import { RemoteView } from "../components/RemoteView";
import { REMOTEDATA } from "../actions/remote";
import { connect } from "react-redux";
import { State } from "../types";

class Remote extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.getRemote();
  }

  render() {
    return <RemoteView data={this.props.data} />;
  }
}

const mapStateToProps = (state: State) => ({
  data: state.remoteReducer.payload
});

const mapDispatchToProps = (dispath: any) => ({
  getRemote: (url: string) => dispath(REMOTEDATA, url)
});

const RemoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Remote);

export default RemoteContainer;

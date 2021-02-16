import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { changeLoding } from "../../redux/actions/Loding";

class Loding extends PureComponent {
  render() {
    return <div>Loding</div>;
  }
}
export default connect((state) => ({ Loding: state.Loding }), { changeLoding })(
  Loding
);

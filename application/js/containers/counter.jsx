import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Counter from "../components/counter.jsx";
import * as CounterActions from "../actions/counter";

export default connect((state) => {
  return {
    counter : state.counter
  };
}, (dispatch) => {
  return bindActionCreators(CounterActions, dispatch);
})(Counter);

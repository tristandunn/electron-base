import React from "react";
import { Link } from "react-router";
import styles from "./counter.css";

class Counter extends React.Component {
  render() {
    const { counter, decrement, increment, incrementAsync, incrementIfOdd } = this.props;

    return (
      <div>
        <div className={styles.back}>
          <Link to="/">Back</Link>
        </div>

        <div className={`counter ${styles.counter}`}>
          {counter}
        </div>

        <div className={styles.group}>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={incrementIfOdd}>Odd</button>
          <button onClick={() => {
            incrementAsync();
          }}>Delay</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter        : React.PropTypes.number.isRequired,
  decrement      : React.PropTypes.func.isRequired,
  increment      : React.PropTypes.func.isRequired,
  incrementAsync : React.PropTypes.func.isRequired,
  incrementIfOdd : React.PropTypes.func.isRequired
};

export default Counter;

import React from "react";
import { Link } from "react-router";
import styles from "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Welcome to Electron Base!</h1>

        <p>
          Check out the <Link to="/counter">counter example</Link>.
        </p>
      </div>
    );
  }
}

export default Home;

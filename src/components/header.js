import React, { Component } from "react";
import "../styles/styles.css";

class Header extends Component {
  state = {
    title: "This is input data",
    keywords: "",
    count: 0,
    active: false,
  };
  inputChange = (event) => {
    const value = event.target.value === "" ? false : true;
    console.log(event.target.value);
    this.setState({ keywords: event.target.value, active: value });
  };
  increment = () => {
    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <>
        <header style={{ background: `${this.state.active ? "red" : "blue"}` }}>
          <div
            className="logo"
            onClick={() => {
              console.log("Logo clicked");
            }}
          >
            #Hash News
          </div>
          <input onChange={this.inputChange}></input>
          <div>{this.state.title}</div>
          <div>{this.state.keywords}</div>
          <div>{this.state.count}</div>
          <button onClick={this.increment}>Increment</button>
        </header>
      </>
    );
  }
}

export default Header;

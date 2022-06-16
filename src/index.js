import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import "./styles/styles.css";
import JSON from "./DB.json";
import NewsList from "./components/news_list";
import Footer from "./components/footer";

class App extends Component {
  state = {
    news: JSON,
    footerText: "I am happy to build",
  };
  render() {
    return (
      <div>
        <Header />
        <NewsList news={this.state.news} />
        <Footer footerText={this.state.footerText} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

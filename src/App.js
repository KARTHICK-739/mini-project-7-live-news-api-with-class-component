import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "top",
    };
  }

  handleCategoryChange = (newCategory) => {
    this.setState({ category: newCategory });
  };

  render() {
    return (
      <div>
        <Navbar onCategoryChange={this.handleCategoryChange} />
        <NewsFeed category={this.state.category} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "top",
    };
  }

  handleClick = (category) => {
    this.setState({ activeCategory: category });
    this.props.onCategoryChange(category);
  };

  render() {
    const categories = [
      "top",
      "technology",
      "sports",
      "business",
      "health",
      "entertainment",
    ];

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-3 shadow">
        <a className="navbar-brand fw-bold fs-4" href="/">
          📰 LiveNews
        </a>

        <div className="d-flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-sm btn-category text-capitalize ${this.state.activeCategory === category ? "active" : "btn-outline-light"}`}
              onClick={() => this.handleClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>
    );
  }
}

export default Navbar;

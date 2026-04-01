import React, { Component } from "react";
import NewsCard from "./NewsCard";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_c2a5c5e2a65441f09c2600ef5389314a&country=in&language=en&category=${this.props.category}`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          articles: data.results || [],
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching news:", error);
        this.setState({ loading: false });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ loading: true, articles: [] });
      fetch(
        `https://newsdata.io/api/1/news?apikey=pub_c2a5c5e2a65441f09c2600ef5389314a&country=in&language=en&category=${this.props.category}`,
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            articles: data.results || [],
            loading: false,
          });
        })
        .catch((error) => {
          console.log("Error fetching news:", error);
          this.setState({ loading: false });
        });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="spinner-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Fetching latest news...</p>
        </div>
      );
    }

    if (this.state.articles.length === 0) {
      return (
        <div className="text-center mt-5">
          <p className="text-muted fs-5">
            No articles found for this category.
          </p>
        </div>
      );
    }

    return (
      <div className="container mt-4">
        <div className="row">
          {this.state.articles.map((article) => (
            <NewsCard key={article.link} article={article} />
          ))}
        </div>
      </div>
    );
  }
}

export default NewsFeed;

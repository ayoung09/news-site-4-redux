import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI.js'

class ArticlePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    ArticlesAPI.fetchArticlesBySection(this.props.match.params.sectionId).then((apiResponseJSON) => {
      this.setState({
        articles: apiResponseJSON
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      ArticlesAPI.fetchArticlesBySection(this.props.match.params.sectionId).then((apiResponseJSON) => {
        this.setState({
          articles: apiResponseJSON
        });
      });
    }
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default ArticlePage;
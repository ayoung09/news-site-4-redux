import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI.js'
import { fetchArticlesBySection } from '../modules/articles.module';

const mapStateToProps = state => ({
  allArticles: state.allArticles
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesBySection: (section) => dispatch(fetchArticlesBySection(section))
});

class SectionPage extends Component {

  componentDidMount() {
    this.props.fetchArticlesBySection(this.props.match.params.sectionId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.sectionId !== this.props.match.params.sectionId) {
      this.props.fetchArticlesBySection(this.props.match.params.sectionId);
    }
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.props.allArticles} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionPage);
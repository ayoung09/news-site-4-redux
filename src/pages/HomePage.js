import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, FormGroup } from 'react-bootstrap';
import ArticleList from '../components/ArticleList/ArticleList.js';
import { fetchAllArticles } from '../modules/articles.module';

const mapStateToProps = state => ({
  allArticles: state.allArticles,
});

const mapDispatchToProps = dispatch => ({
  fetchAllArticles: () => dispatch(fetchAllArticles()),
});

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchAllArticles();
  }

  _handleSearch(event) {
    const textToSearchFor = event.target.value
    //TO DO: We don't want to set state from within the component -- hook this up to the store!
      //ArticlesAPI.searchArticles(textToSearchFor).then((apiResponseJSON) => {
        // this.setState({
        //   newsArticles: apiResponseJSON
        // });
      //});
  }

  render() {
    return (
      <div>
        <FormGroup>
          <FormControl onChange={this._handleSearch.bind(this)} type="text" placeholder="Search By Title" />
        </FormGroup>
        <ArticleList articles={this.props.allArticles} 
          handleTitleClick={(articleID) => this.props.history.push(`/article/${articleID}`) } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

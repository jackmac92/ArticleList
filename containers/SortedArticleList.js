import { connect } from 'react-redux'
import { setSortParameter } from '../actions'
import ArticleIndex from '../components/ArticleIndex'
import _ from 'lodash';

const getSortedArticles = (articles, sortParameter) => {
  switch (sortParameter) {
    case 'TITLE':
      return _.sortBy(articles, (a) => a.title )
    case 'AUTHOR':
      return _.sortBy(articles, (a) => a.profile.first_name )
    case 'WORDS':
      return _.sortBy(articles, (a) => a.words )
    case 'NEW':
      return _.sortBy(articles, (a) => a.publish_at )
    default:
      return articles
  }
}


const mapStateToProps = (state) => {
  return {
    articles: getSortedArticles(state.articles, state.sortParameter)
  }
}

const SortedArticleList = connect(
  mapStateToProps
)(ArticleIndex)

export default SortedArticleList
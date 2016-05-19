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

const getVisibleArticles = (articles, visibilityFilter) => {
  const type = visibilityFilter[0]
  const filter = visibilityFilter[1]
  switch (type) {
    case 'TAG':
      return _.filter(articles, (a) => { return _.find(a.tags, ['id', filter]) })
    case 'AUTHOR':
      return _.filter(articles, (a) => { return a.profile.id == filter})
    default:
      return articles
  }
}


const mapStateToProps = (state) => {
  const visibleArticles = getVisibleArticles(state.articles, state.visibilityFilter)
  return {
    articles: getSortedArticles(visibleArticles, state.sortParameter)
  }
}

const SortedArticleList = connect(
  mapStateToProps
)(ArticleIndex)

export default SortedArticleList
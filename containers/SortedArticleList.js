import { connect } from 'react-redux'
import { setSortParameter } from '../actions'
import ArticleIndex from '../components/ArticleIndex'
import _ from 'lodash';

const getSortedArticles = (articles, sortParameterInfo) => {
  const sortParameter = sortParameterInfo[0]
  const ordering = (sortParameterInfo[1]) ? 'desc' : 'asc'
  switch (sortParameter) {
    case 'TITLE':
      return _.orderBy(articles,['title'],[ordering])
    case 'AUTHOR':
      return _.orderBy(articles,['profile.first_name' ],[ordering])
    case 'WORDS':
      return _.orderBy(articles,['words'],[ordering])
    case 'NEW':
      return _.orderBy(articles,['publish_at'],[ordering])
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
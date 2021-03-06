import { REQUEST_ARTICLES, RECEIVE_ARTICLES, ADD_ARTICLE } from '../actions'
import initialArticlesRaw from '../articles'
const article = (state, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      const article = action.article;
      return {
        id: article.id,
        profile: article.profile,
        publish_at: new Date(article.publish_at),
        words: article.words,
        title: article.title,
        shares: article.shares,
        views: article.views,
        image: article.image,
        url: article.url,
        tags: article.tags
      }
    default:
      return state
  }
}

function prepArticle(a) {
	const tmp = {
		type: ADD_ARTICLE,
		article: a
	}
	return article(undefined, tmp)
}

const initialArticles = initialArticlesRaw.map(prepArticle)

const articles = (state = initialArticles, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [
        ...state,
        article(undefined,action)
      ]
    case RECEIVE_ARTICLES:
      let newArticles = action.articles.map(prepArticle)
      return [
        ...state,
        ...newArticles
      ]
    default:
      return state
  }
}

export default articles
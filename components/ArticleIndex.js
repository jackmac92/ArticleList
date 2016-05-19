import React, { PropTypes } from 'react'
import Article from './Article'
import Header from './Header'
const ArticleIndex = ({ articles }) => (
	<table className="article-index group">
		<Header />
	  <tbody>
		    {articles.map(article =>
		      <Article
		        key={article.id}
		        {...article}
		      />
		    )}
		</tbody>
	</table>
)
ArticleIndex.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		publish_at: PropTypes.object.isRequired,
		shares: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		image:PropTypes.string.isRequired,
		url:PropTypes.string.isRequired,
		words: PropTypes.number.isRequired,
		profile: PropTypes.object.isRequired,
		tags:PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired
		}).isRequired).isRequired
	}).isRequired).isRequired
}

export default ArticleIndex
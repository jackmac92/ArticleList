import React, { PropTypes } from 'react'
import TimeAgo from 'react-timeago'


const Article = ({ profile, title, publish_at, words, image, tags, url }) => (
  <tr className="article-item">
    <td className="article-image">
      <img src={image} />
    </td>
    <td>
      <a href={url}>
        <h3 className="title" >{title}</h3>
      </a>
      <ul className="tag-list">
        {tags.map(t => <li key={t.id} className="tag"> {t.name}</li> )}
      </ul>
    </td>
    <td className="author">
        {`${profile.first_name} ${profile.last_name}`}
    </td>
    <td className="flip-container word-count">
      <div className="flipper">
        <div className="front">
          {words}
        </div>
        <div className="back">
          {readTime(words)}
        </div>
      </div>
    </td>
    <td className="publish-time">
      <TimeAgo date={publish_at} />
    </td>
  </tr>
)

Article.propTypes = {
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
}

export default Article

const readTime = (wordCount) => {
  let result, mins = wordCount/275

  if (mins < 1) {
    result = "<1";
  } else {
    result = Math.round(mins).toString();
  }
  return result;
}
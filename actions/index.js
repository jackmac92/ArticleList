
function requestArticles(last) {
  return {
    type: REQUEST_ARTICLES,
    last
  }
}

function receiveArticles(json) {
  return {
    type: RECEIVE_ARTICLES,
    articles: json,
    receivedAt: Date.now()
  }
}


export const fetchAritcles = (last) => {
  return dispatch => {
    dispatch(requestArticles(last))
    const start = last, end = last + 10
    const endpoint = `http://localhost:3001/articles?_start=${start}&_end=${end}`
    return fetch(endpoint)
      .then(response => response.json())
      .then(json => dispatch(receiveArticles(json)))
  }
}

function shouldFetchArticles(state, last) {
  const articles = state.articles
  if (!articles || articles.length == last) {
    return true
  } else {
    return false
  }
}

export const fetchAritclesIfNeeded = () => {
  return (dispatch, getState) => {
    const currState = getState()
    const last = currState.articles.length
    if (shouldFetchArticles(currState, last)) {
      return dispatch(fetchAritcles(last))
    }
  }
}

export const setSortParameter = (sortParameter) => {
  return {
    type: SET_SORT_PARAMETER,
    sortParameter
  }
}


export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const SET_SORT_PARAMETER = 'SET_SORT_PARAMETER'

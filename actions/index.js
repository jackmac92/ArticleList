
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

export const setVisibilityFilter = (visibilityFilter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    visibilityFilter
  }
}

export const fetchNextAritcles = () => {
  return (dispatch, getState) => {
    const last = getState().articles.length - 10
    return dispatch(fetchAritcles(last))
  }
}

export const setSortParameter = (sortParameter) => {
  return {
    type: SET_SORT_PARAMETER,
    sortParameter
  }
}


export const getArticles = () => {
  return fetchNextAritcles()
}


export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const SET_SORT_PARAMETER = 'SET_SORT_PARAMETER'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

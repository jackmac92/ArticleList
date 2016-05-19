import React from 'react'
import SortLink from '../containers/SortLink'

const Header = () => (
    <thead>
      <tr>
        <th colSpan="2">
          <SortLink parameter="TITLE">
            Unpublished Articles
          </SortLink>
        </th>
        <th>
          <SortLink parameter="AUTHOR">
            Author
          </SortLink>
        </th>
        <th>
          <SortLink parameter="WORDS">
            Words
          </SortLink>
        </th>
        <th>
          <SortLink parameter="NEW">
            Submitted
          </SortLink>
        </th>
      </tr>
    </thead>
)

export default Header

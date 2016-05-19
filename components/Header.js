import React from 'react'
import SortLink from '../containers/SortLink'

const Header = () => (
    <thead>
      <tr>
        <th colSpan="2">
          <SortLink filter="TITLE">
            Unpublished Articles
          </SortLink>
        </th>
        <th>
          <SortLink filter="AUTHOR">
            Author
          </SortLink>
        </th>
        <th>
          <SortLink filter="WORDS">
            Words
          </SortLink>
        </th>
        <th>
          <SortLink filter="NEW">
            Submitted
          </SortLink>
        </th>
      </tr>
    </thead>
)

export default Header

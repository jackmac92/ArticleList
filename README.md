# Mic Frontend Dev Test
React/ Redux

## How to run
`npm start` kicks off the development server, along with a json-server to serve additional articles (json-server will run on port 3001). Then navigate to http://localhost:3000 to check out the project

## Features
* Sortable by Title, Author, Word Count, and Submission Time by clicking on the relevant header. Clicking on the active sort header will toggle the sort between ascending and descending.
* Filter viewed articles by tag or author, by clicking on a tag or author
* Hover on Word Count to reveal Read Time
* Filter and Sort State are persisted via localstorage

## Todos
* Currently the webpack size is large, although much of this comes from development tools, there are a number of optimizations that I would want to include for production.
* Configure separate production and development weback configs
* setInterval to check for newest Submissions
* Persistent app state should be handled with middleware
* Change state of "Load More" button once all articles fetched
* Add CSS Breakpoints for mobile optimization
* Lazy load images
import gql from 'graphql-tag'

export const getBookList = gql`
  query getBookListQuery {
    books {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
        }
      }
    }
  }
`

export const getBookDetail = gql`
  query getBookDetailQuery($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author
    }
  }
`

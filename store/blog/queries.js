import gql from 'graphql-tag'

export const getBlogList = gql`
  query getBlogListQuery {
    blogs {
      id
      title
      subTitle
      content
    }
  }
`

export const getBlogDetail = gql`
  query getBlogDetailQuery($id: ID!) {
    book(id: $id) {
      id
      title
      subTitle
      content
    }
  }
`

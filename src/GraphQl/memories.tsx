import gql from 'graphql-tag';

export const GET_POSTS = gql`
{
  posts {
    _id
    title
    img {
      data
      contentType
    }
  }
}
`
import { gql } from 'apollo-boost'
import { DocumentNode } from 'apollo-boost'

const queryNewStories: DocumentNode = gql`
  query($limit: Int, $offset: Int) {
    hn {
      newStories(limit: $limit, offset: $offset) {
        id
        title
        url
        time
        score
        by {
          id
        },
        type
      }
    }
  }
`

export {
  queryNewStories
}
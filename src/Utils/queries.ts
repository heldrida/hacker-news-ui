import { gql } from 'apollo-boost'
import { DocumentNode } from 'apollo-boost'

const queryNewStories: DocumentNode = gql`
  query {
    hn {
      newStories(limit: 32, offset: 0) {
        id
        title
        url
        time
        score
        by {
          id
        }
      }
    }
  }
`

export {
  queryNewStories
}
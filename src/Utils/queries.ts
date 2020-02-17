import { gql } from 'apollo-boost'
import { DocumentNode } from 'apollo-boost'

const queryNewStories: DocumentNode = gql`
  query {
    hn {
      newStories(limit: 32, offset: 0) {
        id
        title
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
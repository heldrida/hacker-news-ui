import React from 'react'
import { ApolloError } from 'apollo-boost'
import {
  ErrorContainer,
  ErrorContent
} from './styled'

// TODO: created a proper error component
const Error = ({error}: {error?: ApolloError}) => <ErrorContainer>
  <h1>Try again later, please!</h1>
  <ErrorContent>{`Oops! The service seems to be down at the moment, my apologies for any inconvenience.`}</ErrorContent>
  <ErrorContent>{`The error that was encountered is ${error}`}</ErrorContent>
</ErrorContainer>

export default Error

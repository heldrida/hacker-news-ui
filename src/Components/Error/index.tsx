import React from 'react'
import { ApolloError } from 'apollo-boost'

// TODO: created a proper error component
const Error = ({error}: {error: ApolloError}) => <p>{`Oops! ${error}`}</p>

export default Error

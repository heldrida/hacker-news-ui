const themeColors = {
  default: {
    orange: '#ff6600', // #ffa600
    vividTangelo: '#F26722',
    platinum: '#E8E9EB',
    gainsBoro: '#E0DFD5',
    onyx: '#313638',
    sandyBrown: '#F09D51'
  }
}

export default {
  application: {
    name: "nsPunkbitHackerNewsReader",
    initialNumberOfStories: 30
  },
  // Obs: If you are not running the API through the Docker container documented
  // in the README.md, use the alternative proxy's provided
  graphqlEndpoint: process.env.NODE_ENV === 'development' ? "https://graphql-hacker-news-api.herokuapp.com/graphql" : "https://www.graphqlhub.com/graphql",
  themeColors
}
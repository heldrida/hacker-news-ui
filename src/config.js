const themeColors = {
  default: {
    vividTangelo: '#F26722',
    platinum: '#E8E9EB',
    gainsBoro: '#E0DFD5',
    onyx: '#313638',
    sandyBrown: '#F09D51'
  }
}

export default {
  application: {
    name: "nsPunkbitHackerNewsReader"
  },
  // Obs: If you are not running the API through the Docker container documented
  // in the README.md, use the alternative proxy's provided
  graphqlEndpoint: process.env.NODE_ENV === 'development' ? "https://graphql-hacker-news-api.herokuapp.com/playground" : "https://www.graphqlhub.com/playground",
  themeColors
}
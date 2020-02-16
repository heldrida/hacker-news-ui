
Hacker News Reader
==================

A Hacker News reader that consumes data from the Hacker News Rest API (https://github.com/HackerNews/API);
The goal of the project is to see Reactjs in action and freely use other stack that help achieve my personal
goals. There's also focus in the UX and the code quality.

The project will use a GraphQl wrapper provided by the GraphQl Hub community to speed up development time and
it's also justified by the simple fact that GraphQl is a better technology. This also fullfils one of the
requirements stated as `provide a beautiful user experience despite the Hacker News API limitations.`

You can find a playground here:

## Visit https://www.graphqlhub.com/playground or https://graphql-hacker-news-api.herokuapp.com/playground

* the herokuapp might go down at anytime, as I may need to delete it

A repository for the project is available publicy at https://github.com/clayallsopp/graphqlhub 


The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so
the following common scripts are available,

To start:

### `yarn start`

Run tests:

### `yarn test`

To Build:

### `yarn build`

To serve the Production/Built version:

## `npx serve -s build`

For development:

## yarn watch

This uses a watcher that checks for any changes in the .test.tsx files and runs the tests.
Change it accordingly. Although, [TODO] a pre-commit hook will be added later on to run tests.


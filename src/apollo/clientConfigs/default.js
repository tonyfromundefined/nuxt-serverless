/* eslint import/no-extraneous-dependencies: 0, arrow-body-style: 0, no-unused-vars: 0 */

import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default (context) => {
  const httpLink = new HttpLink({ uri: 'https://localhost:8080/graphql' });

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    // This function is called before every request.
    // Update ctx.req.session and window.__NUXT__.state.session
    // To point to wherever you store your token
    // const token = process.server ? ctx.req.session : window.__NUXT__.state.session;

    // operation.setContext({ headers: { authorization: '' } });
    return forward(operation);
  });
  const link = middlewareLink.concat(httpLink);
  return {
    link,
    cache: new InMemoryCache(),
  };
};

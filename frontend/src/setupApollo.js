import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { tabsVar, isLoggedInVar } from "store";

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;

export const useApollo = () => {
  return new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            tabs: {
              read() {
                return tabsVar();
              },
            },
            isLoggedIn: {
              read() {
                return isLoggedInVar();
              },
            },
          },
        },
      },
    }),
    typeDefs,
  });
};

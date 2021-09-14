import { ApolloClient, InMemoryCache } from "@apollo/client";
import { tabsVar } from "store";

export const useApollo = () => {
  return new ApolloClient({
    url: "/graphql",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            tabs: {
              read() {
                return tabsVar();
              },
            },
          },
        },
      },
    }),
  });
};

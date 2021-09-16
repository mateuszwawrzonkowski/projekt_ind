import { ApolloProvider, InMemoryCache } from "@apollo/client";
import { useApollo } from "setupApollo";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout />
      </Router>
    </ApolloProvider>
  );
}

export default App;

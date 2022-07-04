import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import Posts from "./Posts";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-10">WP GraphQL / Apollo Demo</h1>
        <Posts />
      </div>
    </ApolloProvider>
  );
}

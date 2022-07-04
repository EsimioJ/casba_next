import { useQuery, gql } from "@apollo/client";
import React from "react";

const Posts = () => {
  // Hey! useQuery() runs when this component renders.
  // If you need to control when the query runs, checkout out the useLazyQuery() hook
  // https://www.apollographql.com/docs/react/api/react/hooks/#uselazyquery
  const { data, loading, error } = useQuery(QUERY_POSTS);

  if (error) return <p>Error! {error.message}</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <ul className="list-none">
      {data.posts.edges.map(({ node }) => (
        <li key={node.id}>
          <div
            className="font-semibold"
            dangerouslySetInnerHTML={{ __html: node.title }}
          />
        </li>
      ))}
    </ul>
  );
};

const QUERY_POSTS = gql`
  query GetPosts {
    posts(where: { categoryName: "itinerari" }) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export default Posts;

import { graphql } from "babel-plugin-relay/macro";
import { SearchResultsFragment$key } from "./__generated__/SearchResultsFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { Suspense } from "react";

type Props = {
  search: SearchResultsFragment$key;
};

const SearchResultsFragment = graphql`
  fragment SearchResultsFragment on Query
  @refetchable(queryName: "SearchResultsPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    query: { type: "String!" }
    first: { type: "Int", defaultValue: 3 }
  ) {
    search(query: $query, type: REPOSITORY, first: $first, after: $cursor)
      @connection(key: "SearchResults_search") {
      edges {
        node {
          ... on Repository {
            name
            description
            url
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

function SearchResults({ search }: Props) {
  const { data } = usePaginationFragment(SearchResultsFragment, search);
  return (
    <div>
      <Suspense>
        {data.search.edges?.map((edge: any) => {
          const node = edge.node;
          return (
            <div key={node.url}>
              <h2>{node.name}</h2>
              <p>{node.description}</p>
              <p>Stars: {node.stargazers.totalCount}</p>
            </div>
          );
        })}
      </Suspense>
    </div>
  );
}

export default SearchResults;

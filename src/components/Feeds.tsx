import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { FeedsQuery as FeedsQueryType } from "./__generated__/FeedsQuery.graphql";
import SearchResults from "./SearchResults";

type Props = {
  query: string;
};

const FeedsQuery = graphql`
  query FeedsQuery($query: String!, $cursor: String) {
    ...SearchResultsFragment @arguments(query: $query, cursor: $cursor)
  }
`;

function Feeds({ query }: Props) {
  const data = useLazyLoadQuery<FeedsQueryType>(FeedsQuery, {
    query,
  });
  return (
    <div>
      <SearchResults search={data} />
    </div>
  );
}

export default Feeds;

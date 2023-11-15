import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { FeedsQuery as FeedsQueryType } from './__generated__/FeedsQuery.graphql';
import SearchResults from './SearchResults';

const FeedsQuery = graphql`
  query FeedsQuery($cursor: String) {
    ...SearchResultsFragment @arguments(cursor: $cursor)
  }
`;

function Feeds() {
  const data = useLazyLoadQuery<FeedsQueryType>(FeedsQuery, {});

  return <SearchResults search={data} />;
}

export default Feeds;

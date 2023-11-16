import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { FeedsQuery as FeedsQueryType } from './__generated__/FeedsQuery.graphql';
import SearchResults from './SearchResults';
import FeedsHeader from './FeedsHeader';
import { useState } from 'react';

type Props = {
  fetchKey: number;
};

const FeedsQuery = graphql`
  query FeedsQuery($cursor: String) {
    ...SearchResultsFragment @arguments(cursor: $cursor)
  }
`;

function Feeds({ fetchKey }: Props) {
  const data = useLazyLoadQuery<FeedsQueryType>(
    FeedsQuery,
    {},
    {
      fetchKey: fetchKey
    }
  );
  const [searchText, setSearchText] = useState('');

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="mx-auto flex max-w-md flex-col items-start">
      <FeedsHeader searchText={searchText} handleTextChange={onSearchInputChange} />
      <SearchResults search={data} query={searchText} />
    </div>
  );
}

export default Feeds;

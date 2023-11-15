import { graphql } from 'babel-plugin-relay/macro';
import { SearchResultsFragment$key } from './__generated__/SearchResultsFragment.graphql';
import { usePaginationFragment } from 'react-relay';
import Repository from './Repository';
import { useState, useTransition } from 'react';
import { cn } from '../lib/utils';
import FeedsHeader from './FeedsHeader';

type Props = {
  search: SearchResultsFragment$key;
};

const SearchResultsFragment = graphql`
  fragment SearchResultsFragment on Query
  @refetchable(queryName: "SearchResultsPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    query: { type: "String", defaultValue: "" }
    first: { type: "Int", defaultValue: 3 }
  ) {
    search(query: $query, type: REPOSITORY, first: $first, after: $cursor) @connection(key: "SearchResults_search") {
      edges {
        node {
          ...RepositoryFragment
        }
      }
    }
  }
`;

function SearchResults({ search }: Props) {
  const { data, loadNext, hasNext, refetch } = usePaginationFragment(SearchResultsFragment, search);
  const [isPending, startTransition] = useTransition();
  const [searchText, setSearchText] = useState('');

  const onLoadMore = () => {
    loadNext(3);
  };

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    startTransition(() => {
      refetch({
        query: event.target.value
      });
    });
  };

  return (
    <div className="mx-auto flex max-w-md flex-col items-start">
      <FeedsHeader searchText={searchText} handleTextChange={onSearchInputChange} isPending={isPending} />
      <main className="flex flex-col">
        <ul className={cn('mb-3 flex flex-col gap-y-6')}>
          {data.search.edges?.map((edge, index) => <Repository key={index} repository={edge?.node!} />)}
        </ul>
        {hasNext && (
          <button className="mr-2 self-end rounded-md border-4 border-orange-100 px-2 py-1" onClick={onLoadMore}>
            더 보기
          </button>
        )}
      </main>
    </div>
  );
}

export default SearchResults;

import { graphql } from 'babel-plugin-relay/macro';
import { SearchResultsFragment$key } from './__generated__/SearchResultsFragment.graphql';
import { usePaginationFragment } from 'react-relay';
import Repository from './Repository';
import { useEffect, useTransition } from 'react';
import { cn } from '../lib/utils';
import LoadingSpinner from './LoadingSpinner';

type Props = {
  search: SearchResultsFragment$key;
  query: string;
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

function SearchResults({ search, query }: Props) {
  const { data, loadNext, hasNext, refetch, isLoadingNext } = usePaginationFragment(SearchResultsFragment, search);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      refetch({
        query: query
      });
    });
  }, [query, refetch]);

  const onLoadMore = () => {
    loadNext(3);
  };

  return (
    <main className="flex flex-col">
      <ul className={cn('mb-3 flex flex-col gap-y-6')}>
        {data.search.edges?.map((edge, index) => (
          <Repository key={index} repository={edge?.node!} isPending={isPending} />
        ))}
      </ul>
      {hasNext && (
        <button
          disabled={isLoadingNext}
          className="mr-2 inline-flex items-center gap-x-1 self-end rounded-md border-4 border-orange-100 px-4 py-1"
          onClick={onLoadMore}
        >
          더 보기
          {isLoadingNext && <LoadingSpinner />}
        </button>
      )}
    </main>
  );
}

export default SearchResults;

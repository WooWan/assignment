import { graphql } from 'babel-plugin-relay/macro';
import { StarIcon } from 'lucide-react';
import { useFragment, useMutation } from 'react-relay';
import { RepositoryFragment$key } from './__generated__/RepositoryFragment.graphql';
import type { RepositoryStarMutation as RepositoryStarMutationType } from './__generated__/RepositoryStarMutation.graphql';
import { cn } from '../lib/utils';

type Props = {
  repository: RepositoryFragment$key;
  isPending: boolean;
};

const RepositoryFragment = graphql`
  fragment RepositoryFragment on Repository {
    id
    name
    description
    viewerHasStarred
    stargazers {
      totalCount
    }
  }
`;

const RepositoryStarMutation = graphql`
  mutation RepositoryStarMutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        viewerHasStarred
        stargazers {
          totalCount
        }
      }
    }
  }
`;

const RepositoryUnstarMutation = graphql`
  mutation RepositoryUnstarMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        viewerHasStarred
        stargazers {
          totalCount
        }
      }
    }
  }
`;

function Repository({ repository, isPending }: Props) {
  const data = useFragment(RepositoryFragment, repository);
  const [commitMutation] = useMutation<RepositoryStarMutationType>(RepositoryStarMutation);
  const [unStarMutation] = useMutation(RepositoryUnstarMutation);
  const hasStarred = data.viewerHasStarred;
  const count = data.stargazers.totalCount;
  const varriables = {
    input: {
      starrableId: data.id
    }
  };
  const starrable = {
    id: data.id,
    viewerHasStarred: !data.viewerHasStarred,
    __typename: 'Repository',
    stargazers: {
      totalCount: hasStarred ? count - 1 : count + 1
    }
  };

  const starRepsitory = () => {
    commitMutation({
      variables: varriables,
      optimisticResponse: {
        addStar: {
          starrable: starrable
        }
      }
    });
  };

  const unStarRepository = () => {
    unStarMutation({
      variables: varriables,
      optimisticResponse: {
        removeStar: {
          starrable: starrable
        }
      }
    });
  };

  return (
    <li
      className={cn('min-h-[100px] min-w-[320px] rounded-md bg-orange-100/[0.5] p-2', {
        'text-gray-500': isPending
      })}
    >
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <button
        onClick={() => {
          hasStarred ? unStarRepository() : starRepsitory();
        }}
        className="flex items-center gap-x-1 rounded-lg border-[1px] border-black px-2 py-0.5 hover:bg-gray-300"
      >
        {data.viewerHasStarred ? '⭐️' : <StarIcon className="h-4 w-4" color="gray" />}
        <p>{data.stargazers.totalCount}</p>
      </button>
    </li>
  );
}

export default Repository;

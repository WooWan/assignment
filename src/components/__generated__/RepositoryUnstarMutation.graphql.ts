/**
 * @generated SignedSource<<9ca099437098eb688eab69b009dcf8c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveStarInput = {
  clientMutationId?: string | null | undefined;
  starrableId: string;
};
export type RepositoryUnstarMutation$variables = {
  input: RemoveStarInput;
};
export type RepositoryUnstarMutation$data = {
  readonly removeStar: {
    readonly starrable: {
      readonly stargazers: {
        readonly totalCount: number;
      };
      readonly viewerHasStarred: boolean;
    } | null | undefined;
  } | null | undefined;
};
export type RepositoryUnstarMutation = {
  response: RepositoryUnstarMutation$data;
  variables: RepositoryUnstarMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerHasStarred",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "StargazerConnection",
  "kind": "LinkedField",
  "name": "stargazers",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryUnstarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepositoryUnstarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ffc27201541e87704a45fc62b764b27d",
    "id": null,
    "metadata": {},
    "name": "RepositoryUnstarMutation",
    "operationKind": "mutation",
    "text": "mutation RepositoryUnstarMutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    starrable {\n      __typename\n      viewerHasStarred\n      stargazers {\n        totalCount\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "feacd57bc4729ca7f6ae4d068aa64dbc";

export default node;

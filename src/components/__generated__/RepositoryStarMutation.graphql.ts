/**
 * @generated SignedSource<<9819f612bb9041e165d2ceedcbdbff1b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddStarInput = {
  clientMutationId?: string | null | undefined;
  starrableId: string;
};
export type RepositoryStarMutation$variables = {
  input: AddStarInput;
};
export type RepositoryStarMutation$data = {
  readonly addStar: {
    readonly starrable: {
      readonly stargazers: {
        readonly totalCount: number;
      };
      readonly viewerHasStarred: boolean;
    } | null | undefined;
  } | null | undefined;
};
export type RepositoryStarMutation = {
  response: RepositoryStarMutation$data;
  variables: RepositoryStarMutation$variables;
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
    "name": "RepositoryStarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
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
    "name": "RepositoryStarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
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
    "cacheID": "17c993e3c7cbb8d9a11ec8905d79ae8b",
    "id": null,
    "metadata": {},
    "name": "RepositoryStarMutation",
    "operationKind": "mutation",
    "text": "mutation RepositoryStarMutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    starrable {\n      __typename\n      viewerHasStarred\n      stargazers {\n        totalCount\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d7932c7b0337474950b87013ac8d6159";

export default node;

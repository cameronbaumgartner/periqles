/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddTodoInput = {|
  text: string,
  userId: string,
  clientMutationId?: ?string,
|};
export type app_AddTodoMutationVariables = {|
  input: AddTodoInput
|};
export type app_AddTodoMutationResponse = {|
  +addTodo: ?{|
    +todoEdge: {|
      +__typename: string,
      +cursor: string,
      +node: ?{|
        +complete: boolean,
        +id: string,
        +text: string,
      |},
    |},
    +user: {|
      +id: string,
      +totalCount: number,
    |},
  |}
|};
export type app_AddTodoMutation = {|
  variables: app_AddTodoMutationVariables,
  response: app_AddTodoMutationResponse,
|};
*/


/*
mutation app_AddTodoMutation(
  $input: AddTodoInput!
) {
  addTodo(input: $input) {
    todoEdge {
      __typename
      cursor
      node {
        complete
        id
        text
      }
    }
    user {
      id
      totalCount
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddTodoPayload",
    "kind": "LinkedField",
    "name": "addTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoEdge",
        "kind": "LinkedField",
        "name": "todoEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "complete",
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "text",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "app_AddTodoMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "app_AddTodoMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ee031540ab3aaec04c47a25e62095ecd",
    "id": null,
    "metadata": {},
    "name": "app_AddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation app_AddTodoMutation(\n  $input: AddTodoInput!\n) {\n  addTodo(input: $input) {\n    todoEdge {\n      __typename\n      cursor\n      node {\n        complete\n        id\n        text\n      }\n    }\n    user {\n      id\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4ef8eb222c098b1d455cf19e15c6fef2';

module.exports = node;
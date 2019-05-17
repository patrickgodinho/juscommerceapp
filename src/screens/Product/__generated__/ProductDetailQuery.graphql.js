/**
 * @flow
 * @relayHash ef4517e6fa44df57ffd83eee00ea405f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductDetailQueryVariables = {|
  id: string
|};
export type ProductDetailQueryResponse = {|
  +product: ?{|
    +id: ?string,
    +name: ?string,
    +image: ?string,
    +price: ?number,
    +description: ?string,
  |}
|};
export type ProductDetailQuery = {|
  variables: ProductDetailQueryVariables,
  response: ProductDetailQueryResponse,
|};
*/


/*
query ProductDetailQuery(
  $id: ID!
) {
  product(id: $id) {
    id
    name
    image
    price
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "product",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ProductType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "image",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "price",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProductDetailQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProductDetailQuery",
    "id": null,
    "text": "query ProductDetailQuery(\n  $id: ID!\n) {\n  product(id: $id) {\n    id\n    name\n    image\n    price\n    description\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b8ba86e06d2588143714684afcd1ab57';
module.exports = node;

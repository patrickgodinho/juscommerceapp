/**
 * @flow
 * @relayHash 40af6940040a01299581112751ec6dec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductItem_product$ref = any;
export type ProductListQueryVariables = {||};
export type ProductListQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: ProductItem_product$ref,
  |}>
|};
export type ProductListQuery = {|
  variables: ProductListQueryVariables,
  response: ProductListQueryResponse,
|};
*/


/*
query ProductListQuery {
  products {
    id
    ...ProductItem_product
  }
}

fragment ProductItem_product on ProductType {
  id
  name
  image
  price
  description
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProductListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ProductItem_product",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProductListQuery",
    "id": null,
    "text": "query ProductListQuery {\n  products {\n    id\n    ...ProductItem_product\n  }\n}\n\nfragment ProductItem_product on ProductType {\n  id\n  name\n  image\n  price\n  description\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '19cdbb39a63a4b2f69b6cc6f226eb57a';
module.exports = node;

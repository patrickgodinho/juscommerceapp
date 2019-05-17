/**
 * @flow
 * @relayHash 71138e415394d04740e5ac3fae1e8d0d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Product_product$ref = any;
export type ProductListQueryVariables = {||};
export type ProductListQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: Product_product$ref,
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
    ...Product_product
  }
}

fragment Product_product on ProductType {
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
            "name": "Product_product",
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
    "text": "query ProductListQuery {\n  products {\n    id\n    ...Product_product\n  }\n}\n\nfragment Product_product on ProductType {\n  id\n  name\n  image\n  price\n  description\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a001a682de406376b7285ea4c51aeef5';
module.exports = node;

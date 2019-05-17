/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Product_product$ref: FragmentReference;
declare export opaque type Product_product$fragmentType: Product_product$ref;
export type Product_product = {|
  +id: ?string,
  +name: ?string,
  +image: ?string,
  +price: ?number,
  +description: ?string,
  +$refType: Product_product$ref,
|};
export type Product_product$data = Product_product;
export type Product_product$key = {
  +$data?: Product_product$data,
  +$fragmentRefs: Product_product$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Product_product",
  "type": "ProductType",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '6c40fdbb0f7695362c7f20bf60079c8a';
module.exports = node;

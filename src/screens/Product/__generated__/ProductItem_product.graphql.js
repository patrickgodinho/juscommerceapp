/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductItem_product$ref: FragmentReference;
declare export opaque type ProductItem_product$fragmentType: ProductItem_product$ref;
export type ProductItem_product = {|
  +id: ?string,
  +name: ?string,
  +image: ?string,
  +price: ?number,
  +description: ?string,
  +$refType: ProductItem_product$ref,
|};
export type ProductItem_product$data = ProductItem_product;
export type ProductItem_product$key = {
  +$data?: ProductItem_product$data,
  +$fragmentRefs: ProductItem_product$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProductItem_product",
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
(node/*: any*/).hash = '3c4b90f4cff0302a1ad620c07116f85f';
module.exports = node;

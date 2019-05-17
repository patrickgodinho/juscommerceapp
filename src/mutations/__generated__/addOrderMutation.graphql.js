/**
 * @flow
 * @relayHash ae69f9876a58354af3034a238add4c9c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrderInput = {|
  items?: ?$ReadOnlyArray<?OrderItemInputType>,
  card?: ?number,
|};
export type OrderItemInputType = {|
  product?: ?ProductInputType,
  amount?: ?number,
|};
export type ProductInputType = {|
  id?: ?string,
  name?: ?string,
  color?: ?string,
  image?: ?string,
  price?: ?number,
  amount?: ?number,
  description?: ?string,
|};
export type addOrderMutationVariables = {|
  input: OrderInput
|};
export type addOrderMutationResponse = {|
  +addOrder: ?{|
    +result: ?string
  |}
|};
export type addOrderMutation = {|
  variables: addOrderMutationVariables,
  response: addOrderMutationResponse,
|};
*/


/*
mutation addOrderMutation(
  $input: OrderInput!
) {
  addOrder(order: $input) {
    result
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "OrderInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addOrder",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "order",
        "variableName": "input"
      }
    ],
    "concreteType": "OrderType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "result",
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
    "name": "addOrderMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "addOrderMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "addOrderMutation",
    "id": null,
    "text": "mutation addOrderMutation(\n  $input: OrderInput!\n) {\n  addOrder(order: $input) {\n    result\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f17820b9b2f5d8494affe7431d88244';
module.exports = node;

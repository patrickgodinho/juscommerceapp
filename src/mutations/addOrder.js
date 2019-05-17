import { Alert } from 'react-native';
import { commitMutation, graphql } from 'react-relay';
import environment from '../environment';
import NavigationService from '../NavigationService';

const mutation = graphql`
  mutation addOrderMutation($input: OrderInput!) {
    addOrder(order: $input) {
      result
    }
  }
`;

export const addOrder = ({ items, card }) => {
  const variables = {
    input: {
      items,
      card
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.addOrder.result === 'FALHA') {
        Alert.alert(
          'Cartão inválido',
          'Troque o cartão',
          [
            {
              text: 'ok'
            }
          ],
          { cancelable: true }
        );
      } else {
        NavigationService.reset();
      }
    },
    onError: err => console.error(err)
  });
};

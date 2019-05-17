import { commitMutation, graphql } from 'react-relay';
import environment from '../environment';
import NavigationService from '../navigator/NavigationService';
import Alert from '../components/Alert';

const mutation = graphql`
  mutation addOrderMutation($input: OrderInput!) {
    addOrder(order: $input) {
      result
    }
  }
`;

export const addOrder = ({ items, card, clear }) => {
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
        Alert({ message: 'Selecione outro cartão', title: 'Cartão inválido' });
      } else {
        Alert({ message: 'Pedido adicionado com sucesso', title: 'Sucesso!' });
        NavigationService.reset();
        clear();
      }
    },
    onError: err =>
      Alert({ message: 'Erro ao salvar o pedido', title: 'Sucesso!' })
  });
};

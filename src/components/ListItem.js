import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';
import { Card } from 'react-native-paper';

const CardItem = styled.TouchableOpacity`
  padding-vertical: 8;
`;

const Wrapper = styled.View`
  flex-direction: row;
`;

const DetailsView = styled.View`
  flex: 2;
  flex-direction: column;
  padding-top: 6;
`;

const TitleView = styled.View`
  flex-direction: column;
`;

const ItemTitle = styled.Text`
  flex: 4;
  font-size: 18;
  padding-left: 12;
  color: #202020;
`;

const ItemSubTitle = styled.Text`
  flex: 4;
  font-size: 12;
  padding-left: 12;
  color: #444444;
`;

const DetailsFooterView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

const PriceText = styled.Text`
  flex: 1;
  color: #ff685f;
  font-size: 20;
  font-weight: 500;
  padding-left: 12;
  padding-bottom: 12;
`;

const ImageView = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const ItemImage = styled(Image)`
  width: 120;
  height: 100;
  border-radius: 5;
`;

export default ({ item, onPress }) => (
  <CardItem onPress={onPress}>
    <Card>
      <Wrapper>
        <ImageView>
          <ItemImage source={{ uri: item.image }} />
        </ImageView>
        <DetailsView>
          <TitleView>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemSubTitle>{item.description}</ItemSubTitle>
          </TitleView>
          <DetailsFooterView>
            <PriceText>{`R$ ${item.price}`}</PriceText>
          </DetailsFooterView>
        </DetailsView>
      </Wrapper>
    </Card>
  </CardItem>
);

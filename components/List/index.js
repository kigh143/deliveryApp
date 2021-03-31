import React from 'react';
import {View, Text} from 'react-native';
import DeliveryCard from '../DeliveryCard/index';
import styles from './style';
const List = ({deliveries}) => {
  return (
    <View style={styles.listContainer}>
      {deliveries.map(delivery => (
        <Text key={delivery.id}>{delivery.id}</Text>
      ))}
    </View>
  );
};

export default List;

import React from 'react';
import {View, FlatList} from 'react-native';
import DeliveryCard from '../DeliveryCard/index';
import styles from './style';
const List = ({deliveries, fetchMorePost}) => {
  return (
    <FlatList
      data={deliveries}
      renderItem={({item}) => <DeliveryCard key={item.id} delivery={item} />}
      keyExtractor={item => item.id}
      // onEndReached={() => fetchMorePost()}
    />
  );
};

export default List;

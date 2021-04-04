import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {DeliveriesContext} from '../../context';
import DeliveryCard from '../DeliveryCard/index';
import styles from './style';
import {getMoreDeliveries} from '../../apiMock/index';

const List = () => {
  const {deliveries, addNewDeliveries, deliveriesClone} = useContext(
    DeliveriesContext,
  );

  const fetchMorePost = () => {
    const index = deliveriesClone.length;
    const new_deliveries = getMoreDeliveries(index);
    addNewDeliveries(new_deliveries);
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={deliveries}
        renderItem={({item}) => <DeliveryCard key={item.id} delivery={item} />}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0}
        onEndReached={() => fetchMorePost()}
      />
    </View>
  );
};

export default List;

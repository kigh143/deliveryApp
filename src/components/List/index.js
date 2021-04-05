import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {DeliveriesContext} from '../../context';
import DeliveryCard from '../DeliveryCard/index';
import styles from './style';
import {getMoreDeliveries} from '../../apiMock/index';

const List = () => {
  const {deliveries, addNewDeliveries, deliveriesClone, filter} = useContext(
    DeliveriesContext,
  );

  const fetchMorePost = () => {
    const new_deliveries = [
      ...deliveriesClone,
      ...getMoreDeliveries(deliveriesClone.length),
    ];
    const filtered = new_deliveries.filter(val =>
      filter === 'delivered'
        ? val.deliveryStatus === 'delivered'
        : val.deliveryStatus !== 'delivered',
    );
    addNewDeliveries({more: new_deliveries, filtered});
  };

  return (
    <View style={{...styles.listContainer}}>
      <FlatList
        data={deliveries}
        renderItem={({item}) => (
          <DeliveryCard key={item.name} delivery={item} />
        )}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0}
        onEndReached={() => fetchMorePost()}
      />
    </View>
  );
};

export default List;

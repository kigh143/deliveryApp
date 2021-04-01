import React from 'react';
import {View, FlatList} from 'react-native';
import DeliveryCard from '../DeliveryCard/index';
import styles from './style';
const List = ({deliveries, fetchMorePost}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={deliveries}
        renderItem={({item}) => <DeliveryCard key={item.id} delivery={item} />}
        keyExtractor={item => item.id}
        onEndReachedThreshold={4}
        onEndReached={() => fetchMorePost()}
      />
    </View>
  );
};

export default List;

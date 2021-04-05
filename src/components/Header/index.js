import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DeliveriesContext} from '../../context';
import styles from './style';

const Header = () => {
  const {
    filter,
    layout,
    changeFilter,
    changeLayout,
    delivered,
    setFilteredDeliveries,
    deliveriesClone,
  } = useContext(DeliveriesContext);

  const onchangeFilterTapped = () => {
    changeFilter();
    const filteredDeliveries = deliveriesClone.filter(value =>
      filter === 'delivered'
        ? value.deliveryStatus !== 'delivered'
        : value.deliveryStatus === 'delivered',
    );
    setFilteredDeliveries(filteredDeliveries);
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.layoutButton}
        onPress={() => changeLayout()}>
        <Text
          style={layout === 'map' ? styles.activeText : styles.inActiveText}>
          Map View
        </Text>
        <Text
          style={layout === 'list' ? styles.activeText : styles.inActiveText}>
          List
        </Text>
      </TouchableOpacity>
      <View style={styles.tracker}>
        <Text style={styles.counter}>
          {delivered.delivered} of {delivered.total}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => onchangeFilterTapped()}>
        <Text
          style={
            filter === 'delivering' ? styles.activeText : styles.inActiveText
          }>
          Delivering
        </Text>
        <Text
          style={
            filter === 'delivered' ? styles.activeText : styles.inActiveText
          }>
          Delivered
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

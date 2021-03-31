import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Header = ({
  activeLayout,
  activeFilter,
  changeFilter,
  changeLayout,
  delivered,
  total,
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.layoutButton}
        onPress={() => changeLayout()}>
        <Text
          style={
            activeLayout === 'map' ? styles.activeText : styles.inActiveText
          }>
          Map View
        </Text>
        <Text
          style={
            activeLayout === 'list' ? styles.activeText : styles.inActiveText
          }>
          List
        </Text>
      </TouchableOpacity>
      <View style={styles.tracker}>
        <Text style={styles.counter}>
          {delivered} of {total}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => changeFilter()}>
        <Text
          style={
            activeFilter === 'delivering'
              ? styles.activeText
              : styles.inActiveText
          }>
          Delivering
        </Text>
        <Text
          style={
            activeFilter === 'delivered'
              ? styles.activeText
              : styles.inActiveText
          }>
          Delivered
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

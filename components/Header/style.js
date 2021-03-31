import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    elevation: 2,
  },

  activeText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '800',
  },

  inActiveText: {
    fontSize: 10,
    color: '#aaa',
    fontWeight: '400',
  },

  filterButton: {
    textAlign: 'right',
  },
  layoutButton: {
    textAlign: 'left',
  },
});

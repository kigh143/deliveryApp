import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '8%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    elevation: 2,
    marginBottom: 4,
  },

  activeText: {
    fontSize: 18,
    color: '#28b17b',
    fontWeight: 'bold',
  },

  inActiveText: {
    fontSize: 10,
    color: '#aaa',
    fontWeight: '400',
  },

  filterButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  layoutButton: {
    textAlign: 'left',
    flex: 1,
  },
  tracker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delivered: {
    color: '#28b17b',
    fontWeight: 'bold',
    fontSize: 20,
  },
  total: {
    color: '#000',
    fontWeight: 'bold',
  },
});

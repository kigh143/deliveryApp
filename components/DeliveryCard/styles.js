import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    elevation: 2,
    marginVertical: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 20,
    color: '#555',
    fontWeight: 'bold',
  },
  address: {
    fontSize: 15,
    marginTop: 5,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
    marginTop: 5,
    paddingTop: 5,
  },
  button: {
    backgroundColor: '#28b17b',
    padding: 10,
    borderRadius: 4,
    elevation: 2,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  statusContainer: {
    flex: 2,
  },
  buttons: {flex: 1},

  delivering: {
    color: 'orange',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  pending: {
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  delivered: {
    color: '#28b17b',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  bold: {
    fontWeight: 'bold',
    margin: 2,
  },
  statusTitle: {
    fontSize: 15,
    marginBottom: 5,
    color: '#aaa',
  },
});

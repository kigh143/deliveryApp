import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mapViewContainer: {
    height: '92%',
  },
  map: {
    height: '100%',
  },

  mapModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 15,
  },

  mapModalHeader: {
    padding: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  closeButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgb(255,255,255)',
    position: 'absolute',
    top: -25,
    zIndex: 20,
    right: 6,
  },

  closeButtonText: {
    color: '#222',
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  pin: {
    height: 30,
    width: 30,
  },
});

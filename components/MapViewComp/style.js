import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mapViewContainer: {
    height: '92%',
    // ...StyleSheet.absoluteFillObject,
  },
  map: {
    height: '100%',
    // ...StyleSheet.absoluteFillObject,
  },
  mapModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    backgroundColor: 'rgba(200,200,200,.1)',
  },
  mapModalHeader: {
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  closeButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 25,
  },

  closeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});

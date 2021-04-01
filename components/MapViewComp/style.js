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
    backgroundColor: 'rgba(200,200,200,.4)',
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
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,.8)',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    elevation: 2,
  },

  closeButtonText: {
    color: '#aaa',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});

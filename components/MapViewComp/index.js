import React from 'react';
import {View, Text} from 'react-native';
import DeliveryCard from '../DeliveryCard/index';
import styles from './style';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
const MapViewComp = () => {
  return (
    <View style={styles.mapViewContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};

export default MapViewComp;

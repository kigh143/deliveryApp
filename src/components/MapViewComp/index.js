import React, {useRef, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import DeliveryCard from '../DeliveryCard/index';
import styles from './style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {DeliveriesContext} from '../../context';

const MapViewComp = () => {
  const mapView = useRef();
  const {deliveries, setActiveDeliveryOnMap, activeDelivery} = useContext(
    DeliveriesContext,
  );

  return (
    <View style={styles.mapViewContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        ref={mapView}
        onMapReady={() => {
          mapView.current.fitToSuppliedMarkers(
            deliveries.map(delivery => delivery),
          );
        }}>
        {deliveries.map(delivery => (
          <Marker
            onPress={() => setActiveDeliveryOnMap(delivery)}
            key={delivery.id}
            coordinate={{
              latitude: delivery.lat,
              longitude: delivery.lng,
            }}>
            <Image
              source={require('../../images/pin.png')}
              style={styles.pin}
              resizeMode="contain"
            />
          </Marker>
        ))}
      </MapView>
      {activeDelivery !== null ? (
        <View style={styles.mapModal}>
          <View style={styles.mapModalHeader}>
            <TouchableOpacity
              onPress={() => setActiveDeliveryOnMap(null)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          <DeliveryCard delivery={activeDelivery} />
        </View>
      ) : null}
    </View>
  );
};

export default MapViewComp;

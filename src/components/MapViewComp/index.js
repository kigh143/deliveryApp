import React, {useRef, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import DeliveryCard from '../DeliveryCard/index';
import styles from './style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {DeliveriesContext} from '../../context';
import {getMoreDeliveries} from '../../apiMock/index';

const MapViewComp = () => {
  const mapView = useRef();
  const {
    deliveries,
    setActiveDeliveryOnMap,
    activeDelivery,
    addNewDeliveries,
    deliveriesClone,
    filter,
  } = useContext(DeliveriesContext);

  const fetchMore = () => {
    const new_deliveries = [
      ...deliveriesClone,
      ...getMoreDeliveries(deliveriesClone.length),
    ];
    const filtered = new_deliveries.filter(val =>
      filter === 'delivered'
        ? val.deliveryStatus === 'delivered'
        : val.deliveryStatus !== 'delivered',
    );
    addNewDeliveries({more: new_deliveries, filtered});
  };

  return (
    <View style={styles.mapViewContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        ref={mapView}
        onPanDrag={e => fetchMore()}
        zoomTapEnabled={true}
        showsBuildings={true}
        showsMyLocationButton={true}
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
      {activeDelivery !== null &&
      deliveries.find(val => val.id === activeDelivery.id) ? (
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

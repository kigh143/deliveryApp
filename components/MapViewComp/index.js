import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DeliveryCard from '../DeliveryCard/index';
import styles from './style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
const MapViewComp = ({deliveries, changeDeliveryStatus}) => {
  const mapView = useRef();
  const [activeDelivery, setActiveDelivery] = useState(null);

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
            onPress={() => setActiveDelivery(delivery)}
            key={delivery.id}
            coordinate={{
              latitude: delivery.lat,
              longitude: delivery.lng,
            }}
          />
        ))}
      </MapView>
      {activeDelivery !== null ? (
        <View style={styles.mapModal}>
          <View style={styles.mapModalHeader}>
            <TouchableOpacity
              onPress={() => setActiveDelivery(null)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          <DeliveryCard
            delivery={activeDelivery}
            changeDeliveryStatus={() => alert(90)}
          />
        </View>
      ) : null}
    </View>
  );
};

export default MapViewComp;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const DeliveryCard = ({delivery, changeDeliveryStatus}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <Text style={styles.name}>{delivery.name}</Text>
        <Text style={styles.address}>{delivery.address}</Text>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Delivery status</Text>
          <Text>
            {delivery.deliveryStatus ? (
              <>
                {delivery.deliveryStatus === 'delivering' ? (
                  <Text style={styles.delivering}>Delivering</Text>
                ) : (
                  <Text style={styles.delivered}>Delivered</Text>
                )}
              </>
            ) : (
              <Text style={styles.pending}>Pending</Text>
            )}
          </Text>
        </View>
        <View style={styles.buttons}>
          {delivery.deliveryStatus == undefined && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => changeDeliveryStatus('delivering')}>
              <Text style={styles.buttonText}>Delivering</Text>
            </TouchableOpacity>
          )}

          {delivery.deliveryStatus == 'delivering' && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => changeDeliveryStatus('delivered')}>
              <Text style={styles.buttonText}>Delivered</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default DeliveryCard;

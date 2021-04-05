import React, {useEffect, useContext} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Header from './components/Header/index';
import List from './components/List/index';
import MapViewComp from './components/MapViewComp/index';
import {DeliveriesContext} from './context';
import {getFirstTenDeliveries, getTotal} from './apiMock/index';

const Delivery = () => {
  const {layout, updateDeliveredTotal, fetchDeliveries} = useContext(
    DeliveriesContext,
  );

  useEffect(() => {
    fetchDeliveries(getFirstTenDeliveries());
    const totals = getTotal();
    updateDeliveredTotal(totals);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header />
      {layout === 'map' ? <MapViewComp /> : <List />}
    </SafeAreaView>
  );
};

export default Delivery;

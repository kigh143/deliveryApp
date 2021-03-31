import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Header from './components/Header/index';
import DeliveryCard from './components/DeliveryCard/index';
import List from './components/List/index';
import MapViewComp from './components/MapViewComp/index';
import {getFirstTenDeliveries} from './apiMock/index';

interface Delivery {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  deliveryStatus?: 'delivering' | 'delivered';
}

const App = () => {
  const [layout, setLayout] = useState('map');
  const [filter, setFilter] = useState('delivered');
  const [deliveries, setDeliveries] = useState([]);

  const changeLayout = () => {
    layout === 'map' ? setLayout('list') : setLayout('map');
  };

  const changeFilter = () => {
    filter === 'delivered' ? setFilter('delivering') : setFilter('delivered');
  };

  useEffect(() => {
    const fistTenDeliveries = getFirstTenDeliveries();
    setDeliveries(fistTenDeliveries);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header
        activeFilter={filter}
        activeLayout={layout}
        changeFilter={changeFilter}
        changeLayout={changeLayout}
        delivered={30}
        total={50}
      />
      <View>
        {layout === 'map' ? (
          <MapViewComp deliveries={deliveries} />
        ) : (
          <List deliveries={deliveries} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;

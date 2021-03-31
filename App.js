import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Header from './components/Header/index';
import DeliveryCard from './components/DeliveryCard/index';
import List from './components/List/index';
import MapViewComp from './components/MapViewComp/index';

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

  const changeLayout = () => {
    layout === 'map' ? setLayout('list') : setLayout('map');
  };

  const changeFilter = () => {
    filter === 'delivered' ? setFilter('delivering') : setFilter('delivered');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header
        activeFilter={filter}
        activeLayout={layout}
        changeFilter={changeFilter}
        changeLayout={changeLayout}
      />
      <View>{layout === 'map' ? <MapViewComp /> : <List />}</View>
    </SafeAreaView>
  );
};

export default App;

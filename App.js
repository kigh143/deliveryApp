import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Header from './components/Header/index';
import DeliveryCard from './components/DeliveryCard/index';
import List from './components/List/index';
import MapViewComp from './components/MapViewComp/index';
import {getFirstTenDeliveries, getTotal} from './apiMock/index';

const App = () => {
  const [layout, setLayout] = useState('map');
  const [filter, setFilter] = useState('delivered');
  const [deliveries, setDeliveries] = useState([]);

  const changeLayout = () => {
    setLayout(prevState => {
      if (prevState === 'map') {
        return 'list';
      } else {
        return 'map';
      }
    });
  };

  const changeFilter = () => {
    setFilter(prevState => {
      if (prevState === 'delivered') {
        setDeliveries(
          deliveries.filter(val => val.deliveryStatus === 'delivering'),
        );
        return 'delivering';
      } else {
        setDeliveries(
          deliveries.filter(val => val.deliveryStatus === 'delivered'),
        );
        return 'delivered';
      }
    });
  };

  const fetchMorePost = () => {
    alert(89);
  };

  const changeDeliveryStatus = status => {};

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
        total={getTotal()}
      />

      {layout === 'map' ? (
        <MapViewComp deliveries={deliveries} />
      ) : (
        <List deliveries={deliveries} fetchMorePost={fetchMorePost} />
      )}
    </SafeAreaView>
  );
};

export default App;

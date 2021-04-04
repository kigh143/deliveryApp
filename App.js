import React from 'react';
import DeliveriesProvider from './src/context/index';
import Delivery from './src/Delivery';
const App = () => {
  return (
    <DeliveriesProvider>
      <Delivery />
    </DeliveriesProvider>
  );
};
export default App;

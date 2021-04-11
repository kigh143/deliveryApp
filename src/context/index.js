import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
import {getFirstTenDeliveries, getTotal} from '../apiMock/index';

const initialState = {
  layout: 'map',
  filter: 'delivered',
  deliveries: [],
  deliveriesClone: [],
  delivered: {total: 0, delivered: 0},
  activeDelivery: null,
};

export const DeliveriesContext = createContext(initialState);

const DeliveriesProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const changeLayout = () => dispatch({type: 'CHANGE_LAYOUT'});

  const changeFilter = data => {
    dispatch({type: 'CHANGE_FILTER'});
  };

  const addNewDeliveries = deliveries => {
    dispatch({type: 'SET_MORE_DELIVERIES', payload: deliveries});
  };

  const changeDeliveryStatus = (status, id) => {
    dispatch({type: 'UPDATE_DELIVERIES_STATUS', payload: {status, id}});
    if (status === 'delivered') {
      updateDelivered();
      removeDeliveryWithChangedItem(id);
    } else {
    }
  };

  const updateDeliveredTotal = delivered => {
    dispatch({type: 'SET_TOTAL_DELIVERED', payload: delivered});
  };

  const setFilteredDeliveries = deliveries => {
    dispatch({type: 'SET_FILTERED_DELIVERIES', payload: deliveries});
  };

  const fetchDeliveries = deliveries => {
    dispatch({type: 'FETCH_DELIVERIES', payload: deliveries});
  };

  const updateDelivered = () => {
    dispatch({type: 'UPDATE_TOTAL_DELIVERED'});
  };

  const removeDeliveryWithChangedItem = id => {
    dispatch({type: 'REMOVE_DELIVERY_FROM_ARRAY', payload: id});
  };

  const setActiveDeliveryOnMap = delivery => {
    console.log(delivery);
    dispatch({type: 'SET_ACTIVE_DELIVERY', payload: delivery});
  };

  return (
    <DeliveriesContext.Provider
      value={{
        ...state,
        changeLayout,
        changeFilter,
        addNewDeliveries,
        changeDeliveryStatus,
        updateDeliveredTotal,
        setFilteredDeliveries,
        fetchDeliveries,
        setActiveDeliveryOnMap,
      }}>
      {children}
    </DeliveriesContext.Provider>
  );
};
export default DeliveriesProvider;

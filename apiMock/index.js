import deliveries from '../model/data.json';

const length = deliveries.length;

export const getFirstTenDeliveries = () => {
  return deliveries.slice(0, 10);
};

export const getMoreDeliveries = index => {
  return deliveries.slice(index, 10);
};

export const markAsDelivered = () => {};

export const markAsDelivering = () => {};

export const formatAddress = address => {
  return address.trim().split(',');
};

export const getTotal = () => {
  return length;
};

import deliveries from '../model/data.json';

const length = deliveries.length;

export const getFirstTenDeliveries = () => {
  return deliveries.slice(0, 10);
};

export const getMoreDeliveries = index => {
  if (index < length) {
    const start = index;
    const end = index + 10;
    return deliveries.slice(start, end);
  } else {
    alert('list done');
  }
};

export const getTotal = () => {
  const delivered = deliveries.filter(
    val => val.deliveryStatus === 'delivered',
  );
  return {total: length, delivered: delivered.length};
};

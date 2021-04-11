import deliveries from '../model/data.json';

const length = deliveries.length;

export const getFirstTenDeliveries = () => {
  if (length > 10) {
    return deliveries.slice(0, 10);
  }

  return deliveries;
};

export const getMoreDeliveries = index => {
  if (index < length) {
    return deliveries.slice(index, index + 10);
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

export const filterDeliveries = (data, filter_info) => {
  return data.filter(value => {
    return filter_info === 'delivered'
      ? value.deliveryStatus === 'delivering'
      : value.deliveryStatus === 'delivered';
  });
};

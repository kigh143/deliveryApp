import deliveries from '../model/data.json';
let clone = [];
let filtered = [];

const length = deliveries.length;
// let filter = 'delivered';

export const getFirstTenDeliveries = () => {
  clone = deliveries.slice(0, 10);
  console.log(clone);
  console.log('))))))))))))))))))))))))))))))))))))))');
  filter(clone, 'delivered');
};

export const getMoreDeliveries = (index, status) => {
  // if (index < length) {
  //   const start = index;
  //   const end = index + 10;
  clone = [...clone, ...deliveries.slice(clone.length, clone.length + 10)];
  console.log(clone);
  console.log('))))))))))))))))))))))))))))))))))))))');
  filter(clone, status);

  // } else {
  //   alert('list done');
  // }
};

export const getTotal = () => {
  const delivered = deliveries.filter(
    val => val.deliveryStatus === 'delivered',
  );
  return {total: length, delivered: delivered.length};
};

export const filter = (arry, filet = '') => {
  filtered = arry.filter(ele => {
    return filet === 'delivered'
      ? ele.deliveryStatus === 'delivered'
      : ele.deliveryStatus != 'delivered';
  });
  console.log(filtered);
  console.log('))))))))))))))))))))))))))))))))))))))');
};

export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_DELIVERY_FROM_ARRAY':
      return {
        ...state,
        deliveries: state.deliveries.filter(val => val.id !== action.payload),
      };
    case 'SET_TOTAL_DELIVERED':
      return {
        ...state,
        delivered: action.payload,
      };
    case 'UPDATE_TOTAL_DELIVERED':
      return {
        ...state,
        delivered: {
          ...state.delivered,
          delivered: state.delivered.delivered + 1,
        },
      };
    case 'SET_ACTIVE_DELIVERY':
      return {
        ...state,
        activeDelivery: action.payload,
      };
    case 'FETCH_DELIVERIES':
      return {
        ...state,
        deliveries: action.payload.filter(val =>
          state.filter === 'delivered'
            ? val.deliveryStatus === 'delivered'
            : val.deliveryStatus !== 'delivered',
        ),
        deliveriesClone: action.payload,
      };
    case 'SET_FILTERED_DELIVERIES':
      return {
        ...state,
        deliveries: action.payload,
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: state.filter === 'delivered' ? 'delivering' : 'delivered',
      };
    case 'CHANGE_LAYOUT':
      return {
        ...state,
        layout: state.layout === 'map' ? 'list' : 'map',
      };
    case 'SET_MORE_DELIVERIES':
      return {
        ...state,
        deliveriesClone: action.payload.more,
        deliveries: action.payload.filtered,
      };
    case 'UPDATE_DELIVERIES_STATUS':
      const updatedState = state.deliveries.map(value => {
        if (value.id === action.payload.id) {
          return {...value, deliveryStatus: action.payload.status};
        } else {
          return value;
        }
      });
      return {
        ...state,
        deliveries: [...updatedState],
      };
    default:
      return state;
  }
};

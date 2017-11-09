const basket = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        {
          code: action.code,
          qty: 1,
        },
      ];
    case 'REMOVE_PRODUCT':
      return state.filter(item => item.code !== action.code);
    case 'UPDATE_PRODUCT':
      return state.map((item) => {
        if (item.code === action.code) {
          return Object.assign({}, item, { qty: action.qty });
        }
        return item;
      });
    default:
      return state;
  }
};

export default basket;

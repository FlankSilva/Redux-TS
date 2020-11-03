import { Reducer } from 'redux';
import producer from 'immer';
import { ActionTypes, ICartState } from './types';

// Define initial state
const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCarrIndex = draft.items.findIndex(
          item => item.product.id === product.id,
        );

        if (productInCarrIndex >= 0) {
          draft.items[productInCarrIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;

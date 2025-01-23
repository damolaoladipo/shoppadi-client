import { IProductState } from '../../utils/interface.util';
import { TProductAction } from '../../utils/type.util';


export const productReducer = (state: IProductState, action: TProductAction): IProductState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, loading: false, error: null };

    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload };

    case 'SET_LOADING':
      return { ...state, loading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };

    default:
      return state
  }
};


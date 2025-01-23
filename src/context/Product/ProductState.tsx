import { FC, useReducer } from 'react';
import { ProductContext } from './ProductContext';
import { IProductProvider, IProductState } from '../../utils/interface.util';
import { productReducer } from './ProductReducer';


const initialState: IProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const ProductProvider: FC<IProductProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};


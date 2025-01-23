import { FC, useReducer } from 'react';
import { ICartProvider, ICartState} from '../../utils/interface.util';
import { CartContext } from './CartContext';
import { cartReducer } from './CartReducer';


export const initialState: ICartState = {
    items: [],
    totalAmount: 0,
    totalItems: 0,
  };
  

export const CartProvider: FC<ICartProvider> = ({ children }) => {
    const [ state, dispatch ] = useReducer(cartReducer, initialState);
  
    return (
      <CartContext.Provider value={{ ...state, dispatch }}>
        {children}
      </CartContext.Provider>
    );
  };
  
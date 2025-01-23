import { FC, useReducer } from "react";
import { IOrderItemState, IOrderProvider } from "../../utils/interface.util";
import { OrderitemContext } from "./OrderitemContext";
import { orderItemReducer } from "./OrderitemReducer";


const initialState: IOrderItemState = {
    orderItems: [],
    loading: false,
    error: null,

  };

  
export const OrderItemProvider: FC<IOrderProvider> = ({ children }) => {
    const [ state, dispatch ] = useReducer(orderItemReducer, initialState);
  
    return (
      <OrderitemContext.Provider value={{ ...state, dispatch }}>
        {children}
      </OrderitemContext.Provider>
    );
  };
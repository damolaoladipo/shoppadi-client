import { FC, useReducer } from "react";
import { IOrderProvider, IOrderState } from "../../utils/interface.util";
import { orderReducer } from "./OrderReducer";
import { OrderContext } from "./OrderContext";


const initialState: IOrderState = {
  orders: [],
  loading: false,
  error: null,
};

export const OrderProvider: FC<IOrderProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};


import { FC, useReducer } from "react";
import { IOrderProvider, IOrderState } from "../../utils/interface.util";
import { orderReducer } from "./OrderReducer";
import { ProductContext } from "../Product/ProductContext";


const initialState: IOrderState = {
  orders: [],
  loading: false,
  error: null,
};

export const ProductProvider: FC<IOrderProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};


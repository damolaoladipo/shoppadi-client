import { IOrderState } from "../../utils/interface.util";
import { TOrderAction } from "../../utils/type.util";



export const orderReducer = (
    state: IOrderState,
    action: TOrderAction
  ): IOrderState => {
    switch (action.type) {
      case 'ADD_ORDER':
        return { ...state, orders: [...state.orders, action.payload] };
  
      case 'CANCEL_ORDER':
        return {
          ...state,
          orders: state.orders.map(order =>
            order.id === action.payload ? { ...order, status: 'CANCELLED' } : order
          ),
        };
  
      case 'UPDATE_ORDER_STATUS':
        return {
          ...state,
          orders: state.orders.map(order =>
            order.id === action.payload.id ? { ...order, status: action.payload.status } : order
          ),
        };
  
      default:
        return state
    }
  };
  
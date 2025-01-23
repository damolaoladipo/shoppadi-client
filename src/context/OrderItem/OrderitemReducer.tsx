
import { IOrderItemState } from "../../utils/interface.util";
import { TOrderItemAction } from "../../utils/type.util";

export const orderItemReducer = (
    state: IOrderItemState,
    action: TOrderItemAction
  ): IOrderItemState => {
    switch (action.type) {
      case 'ADD_ORDER_ITEM':
        return { ...state, orderItems: [...state.orderItems, action.payload] };
  
      case 'REMOVE_ORDER_ITEM':
        return {
          ...state,
          orderItems: state.orderItems.filter(item => item.id !== action.payload),
        };
  
      case 'UPDATE_ORDER_ITEM':
        return {
          ...state,
          orderItems: state.orderItems.map(item =>
            item.id === action.payload.id ? { ...item, ...action.payload } : item
          ),
        };
  
      default:
        return state
    }
}
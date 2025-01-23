import { ICartState } from "../../utils/interface.util";
import { TCartAction } from "../../utils/type.util";
import { initialState } from "./CartState";


export const cartReducer = (state: ICartState, action: TCartAction): ICartState => {
    switch (action.type) {
      case 'ADD_TO_CART': {
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
        let updatedItems;
  
        if (existingItemIndex !== -1) {
          const updatedItem = {
            ...state.items[existingItemIndex],
            quantity: state.items[existingItemIndex].quantity + action.payload.quantity,
          };
          updatedItems = [...state.items];
          updatedItems[existingItemIndex] = updatedItem;
        } else {
          updatedItems = [...state.items, action.payload];
        }
  
        const updatedTotalAmount = updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
  
        return {
          ...state,
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      }
  
      case 'REMOVE_FROM_CART': {
        const updatedItems = state.items.filter(item => item.id !== action.payload);
        const updatedTotalAmount = updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
  
        return {
          ...state,
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      }
  
      case 'UPDATE_QUANTITY': {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
        const updatedTotalAmount = updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
  
        return {
          ...state,
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      }
  
      case 'CLEAR_CART':
        return initialState
  
      default:
        return state
    }
  };
  
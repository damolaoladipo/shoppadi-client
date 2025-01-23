import { ICartItem, IOrder, IOrderItem, IProduct } from "./freshcart.util";

export type TAuthAction =
  | { type: "LOGIN"; payload: Record<string, any> }
  | { type: "LOGOUT" }
  | { type: "SET_USER"; payload: Record<string, any> };

export type TProductAction =
  | { type: 'SET_PRODUCTS'; payload: IProduct[] }
  | { type: 'SET_SELECTED_PRODUCT'; payload: IProduct | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };


export type TCartAction =
  | { type: 'ADD_TO_CART'; payload: ICartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

export type TOrderAction =
  | { type: 'ADD_ORDER'; payload: IOrder }
  | { type: 'CANCEL_ORDER'; payload: string }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { id: string; status: 'PENDING' | 'COMPLETED' | 'CANCELLED' } };

export type TOrderItemAction =
  | { type: 'ADD_ORDER_ITEM'; payload: IOrderItem }
  | { type: 'REMOVE_ORDER_ITEM'; payload: string }
  | { type: 'UPDATE_ORDER_ITEM'; payload: IOrderItem };
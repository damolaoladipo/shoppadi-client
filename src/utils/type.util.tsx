import { OrderStatus, ShipmentStatus, TransactionStatus } from "./enums.utils";
import { IAddress, ICartItem, IOrder, IOrderItem, IProduct, IShipment, ITransaction } from "./freshcart.util";

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
  | { type: 'UPDATE_ORDER_STATUS'; payload: { id: string; status: OrderStatus } };

export type TOrderItemAction =
  | { type: 'ADD_ORDER_ITEM'; payload: IOrderItem }
  | { type: 'REMOVE_ORDER_ITEM'; payload: string }
  | { type: 'UPDATE_ORDER_ITEM'; payload: IOrderItem };

export type TTransactionAction =
  | { type: 'ADD_TRANSACTION'; payload: ITransaction }
  | { type: 'UPDATE_TRANSACTION_STATUS'; payload: { id: string; status: TransactionStatus } };


export type TShipmentAction =
  | { type: 'ADD_SHIPMENT'; payload: IShipment }
  | { type: 'UPDATE_SHIPMENT_STATUS'; payload: { id: string; status: ShipmentStatus } };


export type TAddressAction =
  | { type: 'ADD_ADDRESS'; payload: IAddress }
  | { type: 'UPDATE_ADDRESS'; payload: IAddress }
  | { type: 'REMOVE_ADDRESS'; payload: string };
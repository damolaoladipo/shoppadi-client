import { IProduct } from "./freshcart.util";

export type TAuthAction =
  | { type: "LOGIN"; payload: Record<string, any> }
  | { type: "LOGOUT" }
  | { type: "SET_USER"; payload: Record<string, any> };

export type TProductAction =
  | { type: 'SET_PRODUCTS'; payload: IProduct[] }
  | { type: 'SET_SELECTED_PRODUCT'; payload: IProduct | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

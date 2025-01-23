import { IAddressState } from "../../utils/interface.util";
import { TAddressAction } from "../../utils/type.util";


export const addressReducer = (
    state: IAddressState,
    action: TAddressAction
  ): IAddressState => {
    switch (action.type) {
      case 'ADD_ADDRESS':
        return { ...state, addresses: [...state.addresses, action.payload] };
  
      case 'UPDATE_ADDRESS':
        return {
          ...state,
          addresses: state.addresses.map(address =>
            address.id === action.payload.id ? { ...address, ...action.payload } : address
          ),
        };
  
      case 'REMOVE_ADDRESS':
        return {
          ...state,
          addresses: state.addresses.filter(address => address.id !== action.payload),
        };
  
      default:
        return state
    }
  };
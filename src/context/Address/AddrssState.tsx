import { FC, useReducer } from "react";
import { IAddressState, IProvider } from "../../utils/interface.util";
import { addressReducer } from "./AddressReducer";
import { AddressContext } from "./AddressContext";


const initialState: IAddressState = {
    addresses: [],
  };

export const AddressProvider: FC<IProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(addressReducer, initialState);
  
    return (
      <AddressContext.Provider value={{ state, dispatch }}>
        {children}
      </AddressContext.Provider>
    );
  };
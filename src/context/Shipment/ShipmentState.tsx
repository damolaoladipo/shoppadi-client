import { FC, useReducer } from "react";
import { IProvider, IShipmentState } from "../../utils/interface.util";
import { ShipmentContext } from "./ShipmentContext";
import { shipmentReducer } from "./ShipmentReducer";


const initialState: IShipmentState = {
    shipments: [],
  };

export const ShipmentProvider: FC<IProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(shipmentReducer, initialState);
  
    return (
      <ShipmentContext.Provider value={{ state, dispatch }}>
        {children}
      </ShipmentContext.Provider>
    );
  };
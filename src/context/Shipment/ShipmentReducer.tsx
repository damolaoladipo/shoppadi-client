import { IShipmentState } from "../../utils/interface.util";
import { TShipmentAction } from "../../utils/type.util";


export const shipmentReducer = (
    state: IShipmentState,
    action: TShipmentAction
  ): IShipmentState => {
    switch (action.type) {
      case 'ADD_SHIPMENT':
        return { ...state, shipments: [...state.shipments, action.payload] };
  
      case 'UPDATE_SHIPMENT_STATUS':
        return {
          ...state,
          shipments: state.shipments.map(shipment =>
            shipment.id === action.payload.id
              ? { ...shipment, status: action.payload.status }
              : shipment
          ),
        };
  
      default:
        return state
    }
  };
  
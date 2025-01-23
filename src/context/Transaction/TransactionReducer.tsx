import { ITransactionState } from "../../utils/interface.util";
import { TTransactionAction } from "../../utils/type.util";


export const transactionReducer = (
    state: ITransactionState,
    action: TTransactionAction
  ): ITransactionState => {
    switch (action.type) {
      case 'ADD_TRANSACTION':
        return { ...state, transactions: [...state.transactions, action.payload] };
  
      case 'UPDATE_TRANSACTION_STATUS':
        return {
          ...state,
          transactions: state.transactions.map(transaction =>
            transaction.id === action.payload.id
              ? { ...transaction, status: action.payload.status }
              : transaction
          ),
        };
  
      default:
        return state
    }
  };
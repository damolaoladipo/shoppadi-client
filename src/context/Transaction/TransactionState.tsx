import { FC, useReducer } from "react";
import { ITransactionProvider, ITransactionState } from "../../utils/interface.util";
import { TransactionContext } from "./TransactionContext";
import { transactionReducer } from "./TransactionReducer";



const initialState: ITransactionState = {
    transactions: [],
    loading: false,
    error: null
  };


export const TransactionProvider: FC<ITransactionProvider> = ({ children }) => {
    const [ state, dispatch ] = useReducer(transactionReducer, initialState);
  
    return (
      <TransactionContext.Provider value={{ state, dispatch }}>
        {children}
      </TransactionContext.Provider>
    );
  };
import { FC, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { IAuthProvider, IAuthState } from "../../utils/interface.util";

const initialState: IAuthState = {user: null}

export const AuthContextProvider: FC<IAuthProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

import { IAuthState, TAuthAction } from "../../utils/interface.util";


export const authReducer = (
  state: IAuthState,
  action: TAuthAction
): IAuthState => {
  switch (action.type) {
    case "LOGIN":
    case "SET_USER":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

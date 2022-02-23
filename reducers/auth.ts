export type AuthStateType = {
  accessToken?: string;
  user?: User;
};

export const AuthInitState: AuthStateType = {};

export type AuthAction =
  | { type: "AUTH_SUCCESS"; payload: AuthStateType }
  | { type: "AUTH_RESET"; payload?: never };

const AuthReducer = (state: AuthStateType, action: AuthAction) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return action.payload;

    case "AUTH_RESET":
      return AuthInitState;

    default:
      return state;
  }
};

export default AuthReducer;

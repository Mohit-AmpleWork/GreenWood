import { LOGOUT_USER, SET_USER } from "./action";

export interface UserState {
  user: any | null;
}

const initialState: UserState = {
  user: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;

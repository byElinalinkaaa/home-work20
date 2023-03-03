import { combineReducers, createStore } from "redux";
import { todoSlice } from "./todo/todoSlice";
import { authSlice } from "./auth/authSlice";
const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  auth: authSlice.reducer,
});

export const store = createStore(rootReducer);

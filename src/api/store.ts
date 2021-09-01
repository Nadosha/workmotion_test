import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import employees from "./reducers/employees";

export const store = configureStore({
  reducer: {
    employees: employees,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

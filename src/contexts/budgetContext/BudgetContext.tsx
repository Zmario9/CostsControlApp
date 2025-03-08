import { useReducer, createContext } from "react";
import { budgetReducer, initialState } from "../../reducers/budget-reducer";
import { BudgetContextProps, BudgetProviderProps } from "./BudgetContextTypes";

//Tambien puede ser "{} as BudgetContextProps"
export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({children}:BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

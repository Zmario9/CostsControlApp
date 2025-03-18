import { useReducer, createContext } from "react";
import { budgetReducer, initialState } from "../../reducers/budget-reducer";
import { BudgetContextProps, BudgetProviderProps } from "./BudgetContextTypes";
import { useMemo } from "react";

//Tambien puede ser "{} as BudgetContextProps"
export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses]
  );
  const remainingBudget = state.budget - totalExpenses;
  return (
    <BudgetContext.Provider value={{ state, dispatch, totalExpenses, remainingBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};

import { createContext } from "react";
import { BudgetContextProps } from "./BudgetContextTypes";

export const BudgetContext = createContext<BudgetContextProps>(null!);
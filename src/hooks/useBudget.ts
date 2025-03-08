import { useContext } from "react";
import { BudgetContext } from "../contexts/budgetContext/BudgetContext";
export const useBudget = () =>{
    const context = useContext(BudgetContext);
    return context
}
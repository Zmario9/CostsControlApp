import { useContext } from "react";
import { BudgetContext } from "../contexts/budgetContext/BudgetContext";
export const useBudget = () =>{
    const context = useContext(BudgetContext);
    //Si no tenemos un contexto puedo en un provider en app, lanzamos error
    if(!context) throw new Error('useBudget must be used within a BudgetProvider');
    return context
}
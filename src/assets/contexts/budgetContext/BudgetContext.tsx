import React from "react";
import { useReducer } from "react";
import { budgetReducer, initialState } from "../../reducers/budget-reducer";
import { BudgetContext } from "./BudgetContext";

//Tambien puede ser "{} as BudgetContextProps"


export const BudgetProvider = () => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);
    return (
        <BudgetContext.Provider value={{state, dispatch}}>
        </BudgetContext.Provider>
    );
}
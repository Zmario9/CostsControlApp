import { Dispatch, ReactNode } from "react";
import { BudgetActions, BudgetState } from "../../reducers/budget-reducer";

export type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

export type BudgetProviderProps = {
    children: ReactNode
}
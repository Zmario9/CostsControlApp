import { DraftExpense, Expense } from "../types";
import { v4 as uuidv4 } from "uuid";

export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'close-modal' } |
    { type: 'add-expense', payload: { expense: DraftExpense } } |
    { type: 'remove-expense', payload: { id: Expense['id'] } } |
    { type: 'get-expense-by-id', payload: { id: Expense['id'] } } |
    { type: 'update-expense', payload: { expense: Expense } }

export type BudgetState = {
    budget: number,
    modal: boolean,
    expenses: Expense[]
    editingId: Expense['id']
}


export const initialState: BudgetState = {
    budget: 0,
    modal: false,
    expenses: [],
    editingId: ''
}

const createExpense = (draftExpense: DraftExpense): Expense => {
    return {
        //toma lo que esta en el formulario, y agrega el id
        ...draftExpense,
        id: uuidv4()
    }
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
) => {
    if (action.type === 'add-budget') {
        return { ...state, budget: action.payload.budget }
    }
    if (action.type === 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }
    if (action.type === 'close-modal') {
        return {
            ...state,
            modal: false
        }
    }
    if (action.type === 'add-expense') {
        const expense = createExpense(action.payload.expense);
        return {
            ...state,
            expenses: [...state.expenses, expense],
            //Usar si quieres que el modal se cierre luego de agregar algo
            //modal: false
        }
    }
    if (action.type === 'remove-expense') {
        return {
            ...state,
            expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
        }
    }
    if (action.type === 'get-expense-by-id') {
        return {
            ...state,
            editingId: action.payload.id,
            modal: true
        }
    }
    if (action.type === 'update-expense') {
        return {
            ...state,
            expenses: state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense)
        }
    }
    
    return state
}
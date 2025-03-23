import { useMemo } from "react";
import { useBudget } from "../../hooks/useBudget";
import ExpenseDetail from "../ExpenseDetail/ExpenseDetail";
export default function ExpensesList() {
  const { state } = useBudget();
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
        {isEmpty ? 
       <p className="text-gray-600 text-2xl font-bold"> No Hay Gastos Aún</p>: 
       <>
        <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
        {state.expenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense}/>
        ))}
       </>}
    </div>
  );
}

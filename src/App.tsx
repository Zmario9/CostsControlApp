
import BudgetForm from "./components/BudgetForm/BudgetForm";
import BudgetTracker from "./components/BudgetTracker/BudgetTracker";
import { useBudget } from "./hooks/useBudget";
import { useMemo } from "react";
import ExpenseModal from "./components/ExpenseModal/ExpenseModal";
import ExpensesList from "./components/ExpensesList/ExpensesList";
function App() {
  const {state} = useBudget();
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);
  return (
    <>
      <div className="bg-blue-500 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de gastos
        </h1>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10"> 
        {isValidBudget ? <BudgetTracker/> : <BudgetForm/>}
      </div>
      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpensesList/>
          <ExpenseModal/>
        </main>
      )}
    </>
  );
}

export default App;

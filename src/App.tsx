import { useContext } from "react";
import BudgetForm from "./components/BudgetForm/BudgetForm";
import { BudgetContext } from "./contexts/budgetContext/BudgetContext";
function App() {
  const context = useContext(BudgetContext);
  console.log(context);
  return (
    <>
      <div className="bg-blue-500 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de gastos
        </h1>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10"> 
        <BudgetForm/>
      </div>
    </>
  );
}

export default App;

import { ChangeEvent, useState } from "react";
import { useBudget } from "../../hooks/useBudget";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const {dispatch} = useBudget();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("Añadir o definir presupuesto", budget);
    dispatch({type:'add-budget', payload:{budget}});
  }
  
  const validBudget = () => {
    return budget.toString().trim() !== "" && budget > 0;
  }

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
          <label
            htmlFor="budget"
            className="text-4xl text-blue-600 font-bold text-center"
          >
            Definir presupuesto
          </label>
        </div>
        <input
          id="budget"
          type="number"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Definir Presupuesto"
          className="bg-blue-600 hover:bg-blue-700 cursor.pointer w-full p-2 text-white font-black uppercase duration-200 border rounded-md disabled:opacity-40"
          disabled={!validBudget()}
        />
      </form>
    </>
  );
}

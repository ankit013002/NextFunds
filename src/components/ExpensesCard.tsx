import { FaCreditCard } from "react-icons/fa";

const ExpensesCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col justify-between">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
        <FaCreditCard size={16} />
      </div>

      <div className="mt-2 text-gray-600">Monthly expenses</div>

      <div className="text-2xl font-bold">
        $6,638
        <span className="text-gray-400 font-normal">.72</span>
      </div>

      <div className="text-sm">
        <span className="text-red-600 font-medium">-8.6%</span>{" "}
        <span className="text-gray-400">compared to last month</span>
      </div>
    </div>
  );
};

export default ExpensesCard;

import React from "react";
import Advertisement from "./Advertisement";
import BalanceCard from "./BalanceCard";
import IncomeCard from "./IncomeCard";
import ExpensesCard from "./ExpensesCard";
import Statistics from "./Statistics";
import AllExpenses from "./AllExpenses";

const OverviewDashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <section className="col-span-2 grid grid-rows-[auto_1fr] gap-4">
        <div className="grid grid-cols-3 gap-4 h-[20vh]">
          <BalanceCard />
          <IncomeCard />
          <ExpensesCard />
        </div>
        <div className="h-[50vh]">
          <Statistics />
        </div>
      </section>

      <aside className="col-span-1 grid items-end grid-rows-[auto_1fr] gap-4">
        <div className="h-[50vh]">
          <AllExpenses />
        </div>
        <div className="h-[20vh]">
          <Advertisement />
        </div>
      </aside>
    </div>
  );
};

export default OverviewDashboard;

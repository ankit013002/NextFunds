import React from "react";
import Advertisement from "./Advertisement";
import BalanceCard from "./BalanceCard";
import IncomeCard from "./IncomeCard";
import ExpensesCard from "./ExpensesCard";
import Statistics from "./Statistics";
import AllExpenses from "./AllExpenses";

const OverviewDashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <section className="col-span-2 grid grid-rows-[auto_1fr] gap-4">
        <div className="grid grid-cols-3 gap-4">
          <BalanceCard />
          <IncomeCard />
          <ExpensesCard />
        </div>
        <div className="min-h-0">
          <Statistics />
        </div>
      </section>

      <aside className="col-span-1 grid items-end grid-rows-[auto_1fr] gap-4">
        <AllExpenses />
        <Advertisement />
      </aside>
    </div>
  );
};

export default OverviewDashboard;

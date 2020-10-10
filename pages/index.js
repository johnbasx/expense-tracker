import React from "react";

import MainLayout from "../components/layout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto w-full flex xs:flex-col lg:flex-row ">
            <div className="main-card m-2 p-4 h-48 w-full bg-violet-400 hover:bg-violet-500 rounded-2xl justify-center items-center">
              <h1 className="text-white">Total Expenses</h1>
              <p className="font-bold text-gray-100 text-2xl">34,000</p>
            </div>
            <div className="main-card m-2 p-4 h-48 w-full bg-green-400 rounded-2xl">
              <h1 className="text-white">Total Income</h1>
              <p className="font-bold text-gray-100 text-2xl">34,000</p>
            </div>
          </div>
        </div>
        {/* /End replace */}
      </div>
    </MainLayout>
  );
};

export default Dashboard;

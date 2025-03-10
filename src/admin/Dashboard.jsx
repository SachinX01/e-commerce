import React from 'react';
import AdminLayout from './components/AdminLayout';

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Dashboard cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
            <p className="text-3xl font-bold text-blue-600">150</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
            <p className="text-3xl font-bold text-green-600">₹45,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Products</h2>
            <p className="text-3xl font-bold text-purple-600">75</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Customers</h2>
            <p className="text-3xl font-bold text-orange-600">250</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
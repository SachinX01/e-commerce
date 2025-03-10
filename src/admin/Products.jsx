// // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// import React, { useState, useEffect } from 'react';
// import * as echarts from 'echarts';
// import {
// Card,
// CardContent,
// CardHeader,
// CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Slider } from "@/components/ui/slider";
// import {
// Dialog,
// DialogContent,
// DialogDescription,
// DialogHeader,
// DialogTitle,
// DialogTrigger,
// } from "@/components/ui/dialog";
// function ProductManagement() {
// const [activeSection, setActiveSection] = useState('products');
// const [searchTerm, setSearchTerm] = useState('');
// const [viewMode, setViewMode] = useState('grid');
// const [priceRange, setPriceRange] = useState([0, 1000]);
// const [selectedCategory, setSelectedCategory] = useState('all');
// const [currentPage, setCurrentPage] = useState(1);
// const [itemsPerPage, setItemsPerPage] = useState(12);
// const products = [
// {
// id: 1,
// name: 'Premium Silk Evening Gown',
// price: 899.99,
// category: 'Dresses',
// stock: 15,
// status: 'In Stock',
// image: 'https://public.readdy.ai/ai/img_res/df2c18f186e440aa68937c672b8a80f2.jpg'
// },
// {
// id: 2,
// name: 'Designer Leather Jacket',
// price: 599.99,
// category: 'Outerwear',
// stock: 8,
// status: 'Low Stock',
// image: 'https://public.readdy.ai/ai/img_res/22404e63d6043bc7141bb241d398a701.jpg'
// },
// {
// id: 3,
// name: 'Cashmere Wool Sweater',
// price: 299.99,
// category: 'Knitwear',
// stock: 25,
// status: 'In Stock',
// image: 'https://public.readdy.ai/ai/img_res/329a5112099ee47aa73a773f844cbfd7.jpg'
// },
// {
// id: 4,
// name: 'Italian Leather Handbag',
// price: 1299.99,
// category: 'Accessories',
// stock: 5,
// status: 'Low Stock',
// image: 'https://public.readdy.ai/ai/img_res/56a67c7ee9cf9034bebaab5147d18ef4.jpg'
// },
// {
// id: 5,
// name: 'Designer Sunglasses',
// price: 399.99,
// category: 'Accessories',
// stock: 30,
// status: 'In Stock',
// image: 'https://public.readdy.ai/ai/img_res/43f116e857393f1c50e032ebd3d8fd28.jpg'
// },
// {
// id: 6,
// name: 'Tailored Business Suit',
// price: 1499.99,
// category: 'Suits',
// stock: 10,
// status: 'In Stock',
// image: 'https://public.readdy.ai/ai/img_res/e4453dd8adbfe78ed84ee926808af955.jpg'
// }
// ];
// const categories = [
// 'All Categories',
// 'Dresses',
// 'Outerwear',
// 'Knitwear',
// 'Accessories',
// 'Suits'
// ];
// const handlePriceRangeChange = (newValues) => {
// setPriceRange(newValues);
// };
// const filteredProducts = products.filter(product => {
// const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
// const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
// const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
// return matchesSearch && matchesCategory && matchesPrice;
// });
// const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
// const paginatedProducts = filteredProducts.slice(
// (currentPage - 1) * itemsPerPage,
// currentPage * itemsPerPage
// );
// return (
// <div className="min-h-screen bg-gray-50">
// {/* Header */}
// <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
// <div className="flex items-center justify-between px-6 h-full">
// <div className="flex items-center space-x-4">
// <h1 className="text-xl font-bold text-gray-800">Fashion Admin</h1>
// </div>
// <div className="flex items-center space-x-6">
// <div className="relative">
// <Input
// type="search"
// placeholder="Search products..."
// className="w-64 pl-10 pr-4 py-2 text-sm"
// value={searchTerm}
// onChange={(e) => setSearchTerm(e.target.value)}
// />
// <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
// </div>
// <button className="relative">
// <i className="fas fa-bell text-gray-600 text-xl"></i>
// <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
// </button>
// <Avatar className="h-8 w-8">
// <AvatarImage src="https://public.readdy.ai/ai/img_res/70bd661f74c9e3b59065e22d5ef2ab24.jpg" />
// <AvatarFallback>AD</AvatarFallback>
// </Avatar>
// </div>
// </div>
// </header>
// {/* Sidebar */}
// <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200">
// <nav className="p-4">
// <ul className="space-y-2">
// {[
// { icon: 'fa-home', text: 'Dashboard', id: 'dashboard' },
// { icon: 'fa-box', text: 'Products', id: 'products' },
// { icon: 'fa-shopping-cart', text: 'Orders', id: 'orders' },
// { icon: 'fa-users', text: 'Customers', id: 'customers' },
// { icon: 'fa-cog', text: 'Settings', id: 'settings' }
// ].map((item) => (
// <li key={item.id}>
// <button
// onClick={() => setActiveSection(item.id)}
// className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-gray-600 ${
// activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
// }`}
// >
// <i className={`fas ${item.icon} w-5`}></i>
// <span>{item.text}</span>
// </button>
// </li>
// ))}
// </ul>
// </nav>
// </aside>
// {/* Main Content */}
// <main className="ml-64 pt-16 min-h-screen">
// <div className="p-6">
// {/* Page Header */}
// <div className="flex justify-between items-center mb-6">
// <h1 className="text-2xl font-bold text-gray-800">Products Management</h1>
// <Dialog>
// <DialogTrigger asChild>
// <Button className="!rounded-button bg-blue-600 hover:bg-blue-700">
// <i className="fas fa-plus mr-2"></i>
// Add New Product
// </Button>
// </DialogTrigger>
// <DialogContent>
// <DialogHeader>
// <DialogTitle>Add New Product</DialogTitle>
// <DialogDescription>
// Fill in the product details below.
// </DialogDescription>
// </DialogHeader>
// <div className="space-y-4 py-4">
// <Input placeholder="Product Name" className="w-full" />
// <Input type="number" placeholder="Price" className="w-full" />
// <Input type="number" placeholder="Stock Quantity" className="w-full" />
// <Input placeholder="Category" className="w-full" />
// </div>
// <div className="flex justify-end space-x-2">
// <Button variant="outline" className="!rounded-button">Cancel</Button>
// <Button className="!rounded-button bg-blue-600 hover:bg-blue-700">Add Product</Button>
// </div>
// </DialogContent>
// </Dialog>
// </div>
// {/* Filters and Controls */}
// <Card className="mb-6">
// <CardContent className="p-6">
// <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// <div>
// <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
// <div className="relative">
// <select
// className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none bg-white"
// value={selectedCategory}
// onChange={(e) => setSelectedCategory(e.target.value)}
// >
// {categories.map((category) => (
// <option key={category} value={category.toLowerCase()}>
// {category}
// </option>
// ))}
// </select>
// <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
// </div>
// </div>
// <div>
// <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
// <Slider
// defaultValue={[0, 1000]}
// max={2000}
// step={10}
// className="w-full"
// onValueChange={handlePriceRangeChange}
// />
// <div className="flex justify-between mt-2 text-sm text-gray-600">
// <span>${priceRange[0]}</span>
// <span>${priceRange[1]}</span>
// </div>
// </div>
// <div className="flex items-end space-x-4">
// <Button
// variant={viewMode === 'grid' ? 'default' : 'outline'}
// className="!rounded-button"
// onClick={() => setViewMode('grid')}
// >
// <i className="fas fa-grid-2 mr-2"></i>
// Grid
// </Button>
// <Button
// variant={viewMode === 'list' ? 'default' : 'outline'}
// className="!rounded-button"
// onClick={() => setViewMode('list')}
// >
// <i className="fas fa-list mr-2"></i>
// List
// </Button>
// </div>
// </div>
// </CardContent>
// </Card>
// {/* Products Display */}
// {viewMode === 'grid' ? (
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// {paginatedProducts.map((product) => (
// <Card key={product.id} className="overflow-hidden">
// <div className="aspect-square overflow-hidden">
// <img
// src={product.image}
// alt={product.name}
// className="w-full h-full object-cover transition-transform hover:scale-105"
// />
// </div>
// <CardContent className="p-4">
// <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
// <div className="flex justify-between items-center mb-2">
// <span className="text-lg font-bold text-blue-600">${product.price}</span>
// <span className={`px-2 py-1 rounded-full text-xs ${
// product.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
// }`}>
// {product.status}
// </span>
// </div>
// <div className="flex justify-between items-center">
// <span className="text-sm text-gray-600">Stock: {product.stock}</span>
// <div className="space-x-2">
// <Button variant="outline" size="sm" className="!rounded-button">
// <i className="fas fa-edit"></i>
// </Button>
// <Button variant="outline" size="sm" className="!rounded-button text-red-600 hover:text-red-700">
// <i className="fas fa-trash"></i>
// </Button>
// </div>
// </div>
// </CardContent>
// </Card>
// ))}
// </div>
// ) : (
// <Card>
// <Table>
// <TableHeader>
// <TableRow>
// <TableHead>Image</TableHead>
// <TableHead>Name</TableHead>
// <TableHead>Category</TableHead>
// <TableHead>Price</TableHead>
// <TableHead>Stock</TableHead>
// <TableHead>Status</TableHead>
// <TableHead>Actions</TableHead>
// </TableRow>
// </TableHeader>
// <TableBody>
// {paginatedProducts.map((product) => (
// <TableRow key={product.id}>
// <TableCell>
// <img
// src={product.image}
// alt={product.name}
// className="w-16 h-16 object-cover rounded"
// />
// </TableCell>
// <TableCell className="font-medium">{product.name}</TableCell>
// <TableCell>{product.category}</TableCell>
// <TableCell>${product.price}</TableCell>
// <TableCell>{product.stock}</TableCell>
// <TableCell>
// <span className={`px-2 py-1 rounded-full text-xs ${
// product.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
// }`}>
// {product.status}
// </span>
// </TableCell>
// <TableCell>
// <div className="space-x-2">
// <Button variant="outline" size="sm" className="!rounded-button">
// <i className="fas fa-edit"></i>
// </Button>
// <Button variant="outline" size="sm" className="!rounded-button text-red-600 hover:text-red-700">
// <i className="fas fa-trash"></i>
// </Button>
// </div>
// </TableCell>
// </TableRow>
// ))}
// </TableBody>
// </Table>
// </Card>
// )}
// {/* Pagination */}
// <div className="mt-6 flex items-center justify-between">
// <div className="flex items-center space-x-2">
// <span className="text-sm text-gray-600">Items per page:</span>
// <select
// className="border border-gray-300 rounded-lg px-2 py-1"
// value={itemsPerPage}
// onChange={(e) => setItemsPerPage(Number(e.target.value))}
// >
// <option value={12}>12</option>
// <option value={24}>24</option>
// <option value={36}>36</option>
// </select>
// </div>
// <div className="flex items-center space-x-2">
// <Button
// variant="outline"
// className="!rounded-button"
// disabled={currentPage === 1}
// onClick={() => setCurrentPage(currentPage - 1)}
// >
// <i className="fas fa-chevron-left"></i>
// </Button>
// <span className="text-sm text-gray-600">
// Page {currentPage} of {totalPages}
// </span>
// <Button
// variant="outline"
// className="!rounded-button"
// disabled={currentPage === totalPages}
// onClick={() => setCurrentPage(currentPage + 1)}
// >
// <i className="fas fa-chevron-right"></i>
// </Button>
// </div>
// </div>
// </div>
// </main>
// {/* Footer */}
// <footer className="ml-64 bg-white border-t border-gray-200 py-4 px-6">
// <div className="flex items-center justify-between">
// <p className="text-sm text-gray-600"> 2025 Fashion Admin. All rights reserved.</p>
// <div className="flex items-center space-x-4">
// <Button variant="link" size="sm">Privacy Policy</Button>
// <Button variant="link" size="sm">Terms of Service</Button>
// <Button variant="link" size="sm">Help Center</Button>
// </div>
// </div>
// </footer>
// </div>
// );
// };
// export default ProductManagement;

import React, { useState } from 'react';
import * as echarts from 'echarts';

const ProductManagement = () => {
  const [activeSection, setActiveSection] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const products = [
    {
      id: 1,
      name: 'Premium Silk Evening Gown',
      price: 899.99,
      category: 'Dresses',
      stock: 15,
      status: 'In Stock',
      image: 'https://public.readdy.ai/ai/img_res/df2c18f186e440aa68937c672b8a80f2.jpg'
    },
    {
      id: 2,
      name: 'Designer Leather Jacket',
      price: 599.99,
      category: 'Outerwear',
      stock: 8,
      status: 'Low Stock',
      image: 'https://public.readdy.ai/ai/img_res/22404e63d6043bc7141bb241d398a701.jpg'
    },
    {
      id: 3,
      name: 'Cashmere Wool Sweater',
      price: 299.99,
      category: 'Knitwear',
      stock: 25,
      status: 'In Stock',
      image: 'https://public.readdy.ai/ai/img_res/329a5112099ee47aa73a773f844cbfd7.jpg'
    },
    {
      id: 4,
      name: 'Italian Leather Handbag',
      price: 1299.99,
      category: 'Accessories',
      stock: 5,
      status: 'Low Stock',
      image: 'https://public.readdy.ai/ai/img_res/56a67c7ee9cf9034bebaab5147d18ef4.jpg'
    },
    {
      id: 5,
      name: 'Designer Sunglasses',
      price: 399.99,
      category: 'Accessories',
      stock: 30,
      status: 'In Stock',
      image: 'https://public.readdy.ai/ai/img_res/43f116e857393f1c50e032ebd3d8fd28.jpg'
    },
    {
      id: 6,
      name: 'Tailored Business Suit',
      price: 1499.99,
      category: 'Suits',
      stock: 10,
      status: 'In Stock',
      image: 'https://public.readdy.ai/ai/img_res/e4453dd8adbfe78ed84ee926808af955.jpg'
    }
  ];

  const categories = [
    'All Categories',
    'Dresses',
    'Outerwear',
    'Knitwear',
    'Accessories',
    'Suits'
  ];

  const handlePriceRangeChange = (newValues) => {
    setPriceRange(newValues);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between px-6 h-full">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-800">Fashion Admin</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <button className="relative">
              <i className="fas fa-bell text-gray-600 text-xl"></i>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </button>
            <img
              className="h-8 w-8 rounded-full"
              src="https://public.readdy.ai/ai/img_res/70bd661f74c9e3b59065e22d5ef2ab24.jpg"
              alt="Avatar"
            />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200">
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { icon: 'fa-home', text: 'Dashboard', id: 'dashboard' },
              { icon: 'fa-box', text: 'Products', id: 'products' },
              { icon: 'fa-shopping-cart', text: 'Orders', id: 'orders' },
              { icon: 'fa-users', text: 'Customers', id: 'customers' },
              { icon: 'fa-cog', text: 'Settings', id: 'settings' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-gray-600 ${
                    activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <i className={`fas ${item.icon} w-5`}></i>
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-16 min-h-screen p-6">
        <div className="p-6">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Products Management</h1>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
              onClick={() => {
                // Handle add new product logic
              }}
            >
              <i className="fas fa-plus mr-2"></i>
              Add New Product
            </button>
          </div>

          {/* Filters and Controls */}
          <div className="mb-6 p-6 bg-white rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="relative">
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none bg-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category.toLowerCase()}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="0"
                    max="2000"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange([Number(e.target.value), priceRange[1]])}
                    className="w-24 border border-gray-300 rounded-lg px-2 py-1"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange([priceRange[0], Number(e.target.value)])}
                    className="w-24 border border-gray-300 rounded-lg px-2 py-1"
                  />
                </div>
              </div>
              <div className="flex items-end space-x-4">
                <button
                  className={`rounded-lg px-4 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <i className="fas fa-th mr-2"></i>
                  Grid
                </button>
                <button
                  className={`rounded-lg px-4 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setViewMode('list')}
                >
                  <i className="fas fa-list mr-2"></i>
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Products Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-blue-600">${product.price}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Stock: {product.stock}</span>
                      <div className="space-x-2">
                        <button className="border border-gray-300 rounded-lg px-2 py-1">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="border border-gray-300 rounded-lg px-2 py-1 text-red-600 hover:text-red-700">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Stock</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="px-4 py-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-4 py-2 font-medium">{product.name}</td>
                      <td className="px-4 py-2">{product.category}</td>
                      <td className="px-4 py-2">${product.price}</td>
                      <td className="px-4 py-2">{product.stock}</td>
                      <td className="px-4 py-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          product.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <div className="space-x-2">
                          <button className="border border-gray-300 rounded-lg px-2 py-1">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="border border-gray-300 rounded-lg px-2 py-1 text-red-600 hover:text-red-700">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Items per page:</span>
              <select
                className="border border-gray-300 rounded-lg px-2 py-1"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={36}>36</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="border border-gray-300 rounded-lg px-2 py-1"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="border border-gray-300 rounded-lg px-2 py-1"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="ml-64 bg-white border-t border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600"> 2025 Fashion Admin. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-blue-600 hover:underline text-sm">Privacy Policy</a>
            <a href="#" className="text-blue-600 hover:underline text-sm">Terms of Service</a>
            <a href="#" className="text-blue-600 hover:underline text-sm">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductManagement;

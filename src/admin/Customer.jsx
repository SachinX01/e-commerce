// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const CustomerManagement = () => {
//   const [activeSection, setActiveSection] = useState('customers');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [viewMode, setViewMode] = useState('grid');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(12);
//   const [selectedStatus, setSelectedStatus] = useState('all');

//   const customers = [
//     {
//       id: 1,
//       name: 'Charlotte Wilson',
//       email: 'charlotte.wilson@email.com',
//       phone: '+1 (555) 123-4567',
//       joinDate: '2024-08-15',
//       totalOrders: 28,
//       totalSpent: 4892.50,
//       status: 'Active',
//       image: 'https://public.readdy.ai/ai/img_res/bfd1b7bb50a0b48d32c01e3ab1b2a21d.jpg'
//     },
//     {
//       id: 2,
//       name: 'Alexander Bennett',
//       email: 'alex.bennett@email.com',
//       phone: '+1 (555) 234-5678',
//       joinDate: '2024-09-22',
//       totalOrders: 15,
//       totalSpent: 2456.75,
//       status: 'Active',
//       image: 'https://public.readdy.ai/ai/img_res/26c075bae1fbeb977f9be8b170490ed8.jpg'
//     },
//     {
//       id: 3,
//       name: 'Isabella Martinez',
//       email: 'isabella.m@email.com',
//       phone: '+1 (555) 345-6789',
//       joinDate: '2024-10-05',
//       totalOrders: 42,
//       totalSpent: 7845.20,
//       status: 'Active',
//       image: 'https://public.readdy.ai/ai/img_res/17f1b7de2be10939215fa523120d3c22.jpg'
//     },
//     {
//       id: 4,
//       name: 'William Chen',
//       email: 'william.chen@email.com',
//       phone: '+1 (555) 456-7890',
//       joinDate: '2024-11-18',
//       totalOrders: 8,
//       totalSpent: 1234.60,
//       status: 'Inactive',
//       image: 'https://public.readdy.ai/ai/img_res/46a069bbcf9b74c56a2534628d9fcadf.jpg'
//     },
//     {
//       id: 5,
//       name: 'Sophie Anderson',
//       email: 'sophie.a@email.com',
//       phone: '+1 (555) 567-8901',
//       joinDate: '2024-12-03',
//       totalOrders: 35,
//       totalSpent: 5678.90,
//       status: 'Active',
//       image: 'https://public.readdy.ai/ai/img_res/138c2e17619f3ecb9f1e223090800462.jpg'
//     },
//     {
//       id: 6,
//       name: 'James Thompson',
//       email: 'james.t@email.com',
//       phone: '+1 (555) 678-9012',
//       joinDate: '2025-01-09',
//       totalOrders: 19,
//       totalSpent: 3456.40,
//       status: 'Active',
//       image: 'https://public.readdy.ai/ai/img_res/6fc338e3eb989c5c1dd2a384b9fe37e7.jpg'
//     }
//   ];

//   const filteredCustomers = customers.filter(customer => {
//     const matchesSearch = 
//       customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       customer.email.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = selectedStatus === 'all' || customer.status.toLowerCase() === selectedStatus.toLowerCase();
//     return matchesSearch && matchesStatus;
//   });

//   const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
//   const paginatedCustomers = filteredCustomers.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
//         <div className="flex items-center justify-between px-6 h-full">
//           <div className="flex items-center space-x-4">
//             <h1 className="text-xl font-bold text-gray-800">Fashion Admin</h1>
//           </div>
//           <div className="flex items-center space-x-6">
//             <div className="relative">
//               <Input
//                 type="search"
//                 placeholder="Search customers..."
//                 className="w-64 pl-10 pr-4 py-2 text-sm"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
//             </div>
//             <button className="relative">
//               <i className="fas fa-bell text-gray-600 text-xl"></i>
//               <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
//             </button>
//             <Avatar className="h-8 w-8">
//               <AvatarImage src="https://public.readdy.ai/ai/img_res/da00b8fc5be8583e4a1c7849d511f153.jpg" />
//               <AvatarFallback>AD</AvatarFallback>
//             </Avatar>
//           </div>
//         </div>
//       </header>

//       <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200">
//         <nav className="p-4">
//           <ul className="space-y-2">
//             {[
//               { icon: 'fa-home', text: 'Dashboard', id: 'dashboard' },
//               { icon: 'fa-box', text: 'Products', id: 'products' },
//               { icon: 'fa-shopping-cart', text: 'Orders', id: 'orders' },
//               { icon: 'fa-users', text: 'Customers', id: 'customers' },
//               { icon: 'fa-cog', text: 'Settings', id: 'settings' }
//             ].map((item) => (
//               <li key={item.id}>
//                 <button
//                   onClick={() => setActiveSection(item.id)}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-gray-600 ${
//                     activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
//                   }`}
//                 >
//                   <i className={`fas ${item.icon} w-5`}></i>
//                   <span>{item.text}</span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       <main className="ml-64 pt-16 min-h-screen">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold text-gray-800">Customer Management</h1>
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button className="!rounded-button bg-blue-600 hover:bg-blue-700">
//                   <i className="fas fa-plus mr-2"></i>
//                   Add New Customer
//                 </Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>Add New Customer</DialogTitle>
//                   <DialogDescription>
//                     Fill in the customer details below.
//                   </DialogDescription>
//                 </DialogHeader>
//                 <div className="space-y-4 py-4">
//                   <Input placeholder="Full Name" className="w-full" />
//                   <Input type="email" placeholder="Email Address" className="w-full" />
//                   <Input placeholder="Phone Number" className="w-full" />
//                 </div>
//                 <div className="flex justify-end space-x-2">
//                   <Button variant="outline" className="!rounded-button">Cancel</Button>
//                   <Button className="!rounded-button bg-blue-600 hover:bg-blue-700">Add Customer</Button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>

//           <Card className="mb-6">
//             <CardContent className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
//                   <div className="relative">
//                     <select
//                       className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none bg-white"
//                       value={selectedStatus}
//                       onChange={(e) => setSelectedStatus(e.target.value)}
//                     >
//                       <option value="all">All Status</option>
//                       <option value="active">Active</option>
//                       <option value="inactive">Inactive</option>
//                     </select>
//                     <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
//                   </div>
//                 </div>
//                 <div className="flex items-end space-x-4">
//                   <Button
//                     variant={viewMode === 'grid' ? 'default' : 'outline'}
//                     className="!rounded-button"
//                     onClick={() => setViewMode('grid')}
//                   >
//                     <i className="fas fa-grid-2 mr-2"></i>
//                     Grid
//                   </Button>
//                   <Button
//                     variant={viewMode === 'list' ? 'default' : 'outline'}
//                     className="!rounded-button"
//                     onClick={() => setViewMode('list')}
//                   >
//                     <i className="fas fa-list mr-2"></i>
//                     List
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {viewMode === 'grid' ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {paginatedCustomers.map((customer) => (
//                 <Card key={customer.id} className="overflow-hidden">
//                   <div className="p-4 text-center">
//                     <Avatar className="w-24 h-24 mx-auto mb-4">
//                       <AvatarImage src={customer.image} />
//                       <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                     </Avatar>
//                     <h3 className="font-semibold text-lg mb-1">{customer.name}</h3>
//                     <p className="text-sm text-gray-600 mb-2">{customer.email}</p>
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                     }`}>
//                       {customer.status}
//                     </span>
//                   </div>
//                   <CardContent className="border-t border-gray-200 p-4">
//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <p className="text-gray-600">Total Orders</p>
//                         <p className="font-semibold">{customer.totalOrders}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-600">Total Spent</p>
//                         <p className="font-semibold">${customer.totalSpent.toFixed(2)}</p>
//                       </div>
//                     </div>
//                     <div className="mt-4 flex justify-end space-x-2">
//                       <Button variant="outline" size="sm" className="!rounded-button">
//                         <i className="fas fa-edit"></i>
//                       </Button>
//                       <Button variant="outline" size="sm" className="!rounded-button text-red-600 hover:text-red-700">
//                         <i className="fas fa-trash"></i>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <Card>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Customer</TableHead>
//                     <TableHead>Contact</TableHead>
//                     <TableHead>Join Date</TableHead>
//                     <TableHead>Total Orders</TableHead>
//                     <TableHead>Total Spent</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {paginatedCustomers.map((customer) => (
//                     <TableRow key={customer.id}>
//                       <TableCell className="flex items-center space-x-3">
//                         <Avatar className="h-10 w-10">
//                           <AvatarImage src={customer.image} />
//                           <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                         </Avatar>
//                         <div>
//                           <p className="font-medium">{customer.name}</p>
//                           <p className="text-sm text-gray-600">{customer.email}</p>
//                         </div>
//                       </TableCell>
//                       <TableCell>{customer.phone}</TableCell>
//                       <TableCell>{customer.joinDate}</TableCell>
//                       <TableCell>{customer.totalOrders}</TableCell>
//                       <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
//                       <TableCell>
//                         <span className={`px-2 py-1 rounded-full text-xs ${
//                           customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                         }`}>
//                           {customer.status}
//                         </span>
//                       </TableCell>
//                       <TableCell>
//                         <div className="space-x-2">
//                           <Button variant="outline" size="sm" className="!rounded-button">
//                             <i className="fas fa-edit"></i>
//                           </Button>
//                           <Button variant="outline" size="sm" className="!rounded-button text-red-600 hover:text-red-700">
//                             <i className="fas fa-trash"></i>
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Card>
//           )}

//           <div className="mt-6 flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <span className="text-sm text-gray-600">Items per page:</span>
//               <select
//                 className="border border-gray-300 rounded-lg px-2 py-1"
//                 value={itemsPerPage}
//                 onChange={(e) => setItemsPerPage(Number(e.target.value))}
//               >
//                 <option value={12}>12</option>
//                 <option value={24}>24</option>
//                 <option value={36}>36</option>
//               </select>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Button
//                 variant="outline"
//                 className="!rounded-button"
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage(currentPage - 1)}
//               >
//                 <i className="fas fa-chevron-left"></i>
//               </Button>
//               <span className="text-sm text-gray-600">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <Button
//                 variant="outline"
//                 className="!rounded-button"
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage(currentPage + 1)}
//               >
//                 <i className="fas fa-chevron-right"></i>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer className="ml-64 bg-white border-t border-gray-200 py-4 px-6">
//         <div className="flex items-center justify-between">
//           <p className="text-sm text-gray-600"> 2025 Fashion Admin. All rights reserved.</p>
//           <div className="flex items-center space-x-4">
//             <Button variant="link" size="sm">Privacy Policy</Button>
//             <Button variant="link" size="sm">Terms of Service</Button>
//             <Button variant="link" size="sm">Help Center</Button>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CustomerManagement;


import React, { useState } from 'react';

const CustomerManagement = () => {
  const [activeSection, setActiveSection] = useState('customers');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedStatus, setSelectedStatus] = useState('all');

  const customers = [
    {
      id: 1,
      name: 'Charlotte Wilson',
      email: 'charlotte.wilson@email.com',
      phone: '+1 (555) 123-4567',
      joinDate: '2024-08-15',
      totalOrders: 28,
      totalSpent: 4892.50,
      status: 'Active',
      image: 'https://public.readdy.ai/ai/img_res/bfd1b7bb50a0b48d32c01e3ab1b2a21d.jpg'
    },
    // Add more customer objects as needed
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || customer.status.toLowerCase() === selectedStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between px-6 h-full">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-800">Fashion Admin</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Search customers..."
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
              src="https://public.readdy.ai/ai/img_res/da00b8fc5be8583e4a1c7849d511f153.jpg"
              alt="Avatar"
            />
          </div>
        </div>
      </header>

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

      <main className="ml-64 pt-16 min-h-screen p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Customer Management</h1>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
            onClick={() => {
              // Handle add new customer logic
            }}
          >
            <i className="fas fa-plus mr-2"></i>
            Add New Customer
          </button>
        </div>

        <div className="mb-6 p-6 bg-white rounded-lg shadow">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <div className="relative">
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none bg-white"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
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

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedCustomers.map((customer) => (
              <div key={customer.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 text-center">
                  <img
                    className="w-24 h-24 mx-auto mb-4 rounded-full"
                    src={customer.image}
                    alt={customer.name}
                  />
                  <h3 className="font-semibold text-lg mb-1">{customer.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{customer.email}</p>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {customer.status}
                  </span>
                </div>
                <div className="border-t border-gray-200 p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Total Orders</p>
                      <p className="font-semibold">{customer.totalOrders}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Spent</p>
                      <p className="font-semibold">${customer.totalSpent.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <button className="border border-gray-300 rounded-lg px-2 py-1">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="border border-gray-300 rounded-lg px-2 py-1 text-red-600 hover:text-red-700">
                      <i className="fas fa-trash"></i>
                    </button>
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
                  <th className="px-4 py-2">Customer</th>
                  <th className="px-4 py-2">Contact</th>
                  <th className="px-4 py-2">Join Date</th>
                  <th className="px-4 py-2">Total Orders</th>
                  <th className="px-4 py-2">Total Spent</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="flex items-center space-x-3 px-4 py-2">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={customer.image}
                        alt={customer.name}
                      />
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-gray-600">{customer.email}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2">{customer.phone}</td>
                    <td className="px-4 py-2">{customer.joinDate}</td>
                    <td className="px-4 py-2">{customer.totalOrders}</td>
                    <td className="px-4 py-2">${customer.totalSpent.toFixed(2)}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {customer.status}
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
      </main>

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

export default CustomerManagement;

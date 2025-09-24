import React, { useMemo, useState } from 'react';
import DataGrid, { Column } from 'react-data-grid';
import 'react-data-grid/lib/styles.css';


interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  status: 'active' | 'inactive';
}

export default function DataGridDemo() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32, status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45, status: 'inactive' },
  ]);

  const columns: Column<User>[] = useMemo(() => [
    { key: 'id', name: 'ID', width: 80 },
    { key: 'name', name: 'Name', resizable: true, sortable: true },
    { key: 'email', name: 'Email', resizable: true },
    { key: 'age', name: 'Age', width: 100, sortable: true },
    { 
      key: 'status', 
      name: 'Status', 
      width: 120,
      renderCell: ({ row }: any) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          row.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {row.status}
        </span>
      )
    },
  ], []);

  return (
    <div className="h-96 relative">
      <DataGrid
        columns={columns}
        rows={users}
        className="rdg-light border rounded-lg"
        defaultColumnOptions={{
          sortable: true,
          resizable: true,
        }}
      />
    </div>
  );
}
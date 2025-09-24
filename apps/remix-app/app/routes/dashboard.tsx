import React, { useState } from 'react';
import { Button, Input } from '@myorg/ui';
import DataGridDemo from '~/components/DataGridDemo';
import FlexLayoutDemo from '~/components/FlexLayoutDemo';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'form' | 'grid' | 'layout'>('form');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    if (!value.trim()) return 'Workspace name cannot be empty.';
    if (value.length > 50) return 'Name is too long (maximum 50 characters).';
    const invalid = /[^\p{L}\p{N}_\- ]/u.test(value);
    if (invalid) return 'Only letters, numbers, spaces, underscores, and hyphens are allowed.';
    return null;
  };

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const v = validate(name);
    setError(v);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Workspace Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your workspace with powerful tools</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 shadow-sm border">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition ${
              activeTab === 'form'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Form
          </button>
          <button
            onClick={() => setActiveTab('grid')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition ${
              activeTab === 'grid'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Data Grid
          </button>
          <button
            onClick={() => setActiveTab('layout')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition ${
              activeTab === 'layout'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Layout
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
          {activeTab === 'form' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Workspace Settings</h2>
                <p className="mt-2 text-gray-600">
                  Configure your workspace name and settings.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                <label className="block">
                  <span className="text-sm font-semibold text-gray-700">Workspace name</span>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!error}
                    className="mt-2 w-full max-w-md rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                    placeholder="Enter workspace name"
                    maxLength={50}
                  />
                </label>

                {error && (
                  <div className="text-sm text-red-600 font-medium">{error}</div>
                )}

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
                  >
                    Save Changes
                  </Button>
                  <Button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow-sm transition"
                    onClick={() => {
                      setName('');
                      setError(null);
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'grid' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
              <p className="text-gray-600">Manage users in your workspace with the data grid.</p>
              <DataGridDemo />
            </div>
          )}

          {activeTab === 'layout' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Advanced Layout</h2>
              <p className="text-gray-600">Drag and resize panels to customize your workspace.</p>
              <FlexLayoutDemo />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
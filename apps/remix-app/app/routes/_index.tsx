import React from 'react'
import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Welcome to Workspace</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          A powerful dashboard with React Data Grid and FlexLayout integration
        </p>
        <div className="space-x-4">
          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition inline-block"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-sm transition inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  )
}

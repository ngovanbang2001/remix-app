import React, { useState } from 'react'
import { Button, Input } from '@myorg/ui'

export default function Index() {
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  const validate = (value: string) => {
    if (!value.trim()) return 'Workspace name cannot be empty.'
    if (value.length > 50) return 'Name is too long (maximum 50 characters).'
    const invalid = /[^\p{L}\p{N}_\- ]/u.test(value)
    if (invalid) return 'Only letters, numbers, spaces, underscores, and hyphens are allowed.'
    return null
  }

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    const v = validate(name)
    setError(v)
    if (!v) {
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">Name your workspace</h1>
          <p className="mt-2 text-gray-600 text-sm">
            Choose a memorable name so your teammates can easily identify your workspace.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-5">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Workspace name</span>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={!!error}
                className="mt-2 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                placeholder="Enter workspace name"
                maxLength={50}
              />
            </label>

            {error && (
              <div className="text-sm text-red-600 font-medium">{error}</div>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
                onClick={onSubmit}
              >
                Save
              </Button>

              <Button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow-sm transition"
                onClick={() => {
                  setName('')
                  setError(null)
                }}
              >
                Delete
              </Button>

              {saved && (
                <span className="text-green-600 font-medium text-sm animate-pulse">
                  Saved!
                </span>
              )}
            </div>

            <div className="pt-6">
              <h3 className="text-sm font-semibold text-gray-700">Preview</h3>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <div className="rounded-lg border border-gray-300 px-4 py-2 text-gray-900 font-medium bg-gray-50 min-w-[150px] text-center">
                  {name || 'Your workspace name'}
                </div>
                <div className="text-xs text-gray-500 mt-2 sm:mt-0">
                  ID: {name ? name.toLowerCase().replace(/\s+/g, '-') : 'workspace-id'}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

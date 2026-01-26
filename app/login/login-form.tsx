'use client'

import { signIn } from './actions'
import { useActionState } from 'react'

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(
    async (_: any, formData: FormData) => {
      const result = await signIn(formData)
      return result || null
    },
    null
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-6">
      <div className="max-w-md w-full">
        <div className="bg-white px-10 py-12 rounded-sm border border-stone-200">
          <h1 className="text-3xl font-serif text-stone-900 mb-8 text-center">
            Admin Login
          </h1>

          <form action={formAction} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-stone-900"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-stone-900"
              />
            </div>

            {state?.error && (
              <div className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3 rounded-sm">
                {state.error}
              </div>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full bg-stone-900 text-white py-3 px-4 rounded-sm hover:bg-stone-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {pending ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

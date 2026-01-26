'use client'

import { createNews } from '../actions'
import { useActionState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewsForm() {
  const router = useRouter()
  const [state, formAction, pending] = useActionState(
    async (_: any, formData: FormData) => {
      const result = await createNews(formData)
      return result || null
    },
    null
  )

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="bg-white rounded-sm border border-stone-200 p-8">
        <h2 className="text-2xl font-semibold text-stone-900 mb-8">Create New Post</h2>

        <form action={formAction} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-stone-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-stone-900"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-stone-700 mb-2">
              Excerpt *
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              required
              rows={3}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-stone-900 resize-y"
              placeholder="Brief summary (shown on homepage and news list)"
            />
            <p className="mt-1 text-sm text-stone-500">
              Keep it concise - 1-2 sentences
            </p>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-stone-700 mb-2">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={20}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-stone-900 font-mono text-sm resize-y"
              placeholder="Write your content here. Use double line breaks for paragraphs."
            />
            <p className="mt-1 text-sm text-stone-500">
              Tip: Use blank lines to separate paragraphs
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="published"
              name="published"
              value="true"
              className="w-4 h-4 text-stone-900 border-stone-300 rounded focus:ring-stone-500"
            />
            <label htmlFor="published" className="text-sm font-medium text-stone-700">
              Publish immediately
            </label>
          </div>

          {state?.error && (
            <div className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3 rounded-sm">
              {state.error}
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={pending}
              className="bg-stone-900 text-white px-6 py-3 rounded-sm hover:bg-stone-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {pending ? 'Saving...' : 'Create Post'}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 border border-stone-300 rounded-sm hover:bg-stone-50 transition-colors text-stone-700 font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

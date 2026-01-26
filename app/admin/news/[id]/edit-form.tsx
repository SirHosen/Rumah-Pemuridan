'use client'

import { updateNews, deleteNews } from '../actions'
import { useActionState, useState } from 'react'
import { useRouter } from 'next/navigation'

interface EditFormProps {
  news: {
    id: string
    title: string
    excerpt: string
    content: string
    published: boolean
  }
}

export default function EditForm({ news }: EditFormProps) {
  const router = useRouter()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  
  const [state, formAction, pending] = useActionState(
    async (_: any, formData: FormData) => {
      const result = await updateNews(news.id, formData)
      return result || null
    },
    null
  )

  const handleDelete = async () => {
    await deleteNews(news.id)
  }

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
        <h2 className="text-2xl font-semibold text-stone-900 mb-8">Edit Post</h2>

        <form action={formAction} className="space-y-6">
          <input type="hidden" name="wasPublished" value={news.published.toString()} />
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-stone-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={news.title}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-stone-900"
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-stone-700 mb-2">
              Excerpt *
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              defaultValue={news.excerpt}
              required
              rows={3}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-stone-900 resize-y"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-stone-700 mb-2">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              defaultValue={news.content}
              required
              rows={20}
              className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-stone-900 font-mono text-sm resize-y"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="published"
              name="published"
              value="true"
              defaultChecked={news.published}
              className="w-4 h-4 text-stone-900 border-stone-300 rounded focus:ring-stone-500"
            />
            <label htmlFor="published" className="text-sm font-medium text-stone-700">
              Published
            </label>
          </div>

          {state?.error && (
            <div className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3 rounded-sm">
              {state.error}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={pending}
                className="bg-stone-900 text-white px-6 py-3 rounded-sm hover:bg-stone-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {pending ? 'Saving...' : 'Update Post'}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 border border-stone-300 rounded-sm hover:bg-stone-50 transition-colors text-stone-700 font-medium"
              >
                Cancel
              </button>
            </div>

            {!showDeleteConfirm ? (
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(true)}
                className="text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                Delete Post
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-sm text-stone-600">Are you sure?</span>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Yes, Delete
                </button>
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(false)}
                  className="text-sm text-stone-600 hover:text-stone-900"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

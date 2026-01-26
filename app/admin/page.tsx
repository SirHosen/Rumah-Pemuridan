import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function AdminPage() {
  const supabase = await createClient()
  
  const { data: allNews } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-stone-900">Manage News</h2>
        <Link
          href="/admin/news/new"
          className="bg-stone-900 text-white px-6 py-3 rounded-sm hover:bg-stone-700 transition-colors font-medium"
        >
          Create New Post
        </Link>
      </div>

      {allNews && allNews.length > 0 ? (
        <div className="bg-white rounded-sm border border-stone-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-stone-700">
                  Title
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-stone-700">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-stone-700">
                  Created
                </th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-stone-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {allNews.map((news) => (
                <tr key={news.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900">{news.title}</div>
                    <div className="text-sm text-stone-500 mt-1">/news/{news.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    {news.published ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-stone-200 text-stone-700">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-600">
                    {new Date(news.created_at).toLocaleDateString('id-ID')}
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <Link
                      href={`/admin/news/${news.id}`}
                      className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded-sm border border-stone-200 px-6 py-12 text-center">
          <p className="text-stone-500 mb-4">No news posts yet.</p>
          <Link
            href="/admin/news/new"
            className="inline-block bg-stone-900 text-white px-6 py-3 rounded-sm hover:bg-stone-700 transition-colors font-medium"
          >
            Create Your First Post
          </Link>
        </div>
      )}
    </div>
  )
}

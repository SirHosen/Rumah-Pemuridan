import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default async function NewsPage() {
  const supabase = await createClient()
  
  const { data: allNews } = await supabase
    .from('news')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-12">
          Semua Berita
        </h1>

        {allNews && allNews.length > 0 ? (
          <div className="space-y-12">
            {allNews.map((news) => (
              <article key={news.id} className="border-b border-stone-200 pb-12 last:border-0">
                <Link href={`/news/${news.slug}`} className="group">
                  <time className="text-sm text-stone-500 mb-2 block">
                    {new Date(news.published_at || news.created_at).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <h2 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">
                    {news.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed">
                    {news.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-stone-500 text-center py-12">
            Belum ada berita yang dipublikasikan.
          </p>
        )}
      </main>
      <Footer />
    </>
  )
}

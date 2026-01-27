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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24 mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold mb-12 gradient-text text-center">
          Semua Berita
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 mx-auto mb-16"></div>

        {allNews && allNews.length > 0 ? (
          <div className="space-y-8">
            {allNews.map((news) => (
              <article key={news.id} className="glass rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <Link href={`/news/${news.slug}`} className="group">
                  <time className="text-xs sm:text-sm text-darkBrown-600 mb-3 block">
                    {new Date(news.published_at || news.created_at).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <h2 className="text-xl sm:text-2xl font-playfair font-bold text-darkBrown-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {news.title}
                  </h2>
                  <p className="text-sm sm:text-base text-darkBrown-700 leading-relaxed">
                    {news.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-darkBrown-600 text-center py-12 font-montserrat">
            Belum ada berita yang dipublikasikan.
          </p>
        )}
      </main>
      <Footer />
    </>
  )
}

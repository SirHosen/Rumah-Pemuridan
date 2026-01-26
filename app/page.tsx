import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default async function HomePage() {
  const supabase = await createClient()
  
  const { data: latestNews } = await supabase
    .from('news')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(3)

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6 leading-tight">
            Rumah Pemuridan
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
            Sebuah tempat untuk bertumbuh dalam iman, belajar firman Tuhan, dan membangun komunitas yang saling mengasihi.
          </p>
        </section>

        {/* Latest News Section */}
        {latestNews && latestNews.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif text-stone-900">Berita Terbaru</h2>
              <Link 
                href="/news" 
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
              >
                Lihat Semua →
              </Link>
            </div>
            
            <div className="space-y-12">
              {latestNews.map((news) => (
                <article key={news.id} className="border-b border-stone-200 pb-12 last:border-0">
                  <Link href={`/news/${news.slug}`} className="group">
                    <time className="text-sm text-stone-500 mb-2 block">
                      {new Date(news.published_at || news.created_at).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <h3 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-stone-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {news.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}

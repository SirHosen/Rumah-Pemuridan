import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const dynamic = 'force-dynamic'

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: news } = await supabase
    .from('news')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!news) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link 
          href="/news" 
          className="text-sm text-stone-600 hover:text-stone-900 transition-colors inline-flex items-center mb-12"
        >
          ← Kembali ke Berita
        </Link>

        <article>
          <header className="mb-12">
            <time className="text-sm text-stone-500 mb-4 block">
              {new Date(news.published_at || news.created_at).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              {news.title}
            </h1>
          </header>

          <div 
            className="prose prose-stone prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-stone-900
              prose-p:text-stone-700 prose-p:leading-relaxed
              prose-a:text-stone-900 prose-a:underline prose-a:decoration-stone-300
              hover:prose-a:decoration-stone-900 prose-a:transition-colors
              prose-strong:text-stone-900 prose-strong:font-semibold
              prose-blockquote:border-l-stone-300 prose-blockquote:text-stone-600
              prose-ul:text-stone-700 prose-ol:text-stone-700"
            dangerouslySetInnerHTML={{ __html: formatContent(news.content) }}
          />
        </article>
      </main>
      <Footer />
    </>
  )
}

// Simple formatter for newlines - you can enhance with markdown later
function formatContent(content: string): string {
  return content
    .split('\n\n')
    .map(para => `<p>${para.replace(/\n/g, '<br/>')}</p>`)
    .join('')
}

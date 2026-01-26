import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-serif text-stone-900 hover:text-stone-600 transition-colors">
            Rumah Pemuridan
          </Link>
          <nav>
            <Link 
              href="/news" 
              className="text-stone-600 hover:text-stone-900 transition-colors text-sm"
            >
              Berita
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

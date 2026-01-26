import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/logo/logo.png" 
              alt="Rumah Pemuridan" 
              width={48}
              height={48}
              className="transition-opacity group-hover:opacity-80"
            />
            <span className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors">
              Rumah Pemuridan
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              href="/tentang" 
              className="text-stone-600 hover:text-stone-900 transition-colors text-sm"
            >
              Tentang
            </Link>
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

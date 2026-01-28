import Hero from '@/components/hero';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function Home() {
  const supabase = await createClient();
  
  const { data: latestNews } = await supabase
    .from('news')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(3);

  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Selamat Datang
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="font-montserrat text-lg text-darkBrown-800 leading-relaxed">
                <strong className="text-gold-600">Digital Ministry Center</strong> adalah sebuah yayasan Kristen yang berfokus 
                pada pelayanan pemuridan, pembinaan rohani, dan pengembangan karakter Kristiani. Kami percaya bahwa setiap 
                orang dapat bertumbuh dalam iman dan menjadi murid Kristus yang dewasa.
              </p>
              <p className="font-montserrat text-lg text-darkBrown-800 leading-relaxed">
                Melalui berbagai program dan kegiatan, kami berkomitmen untuk membangun komunitas yang saling mengasihi, 
                mendukung, dan bertumbuh bersama dalam kasih Kristus.
              </p>
              <Link
                href="/tentang"
                className="inline-block mt-4 px-8 py-3 bg-gold-500 text-darkBrown-900 font-montserrat font-semibold rounded-lg shadow-lg hover:bg-gold-400 hover:shadow-xl transition-all hover:scale-105"
              >
                Selengkapnya
              </Link>
            </div>

            <div className="glass rounded-2xl p-8 shadow-xl">
              <h3 className="font-playfair text-2xl font-bold text-burgundy-700 mb-4">Visi Kami</h3>
              <p className="font-montserrat text-darkBrown-800 leading-relaxed mb-6">
                Menjadi komunitas pemuridan yang menghasilkan murid-murid Kristus yang dewasa, berkarakter, 
                dan berdampak bagi transformasi masyarakat.
              </p>
              
              <h3 className="font-playfair text-2xl font-bold text-burgundy-700 mb-4">Misi Kami</h3>
              <ul className="space-y-2 font-montserrat text-darkBrown-800">
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Melaksanakan program pemuridan yang berkualitas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Membangun karakter Kristiani yang kuat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Mengembangkan komunitas yang saling mengasihi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {latestNews && latestNews.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-b from-cream-50 to-gold-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Berita Terkini
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 mx-auto mb-4"></div>
              <p className="font-montserrat text-darkBrown-700">Kabar terbaru dari kegiatan dan pelayanan kami</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {latestNews.map((news) => (
                <Link
                  key={news.id}
                  href={`/news/${news.slug}`}
                  className="group glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-gold-200 to-burgundy-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-darkBrown-900/20 group-hover:bg-darkBrown-900/10 transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-cinzel text-2xl text-cream-50 text-shadow-lg">RP</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-darkBrown-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="font-montserrat text-darkBrown-700 text-sm line-clamp-3 mb-4">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-darkBrown-600">
                      <span>{new Date(news.published_at).toLocaleDateString('id-ID')}</span>
                      <span className="text-gold-600 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/news"
                className="inline-block px-8 py-3 border-2 border-gold-500 text-gold-600 font-montserrat font-semibold rounded-lg hover:bg-gold-500 hover:text-darkBrown-900 transition-all hover:scale-105"
              >
                Lihat Semua Berita
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-burgundy-800 to-burgundy-900 text-cream-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 text-shadow-lg">
            Bergabunglah Bersama Kami
          </h2>
          <p className="font-montserrat text-xl mb-8 text-cream-100">
            Mari bertumbuh bersama dalam iman dan kasih Kristus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tentang"
              className="px-8 py-4 bg-gold-500 text-darkBrown-900 font-montserrat font-bold rounded-lg shadow-xl hover:bg-gold-400 hover:shadow-2xl transition-all hover:scale-105"
            >
              Pelajari Lebih Lanjut
            </a>
            <a
              href="/news"
              className="px-8 py-4 border-2 border-cream-50 text-cream-50 font-montserrat font-bold rounded-lg hover:bg-cream-50/10 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Baca Berita Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

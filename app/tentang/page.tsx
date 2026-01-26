import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export const metadata = {
  title: 'Tentang Kami - Rumah Pemuridan',
  description: 'Platform pelayanan dan edukasi rohani dari Tripartite Impact Foundation',
}

export default function TentangPage() {
  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-[40vh] bg-gradient-to-br from-burgundy-800 via-burgundy-700 to-gold-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-darkBrown-900/30"></div>
        <div className="relative z-10 text-center px-6">
          <Image 
            src="/logo/logo.png" 
            alt="Rumah Pemuridan Logo" 
            width={120}
            height={120}
            className="mx-auto mb-6 drop-shadow-2xl"
          />
          <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-cream-50 mb-4 text-shadow-lg">
            Tentang Kami
          </h1>
          <p className="font-montserrat text-xl text-cream-100 text-shadow">
            Platform pelayanan dan edukasi rohani dari <strong>Tripartite Impact Foundation</strong>
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Profil Section */}
        <section className="mb-20">
          <h2 className="font-cinzel text-4xl font-bold mb-8 gradient-text text-center">Profil</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 mx-auto mb-12"></div>
          
          <div className="space-y-6 font-montserrat text-lg text-darkBrown-800 leading-relaxed">
            <p>
              <strong className="text-gold-600">Rumah Pemuridan</strong> (rumahpemuridan.web.id) adalah platform pelayanan dan edukasi rohani dari 
              <strong> Tripartite Impact Foundation</strong>, sebuah lembaga transformasi manusia yang berfokus pada 
              pemulihan keutuhan manusia secara menyeluruh—<strong>roh, jiwa, dan tubuh</strong>—di dalam Kristus.
            </p>

            <p>
              Kami hadir untuk menolong umat Tuhan memahami bahwa keselamatan dalam Yesus Kristus bukan hanya menyentuh 
              dimensi spiritual secara sempit, melainkan merupakan karya Allah yang memulihkan totalitas manusia dalam 
              seluruh aspek kehidupannya. Karena itu, Injil bukan sekadar kabar baik untuk kehidupan kekal, tetapi juga 
              kabar pemulihan untuk kehidupan hari ini—sehingga setiap pribadi dapat hidup sehat secara rohani, seimbang 
              secara mental, teguh secara moral, dan berdampak nyata bagi generasi serta masyarakat.
            </p>

            <div className="glass rounded-2xl p-8 my-10 border-l-4 border-gold-500">
              <p className="font-playfair text-xl text-burgundy-800 italic mb-3">
                "Semoga Allah damai sejahtera menguduskan kamu seluruhnya dan semoga roh, jiwa dan tubuhmu terpelihara sempurna…"
              </p>
              <p className="text-sm text-darkBrown-600">— 1 Tesalonika 5:23</p>
            </div>

            <p>
              Ayat ini menegaskan bahwa Allah sendiri adalah pelaku pengudusan, yang memelihara umat-Nya dalam perjalanan 
              pemulihan yang terus bertumbuh sampai pada kedatangan Yesus Kristus.
            </p>

            <p>
              Tripartite Impact Foundation meyakini bahwa manusia diciptakan dalam gambar dan rupa Allah (Imago Dei) sebagai 
              pribadi yang utuh. Namun dosa merusak keselarasan itu: manusia menjadi rapuh secara spiritual, terluka secara 
              batin, dan menyimpang secara moral. Karena itu, pemulihan di dalam Kristus tidak bisa parsial.
            </p>

            <div className="bg-gradient-to-br from-gold-50 to-cream-50 rounded-2xl p-8 my-8">
              <h3 className="font-playfair text-2xl font-bold text-burgundy-700 mb-4">Kami berdiri menolak dua ekstrem di zaman ini:</h3>
              <ol className="list-decimal list-inside space-y-3 text-darkBrown-800 text-lg">
                <li>Spiritualitas yang mengabaikan jiwa dan tubuh, dan</li>
                <li>Humanisme yang menghapus dimensi roh serta menjauhkan Kristus dari pusat kehidupan.</li>
              </ol>
            </div>

            <p className="text-xl font-semibold text-burgundy-700">
              Kami percaya, <strong>Kristus memulihkan manusia secara total</strong>, dan keselamatan sejati selalu melahirkan 
              pengudusan yang nyata dalam kehidupan sehari-hari.
            </p>
          </div>
        </section>

        {/* Visi Section */}
        <section className="mb-20">
          <h2 className="font-cinzel text-4xl font-bold mb-8 gradient-text text-center">Visi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 mx-auto mb-12"></div>
          <div className="glass rounded-2xl p-10 shadow-xl">
            <p className="font-montserrat text-xl text-darkBrown-800 leading-relaxed text-center">
              Menjadi pusat edukasi rohani dan transformasi manusia sejati, yang memulihkan dan mengutuhkan Imago Dei 
              dalam terang Injil, untuk melahirkan Generasi Emas yang sehat secara spiritual dan mental, matang dalam 
              karakter, serta menjadi alat kemuliaan Tuhan di tengah tantangan zaman.
            </p>
          </div>
        </section>

        {/* Misi Section */}
        <section className="mb-20">
          <h2 className="font-cinzel text-4xl font-bold mb-8 gradient-text text-center">Misi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 mx-auto mb-12"></div>
          <p className="font-montserrat text-lg text-darkBrown-700 leading-relaxed mb-10 text-center">
            Misi pelayanan kami dijalankan melalui empat pilar utama:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-darkBrown-900 font-bold text-xl">1</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-burgundy-700 mb-3">Restorasi Gambar Allah</h3>
              <p className="font-montserrat text-darkBrown-800 leading-relaxed">
                Mengajarkan pemulihan roh–jiwa–tubuh sebagai satu kesatuan di dalam Kristus.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-darkBrown-900 font-bold text-xl">2</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-burgundy-700 mb-3">Literasi Mental–Spiritual</h3>
              <p className="font-montserrat text-darkBrown-800 leading-relaxed">
                Membekali umat Tuhan menghadapi krisis mental, adiksi digital, dan degradasi moral secara tegas namun penuh kasih.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-darkBrown-900 font-bold text-xl">3</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-burgundy-700 mb-3">Mandat Generasi (Parenting & Pemuridan)</h3>
              <p className="font-montserrat text-darkBrown-800 leading-relaxed">
                Memperlengkapi orang tua dan pemimpin rohani membentuk generasi "Anak Terang" yang kuat dalam iman dan 
                bijak menghadapi perkembangan teknologi.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-darkBrown-900 font-bold text-xl">4</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-burgundy-700 mb-3">Aksi Berdampak</h3>
              <p className="font-montserrat text-darkBrown-800 leading-relaxed">
                Menggerakkan jemaat menghidupi keselamatan melalui pelayanan nyata—menjadi garam dan terang di tengah masyarakat.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-2xl p-8 border-l-4 border-gold-500">
            <p className="font-playfair text-xl text-burgundy-800 leading-relaxed italic">
              "Kami percaya: ketika manusia dipulihkan dalam Kristus, ia tidak hanya menjadi kuat di dalam, 
              tetapi juga menjadi berkat ke luar."
            </p>
          </div>
        </section>

        {/* Dasar Alkitab */}
        <section className="mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-8 gradient-text text-center">Dasar Pelayanan</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400 mx-auto mb-12"></div>
          <div className="glass rounded-2xl p-10 shadow-xl">
            <p className="font-montserrat text-lg text-darkBrown-800 leading-relaxed mb-6">
              Dasar pelayanan kami bersumber dari <strong className="text-burgundy-700">1 Tesalonika 5:23</strong>, doa pengudusan yang menegaskan 
              kehendak Allah bagi umat-Nya:
            </p>
            <blockquote className="font-playfair text-2xl text-burgundy-800 italic border-l-4 border-gold-500 pl-8 py-4 my-8">
              "Semoga Allah damai sejahtera menguduskan kamu seluruhnya dan semoga roh, jiwa dan tubuhmu terpelihara sempurna 
              dengan tak bercacat pada kedatangan Yesus Kristus, Tuhan kita."
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

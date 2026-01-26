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
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-16">
          <Image 
            src="/logo/logo.png" 
            alt="Rumah Pemuridan Logo" 
            width={120}
            height={120}
            className="mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 text-center">
            Tentang Rumah Pemuridan
          </h1>
          <p className="text-lg text-stone-600 text-center max-w-2xl">
            Platform pelayanan dan edukasi rohani dari <strong>Tripartite Impact Foundation</strong>
          </p>
        </div>

        {/* Profil Section */}
        <section className="mb-16 pb-16 border-b border-stone-200">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">Profil</h2>
          
          <div className="prose prose-stone prose-lg max-w-none">
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>Rumah Pemuridan</strong> (rumahpemuridan.web.id) adalah platform pelayanan dan edukasi rohani dari 
              <strong> Tripartite Impact Foundation</strong>, sebuah lembaga transformasi manusia yang berfokus pada 
              pemulihan keutuhan manusia secara menyeluruh—<strong>roh, jiwa, dan tubuh</strong>—di dalam Kristus.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              Kami hadir untuk menolong umat Tuhan memahami bahwa keselamatan dalam Yesus Kristus bukan hanya menyentuh 
              dimensi spiritual secara sempit, melainkan merupakan karya Allah yang memulihkan totalitas manusia dalam 
              seluruh aspek kehidupannya. Karena itu, Injil bukan sekadar kabar baik untuk kehidupan kekal, tetapi juga 
              kabar pemulihan untuk kehidupan hari ini—sehingga setiap pribadi dapat hidup sehat secara rohani, seimbang 
              secara mental, teguh secara moral, dan berdampak nyata bagi generasi serta masyarakat.
            </p>

            <div className="bg-stone-50 border-l-4 border-stone-400 p-6 my-8">
              <p className="text-stone-800 italic mb-2">
                "Semoga Allah damai sejahtera menguduskan kamu seluruhnya dan semoga roh, jiwa dan tubuhmu terpelihara sempurna…"
              </p>
              <p className="text-sm text-stone-600">— 1 Tesalonika 5:23</p>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Ayat ini menegaskan bahwa Allah sendiri adalah pelaku pengudusan, yang memelihara umat-Nya dalam perjalanan 
              pemulihan yang terus bertumbuh sampai pada kedatangan Yesus Kristus.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              Tripartite Impact Foundation meyakini bahwa manusia diciptakan dalam gambar dan rupa Allah (Imago Dei) sebagai 
              pribadi yang utuh. Namun dosa merusak keselarasan itu: manusia menjadi rapuh secara spiritual, terluka secara 
              batin, dan menyimpang secara moral. Karena itu, pemulihan di dalam Kristus tidak bisa parsial.
            </p>

            <div className="my-8">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Kami berdiri menolak dua ekstrem di zaman ini:</h3>
              <ol className="list-decimal list-inside space-y-2 text-stone-700">
                <li>Spiritualitas yang mengabaikan jiwa dan tubuh, dan</li>
                <li>Humanisme yang menghapus dimensi roh serta menjauhkan Kristus dari pusat kehidupan.</li>
              </ol>
            </div>

            <p className="text-stone-700 leading-relaxed">
              Kami percaya, <strong>Kristus memulihkan manusia secara total</strong>, dan keselamatan sejati selalu melahirkan 
              pengudusan yang nyata dalam kehidupan sehari-hari.
            </p>
          </div>
        </section>

        {/* Visi Section */}
        <section className="mb-16 pb-16 border-b border-stone-200">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">Visi</h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            Menjadi pusat edukasi rohani dan transformasi manusia sejati, yang memulihkan dan mengutuhkan Imago Dei 
            dalam terang Injil, untuk melahirkan Generasi Emas yang sehat secara spiritual dan mental, matang dalam 
            karakter, serta menjadi alat kemuliaan Tuhan di tengah tantangan zaman.
          </p>
        </section>

        {/* Misi Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">Misi</h2>
          <p className="text-stone-700 leading-relaxed mb-6">
            Misi pelayanan kami dijalankan melalui empat pilar utama:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">1. Restorasi Gambar Allah</h3>
              <p className="text-stone-700 leading-relaxed">
                Mengajarkan pemulihan roh–jiwa–tubuh sebagai satu kesatuan di dalam Kristus.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">2. Literasi Mental–Spiritual</h3>
              <p className="text-stone-700 leading-relaxed">
                Membekali umat Tuhan menghadapi krisis mental, adiksi digital, dan degradasi moral secara tegas namun penuh kasih.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">3. Mandat Generasi (Parenting & Pemuridan)</h3>
              <p className="text-stone-700 leading-relaxed">
                Memperlengkapi orang tua dan pemimpin rohani membentuk generasi "Anak Terang" yang kuat dalam iman dan 
                bijak menghadapi perkembangan teknologi.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">4. Aksi Berdampak</h3>
              <p className="text-stone-700 leading-relaxed">
                Menggerakkan jemaat menghidupi keselamatan melalui pelayanan nyata—menjadi garam dan terang di tengah masyarakat.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-stone-50 rounded-sm">
            <p className="text-stone-800 leading-relaxed italic">
              "Kami percaya: ketika manusia dipulihkan dalam Kristus, ia tidak hanya menjadi kuat di dalam, 
              tetapi juga menjadi berkat ke luar."
            </p>
          </div>
        </section>

        {/* Dasar Alkitab */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-6">Dasar Pelayanan</h2>
          <div className="bg-stone-100 border border-stone-200 p-8 rounded-sm">
            <p className="text-lg text-stone-800 leading-relaxed mb-4">
              Dasar pelayanan kami bersumber dari <strong>1 Tesalonika 5:23</strong>, doa pengudusan yang menegaskan 
              kehendak Allah bagi umat-Nya:
            </p>
            <blockquote className="text-xl text-stone-900 italic border-l-4 border-stone-400 pl-6 my-6">
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

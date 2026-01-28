export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-darkBrown-900 to-darkBrown-950 text-cream-100 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-cinzel text-xl font-bold text-gold-400 mb-4">Rumah Pemuridan</h3>
            <p className="font-montserrat text-sm text-cream-200 leading-relaxed">
              Bertumbuh bersama dalam kasih Kristus melalui pemuridan yang berkualitas dan komunitas yang saling mengasihi.
            </p>
          </div>
          
          <div>
            <h3 className="font-cinzel text-xl font-bold text-gold-400 mb-4">Navigasi</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li>
                <a href="/" className="text-cream-200 hover:text-gold-300 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="/tentang" className="text-cream-200 hover:text-gold-300 transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="/news" className="text-cream-200 hover:text-gold-300 transition-colors">Berita</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-cinzel text-xl font-bold text-gold-400 mb-4">Kontak</h3>
            <p className="font-montserrat text-sm text-cream-200">
              Hubungi kami untuk informasi lebih lanjut tentang program dan kegiatan kami.
            </p>
          </div>
        </div>
        
        <div className="border-t border-cream-700/30 pt-8 text-center">
          <p className="font-montserrat text-sm text-cream-300">
            &copy; {new Date().getFullYear()} <span className="text-gold-400 font-semibold">Digital Ministry Center</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

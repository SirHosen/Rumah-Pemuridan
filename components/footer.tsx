export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-stone-200 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-stone-500 text-sm text-center">
          © {currentYear} Rumah Pemuridan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

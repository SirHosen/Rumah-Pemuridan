export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-stone-200 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center space-y-2">
          <p className="text-stone-700 font-medium">
            Rumah Pemuridan
          </p>
          <p className="text-sm text-stone-500">
            Platform pelayanan dari Tripartite Impact Foundation
          </p>
          <p className="text-sm text-stone-500">
            © {currentYear} Tripartite Impact Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

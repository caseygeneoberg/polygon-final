export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="container-tight py-10 text-sm text-slate-600 grid md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <img src="/polygon-logo.png" alt="Polygon Offers" className="h-12 w-auto" />
          <p>We buy houses nationwide with fair cash offers and fast closings.</p>
          <div className="flex gap-4 text-slate-500">
            <a href="#">Facebook</a><a href="#">X</a><a href="#">Instagram</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:underline" href="/">Home</a></li>
            <li><a className="hover:underline" href="/sellers">Sell Your House</a></li>
            <li><a className="hover:underline" href="/buyers">Buyer Network</a></li>
            <li><a className="hover:underline" href="#lead-form">Get Cash Offer</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <ul className="mt-3 space-y-1">
            <li>(949) 779-8949</li>
            <li>info@polygonoffers.com</li>
            <li>Nationwide Service</li>
          </ul>
        </div>
      </div>
      <div className="py-6 border-t border-slate-200 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Polygon Offers. All rights reserved.
      </div>
    </footer>
  )
}
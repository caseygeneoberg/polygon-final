import { Link, NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="container-tight flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/polygon-logo.png" alt="Polygon Offers" className="h-16 md:h-20 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-brand-600' : 'text-slate-700 hover:text-slate-900'}>Home</NavLink>
          <NavLink to="/sellers" className={({isActive}) => isActive ? 'text-brand-600' : 'text-slate-700 hover:text-slate-900'}>Sellers</NavLink>
          <NavLink to="/buyers" className={({isActive}) => isActive ? 'text-brand-600' : 'text-slate-700 hover:text-slate-900'}>Buyers</NavLink>
        </nav>
        <a href="#lead-form" className="btn-cta">Call Now</a>
      </div>
    </header>
  )
}
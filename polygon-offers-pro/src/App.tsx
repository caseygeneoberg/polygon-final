import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navigation />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  )
}
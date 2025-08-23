import BuyerForm from '../components/BuyerForm'

export default function Buyers() {
  return (
    <div>
      <section className="container-tight py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">Investment Opportunities</h1>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Join our network of investors and get access to exclusive off‑market deals.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
          <div className="card p-6 space-y-3">
            {[
              'Exclusive off‑market properties',
              'Below market value deals',
              'Single‑family, multi‑family, land, and more',
              'Direct access to motivated sellers',
              'Fast‑moving inventory updates'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="badge-dot bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-600">◆</div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <img src="/hero-house.jpg" alt="Deals" className="rounded-2xl w-full shadow-soft" />
        </div>
      </section>

      <section className="container-tight py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Join Our Buyer Network</h2>
            <p className="text-slate-600 mt-2">Free to join. No spam. Unsubscribe anytime.</p>
          </div>
          <BuyerForm />
        </div>
      </section>

      <section className="container-tight py-10">
        <h2 className="text-2xl font-bold">What Types of Properties Do We Have?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {title:'Single Family Homes', sub:'Fix and flip opportunities'},
            {title:'Multi‑Family', sub:'Cash flow investments'},
            {title:'Commercial', sub:'Retail and office spaces'}
          ].map((card,i)=>(
            <div key={i} className="card p-6">
              <div className="badge-dot bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-500 mb-3">🏠</div>
              <div className="font-semibold">{card.title}</div>
              <div className="text-sm text-slate-600">{card.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
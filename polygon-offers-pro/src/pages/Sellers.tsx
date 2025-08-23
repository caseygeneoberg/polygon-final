import LeadForm from '../components/LeadForm'

export default function Sellers() {
  return (
    <div>
      <section className="container-tight py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">Sell Your House the Easy Way</h1>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">No repairs. No fees. We can pay typical closing costs. Close in as little as 7–14 days. We buy houses nationwide.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
          <div className="card p-6 space-y-3">
            {[
              'Fair, transparent cash offers',
              'Any condition or situation (inherited, behind on payments, tenants, relocation)',
              'We work on your timeline',
              'No repairs, cleaning, or staging required',
              'No real estate agent fees or commissions'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="badge-dot bg-gradient-to-br from-emerald-500 via-lime-500 to-emerald-600">✓</div>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
            <div className="flex gap-4 pt-2">
              <a href="#lead-form" className="btn-cta">Get My Cash Offer</a>
              <a href="tel:+19497798849" className="btn-outline">Call (949) 779-8949</a>
            </div>
          </div>
          <img src="/hero-house.jpg" alt="Home" className="rounded-2xl w-full shadow-soft" />
        </div>
      </section>

      <section className="container-tight py-10">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {['Tell us about the property','Get a fair cash offer','Close & get paid'].map((title, i) => (
            <div className="card p-6" key={i}>
              <div className="badge-dot bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-500 mb-3">{i+1}</div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-slate-600 mt-2">{i===0?'Fill out our quick form or call us.':' '}{i===1?'We evaluate condition & market data and present a transparent offer.':''}{i===2?'Pick your close date. We handle the paperwork.':''}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-tight py-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Ready to see your options?</h2>
            <p className="text-slate-600 mt-2">Tell us a bit about the property and we’ll be in touch with a fair, no‑obligation offer.</p>
          </div>
          <LeadForm />
        </div>
      </section>
    </div>
  )
}
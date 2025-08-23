import LeadForm from '../components/LeadForm'

function Feature({title, desc, color}:{title:string, desc:string, color:string}){
  const map: Record<string,string> = {
    violet: 'from-violet-500 via-fuchsia-500 to-indigo-500',
    green: 'from-emerald-500 via-lime-500 to-emerald-600',
    pink: 'from-pink-500 via-rose-500 to-fuchsia-500',
    orange: 'from-orange-500 via-amber-500 to-rose-500',
    blue: 'from-sky-500 via-indigo-500 to-blue-600',
    slate: 'from-slate-500 via-slate-400 to-slate-600',
  }
  return (
    <div className="card p-6">
      <div className={`badge-dot bg-gradient-to-br ${map[color]} mb-4`}>★</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-slate-600 mt-2">{desc}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="container-tight py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Sell Your House <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600">Fast & Fair</span>
            </h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              Get a cash offer in 24 hours. No repairs, no fees. We buy houses in any condition nationwide.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#lead-form" className="btn-cta">Get My Cash Offer</a>
              <a href="tel:+19497798849" className="btn-outline">Call (949) 779-8949</a>
            </div>
            <ul className="mt-6 text-sm text-slate-600 grid grid-cols-3 gap-2">
              <li>⭐ 4.9/5 Rating</li>
              <li>✅ BBB Accredited</li>
              <li>🚚 7–14 Day Close</li>
            </ul>
          </div>
          <div className="justify-self-center">
            <img src="/hero-house.jpg" alt="House" className="w-full max-w-md rounded-2xl shadow-soft" />
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="container-tight py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature color="violet" title="Fair Cash Offers" desc="Transparent pricing with no hidden fees. Competitive offers within 24 hours." />
          <Feature color="green" title="No Repairs Needed" desc="Sell as‑is. Any condition, any situation, we handle everything." />
          <Feature color="pink" title="Quick Closing" desc="Close in as little as 7–14 days. Your timeline comes first." />
          <Feature color="orange" title="No Fees or Commissions" desc="We can cover typical seller closing costs. No agent commissions." />
          <Feature color="blue" title="Nationwide Service" desc="Local expertise with national reach across the U.S." />
          <Feature color="slate" title="Trusted & Professional" desc="Hundreds of happy sellers. Your satisfaction is our priority." />
        </div>
      </section>

      {/* CTA GRADIENT + FORM */}
      <section className="py-16">
        <div className="bg-brand-gradient">
          <div className="container-tight py-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Get Your Cash Offer Today</h2>
            <p className="text-white/90 text-center mt-2">Fill out the form below and get a fair cash offer within 24 hours.</p>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="text-white/95 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="badge-dot bg-white/20">1</div>
                  <p>Tell us about the property.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="badge-dot bg-white/20">2</div>
                  <p>Receive a transparent cash offer.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="badge-dot bg-white/20">3</div>
                  <p>Close on your schedule and get paid.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-1 shadow-soft">
                <div className="rounded-2xl p-6">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-tight py-14">
        <h2 className="text-3xl font-bold text-center">What Our Customers Say</h2>
        <p className="text-slate-600 text-center">Don&apos;t just take our word for it</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {name:'Sarah M.', city:'Dallas, TX', quote:'Polygon Offers made selling my inherited house so easy. They handled everything and closed in just 10 days. Highly recommend!'},
            {name:'Mike R.', city:'Phoenix, AZ', quote:'Professional, transparent, and fair. They bought my house as-is and I didn’t have to deal with repairs or showings.'},
            {name:'Jennifer L.', city:'Atlanta, GA', quote:'I needed to sell quickly. Polygon Offers gave me a fair price and closed on my timeline. Thank you!'}
          ].map((t,i)=> (
            <div key={i} className="card p-6">
              <div className="text-amber-500">★★★★★ <span className="text-slate-600 text-sm">5.0</span></div>
              <p className="mt-3 text-slate-700">&quot;{t.quote}&quot;</p>
              <div className="mt-4 text-sm font-medium">{t.name}</div>
              <div className="text-xs text-slate-500">{t.city}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
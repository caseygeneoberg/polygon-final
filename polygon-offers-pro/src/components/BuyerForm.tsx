import { useState } from 'react'

export default function BuyerForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.currentTarget)
    const payload: Record<string, string> = {}
    fd.forEach((v,k) => payload[k] = String(v))
    try {
      const res = await fetch('https://formsubmit.co/ajax/darrin8to24rei@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ _subject: 'Polygon Offers Buyer Lead', lead_type: 'buyer', ...payload })
      })
      if (!res.ok) throw new Error('bad')
      setStatus('ok'); e.currentTarget.reset()
    } catch { setStatus('error') }
  }

  return (
    <form id="buyer-form" onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="border rounded-xl px-4 py-3" name="name" placeholder="Full name" required />
        <input className="border rounded-xl px-4 py-3" name="email" type="email" placeholder="Email" required />
        <input className="border rounded-xl px-4 py-3" name="phone" placeholder="Phone" />
        <input className="border rounded-xl px-4 py-3" name="city" placeholder="Target city / area" />
        <input className="border rounded-xl px-4 py-3" name="budget" placeholder="Max budget (e.g., $450k)" />
        <input className="border rounded-xl px-4 py-3" name="beds_baths" placeholder="Beds/Baths (e.g., 3/2)" />
      </div>
      <textarea className="border rounded-xl px-4 py-3 w-full" name="criteria" placeholder="Notes (condition, lot size, ARV, timeline, etc.)"></textarea>
      <button type="submit" className="btn-cta w-full md:w-auto">{status === 'sending' ? 'Joining…' : 'Join Buyer Network'}</button>
      {status === 'ok' && <p className="text-green-600">You’re in! We’ll send matching deals.</p>}
      {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  )
}
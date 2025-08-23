import { useState } from 'react'

export default function LeadForm() {
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
        body: JSON.stringify({ _subject: 'Polygon Offers Lead', ...payload })
      })
      if (!res.ok) throw new Error('bad')
      setStatus('ok'); e.currentTarget.reset()
    } catch { setStatus('error') }
  }

  return (
    <form id="lead-form" onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="border rounded-xl px-4 py-3" name="name" placeholder="Full name" required />
        <input className="border rounded-xl px-4 py-3" name="phone" placeholder="Phone" />
        <input className="border rounded-xl px-4 py-3 md:col-span-2" name="email" type="email" placeholder="Email" required />
        <input className="border rounded-xl px-4 py-3 md:col-span-2" name="address" placeholder="Property address" />
        <textarea className="border rounded-xl px-4 py-3 md:col-span-2" name="message" placeholder="Tell us about your property"></textarea>
      </div>
      <button type="submit" className="btn-cta w-full md:w-auto">{status === 'sending' ? 'Sending…' : 'Get My Cash Offer'}</button>
      {status === 'ok' && <p className="text-green-600">Thanks! We’ll be in touch shortly.</p>}
      {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
    </form>
  )
}
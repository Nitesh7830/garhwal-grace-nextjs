'use client'
import { useMemo, useState } from 'react'

type Item = { label:string; price:number }
type Group = { title:string; items: Item[] }

const GROUPS: Group[] = [
  {
    title: "🍫 Chocolate Waxing Price List",
    items: [
      { label: "Upper Lips", price: 20 },
      { label: "Under Arms", price: 100 },
      { label: "Arms (Half)", price: 200 },
      { label: "Arms (Full)", price: 250 },
      { label: "Legs (Full)", price: 350 },
      { label: "Full Body (Without Bikini)", price: 1300 },
      { label: "Full Body (With Bikini)", price: 1700 }
    ]
  },
  {
    title: "💅 Hand & Foot Care",
    items: [
      { label: "VLCC Manicure", price: 400 },
      { label: "VLCC Pedicure", price: 500 }
    ]
  },
  {
    title: "🌸 Facial Price List",
    items: [
      { label: "Fruit Facial (VLCC)", price: 600 },
      { label: "Fruit Facial (Fresh Fruit)", price: 1000 },
      { label: "Anti-Tan Facial (VLCC)", price: 600 },
      { label: "Radiant Gold Facial (Lotus)", price: 1200 },
      { label: "O3+ Whitening Facial", price: 1500 }
    ]
  }
]

export default function RatesAccordion(){
  const [selected, setSelected] = useState<Record<string, boolean>>({})

  const total = useMemo(()=>Object.entries(selected).reduce((sum,[k,v])=>{
    if(!v) return sum
    // price encoded at end of key
    const p = Number(k.split('::').pop() || 0)
    return sum + p
  },0),[selected])

  const toggle = (key:string) => setSelected(prev => ({...prev, [key]: !prev[key]}))

  const sendWhatsApp = () => {
    const businessWhatsApp = '919999999999' // <-- replace with your number (no +)
    const chosen = Object.keys(selected).filter(k=>selected[k]).map(k=>{
      const [label, price] = k.split('::')
      return `• ${label} – ₹${price}`
    })
    const msg = `Hi Garhwal Grace,%0AI'm interested in:%0A${chosen.join('%0A')}%0ATotal: ₹${total}%0APlease help me book a slot.`
    window.open(`https://wa.me/${businessWhatsApp}?text=${msg}`, '_blank')
  }

  return (
    <section id="rates" className="section bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="section-title"><h2>Makeup &amp; Beauty Service Rate List</h2></div>

        <div className="space-y-4">
          {GROUPS.map((g, gi)=> (
            <details key={gi} className="rounded-xl shadow-soft overflow-hidden">
              <summary className="bg-gradient-to-r from-primary to-accent text-white px-5 py-3 text-lg cursor-pointer flex justify-between items-center">
                <span>{g.title}</span>
                <span className="text-2xl leading-none">+</span>
              </summary>
              <div className="bg-white p-5">
                {g.items.map((it, ii)=>{
                  const key = `${it.label}::${it.price}`
                  const checked = !!selected[key]
                  return (
                    <label key={ii} className="flex items-center justify-between border-b last:border-b-0 py-2 cursor-pointer hover:bg-zinc-50 px-2 rounded">
                      <span className="flex items-center gap-3">
                        <input type="checkbox" className="scale-125 accent-[var(--primary)]" checked={checked} onChange={()=>toggle(key)} />
                        {it.label}
                      </span>
                      <span className="text-primaryDark font-semibold">₹{it.price}</span>
                    </label>
                  )
                })}
              </div>
            </details>
          ))}
        </div>

        <div className="mx-auto w-fit mt-8 px-6 py-4 rounded-xl bg-gradient-to-r from-[#ffe0dc] to-[#fff4e0] text-primaryDark font-semibold shadow-soft text-lg">
          Total: ₹{total.toFixed(2)}
        </div>

        <div className="text-center mt-6">
          <button onClick={sendWhatsApp} className="px-6 py-3 rounded-full bg-primary hover:bg-primaryDark text-white shadow-soft transition">
            Book on WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
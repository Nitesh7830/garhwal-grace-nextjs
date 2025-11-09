export default function Footer(){
  return (
    <footer className="bg-[#111827] text-zinc-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-accent text-lg font-semibold mb-3">Garhwal Grace Makeover Lounge</h3>
          <p>Traditional makeup artistry from the heart of Uttarakhand, blending cultural heritage with modern beauty techniques.</p>
        </div>
        <div>
          <h3 className="text-accent text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            {['home','about','services','rates','contact'].map(s => (
              <li key={s}><a href={'#'+s} className="hover:text-accent transition">{s[0].toUpperCase()+s.slice(1)}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-accent text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-1">
            <li>Bridal Makeup</li>
            <li>Party Glam</li>
            <li>Herbal Facials</li>
            <li>Waxing</li>
            <li>Manicure &amp; Pedicure</li>
          </ul>
        </div>
        <div>
          <h3 className="text-accent text-lg font-semibold mb-3">Contact Info</h3>
          <p>Dehradun, Uttarakhand</p>
          <p>+91 99999 99999</p>
          <p>info@garhwalgrace.in</p>
        </div>
      </div>
      <div className="text-center border-t border-zinc-700 mt-8 pt-6 text-sm">
        © 2025 Garhwal Grace Makeover Lounge | Traditional Makeup from the Himalayas
      </div>
    </footer>
  )
}
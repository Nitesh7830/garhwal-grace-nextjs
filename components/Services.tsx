export default function Services(){
  return (
    <section id="services" className="section bg-gradient-to-r from-[#fff8f5] to-[#fffdf9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-title">
          <h2>Our Signature Services</h2>
          <p className="text-zinc-600 mt-2">Pick multiple services and book via WhatsApp in one click.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard img="https://i.pinimg.com/736x/c0/af/b3/c0afb37a8c9b80256af438b6dd0684fb.jpg" title="Uttarakhandi Bridal Look" desc="Authentic Pichora, Nath & red-gold tones, crafted with elegance and traditional techniques." />
          <ServiceCard img="https://img.freepik.com/free-photo/elegant-indian-bride-adorning-herself-with-jewelry_23-2151996280.jpg" title="Party & Engagement Glam" desc="From minimalist shimmer to bold royal glow — every style customized to your personality." />
          <ServiceCard img="https://sikaraclinics.com/wp-content/uploads/2025/05/What-is-Hydrafacial.webp" title="Hydra & Herbal Facials" desc="Infused with Himalayan herbs for deep hydration and radiance. Rejuvenate your skin naturally." />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ img, title, desc }: { img:string, title:string, desc:string }){
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:-translate-y-2 hover:shadow-card transition">
      <div className="h-[250px] w-full bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-primary text-xl font-semibold mb-1">{title}</h3>
        <p className="text-zinc-600">{desc}</p>
      </div>
    </div>
  )
}
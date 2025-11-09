export default function Testimonials(){
  return (
    <section className="section bg-[#fff8f5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-title"><h2>What Our Clients Say</h2></div>
        <div className="grid gap-6 md:grid-cols-3">
          <TestiCard
            text="Vinni's bridal makeup made me feel like a traditional Garhwali queen! The attention to detail was incredible."
            name="Priya Singh" role="Bride" img="https://randomuser.me/api/portraits/women/32.jpg" />
          <TestiCard
            text="The herbal facial was so refreshing! My skin has never felt better. Highly recommend their services."
            name="Anjali Rawat" role="Regular Client" img="https://randomuser.me/api/portraits/women/44.jpg" />
          <TestiCard
            text="For my sister's wedding, they created the perfect traditional look that honored our culture beautifully."
            name="Neha Bisht" role="Bride's Sister" img="https://randomuser.me/api/portraits/women/68.jpg" />
        </div>
      </div>
    </section>
  )
}

function TestiCard({text, name, role, img}:{text:string,name:string,role:string,img:string}){
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft hover:-translate-y-1 transition relative">
      <p className="italic text-zinc-600 mb-5">“{text}”</p>
      <div className="flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="text-primaryDark font-semibold">{name}</h4>
          <p className="text-zinc-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}
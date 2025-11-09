'use client'
import { useForm } from 'react-hook-form'

type Form = { firstName:string; lastName:string; email:string; phone?:string; service?:string; message:string }

export default function Contact(){
  const { register, handleSubmit, reset } = useForm<Form>()
  const onSubmit = (data: Form) => {
    alert(`Thank you, ${data.firstName}! We will contact you soon.`)
    reset()
  }
  return (
    <section id="contact" className="section bg-gradient-to-br from-light to-[#fff8f5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p className="text-zinc-600 mt-2 max-w-xl mx-auto">We&apos;d love to hear from you. Reach out to us using the form or call directly.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <InfoCard title="Our Studio" lines={["Garhwal Grace Makeover Lounge","Dehradun, Uttarakhand 248001","India"]} actionText="Get Directions →" href="#" />
            <InfoCard title="Contact Us" lines={["Phone: +91 99999 99999","Email: info@garhwalgrace.in","Hours: Mon–Sat 10am–8pm"]} actionText="Call Now →" href="tel:+919999999999" primary />
          </div>
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-card relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent" />
            <h3 className="text-primaryDark text-xl font-semibold text-center mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input {...register('firstName', {required:true})} placeholder="First Name" className="input" />
                <input {...register('lastName', {required:true})} placeholder="Last Name" className="input" />
              </div>
              <input type="email" {...register('email', {required:true})} placeholder="Email Address" className="input" />
              <input type="tel" {...register('phone')} placeholder="Phone Number" className="input" />
              <select {...register('service')} defaultValue="" className="input">
                <option value="" disabled>Select Service Type</option>
                <option value="bridal">Bridal Makeup</option>
                <option value="party">Party Glam</option>
                <option value="facial">Facial Treatment</option>
                <option value="waxing">Waxing</option>
                <option value="other">Other</option>
              </select>
              <textarea {...register('message', {required:true})} rows={5} placeholder="Your Message..." className="input resize-y" />
              <button className="w-full px-6 py-3 rounded-lg bg-primary hover:bg-primaryDark text-white shadow-soft transition">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .input{ @apply w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition; }
      `}</style>
    </section>
  )
}

function InfoCard({title, lines, actionText, href, primary}:{title:string, lines:string[], actionText:string, href:string, primary?:boolean}){
  return (
    <div className={"rounded-2xl p-6 shadow-soft border-l-4 "+(primary?'border-primary':'border-accent')}>
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-white grid place-content-center mb-3 text-xl shadow-soft">📍</div>
      <h3 className="text-primaryDark text-lg font-semibold mb-1">{title}</h3>
      <div className="text-zinc-600">
        {lines.map((l,i)=>(<p key={i}>{l}</p>))}
      </div>
      <a href={href} className="inline-block mt-3 text-primary relative after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">{actionText}</a>
    </div>
  )
}
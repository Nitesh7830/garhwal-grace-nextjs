'use client'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="section pt-40 bg-[linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.45)),url('https://img.freepik.com/free-vector/realistic-makeup-background_23-2149373139.jpg')] bg-cover bg-center text-white text-center">
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] text-accent drop-shadow-md">Garhwal Grace Makeover Lounge</h1>
        <p className="mt-4 text-white/90">Traditional • Bridal • Party • Hydra & Facial Treatments</p>
        <p className="italic text-amber-200 mt-2">“Where Uttarakhand&apos;s tradition meets timeless beauty.”</p>
        <a href="#rates" className="inline-block mt-6 px-6 py-3 rounded-full bg-primary hover:bg-primaryDark shadow-soft transition">Book Your Look</a>
      </motion.div>
    </section>
  )
}
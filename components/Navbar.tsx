'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = "relative font-medium text-zinc-700 hover:text-primary transition"
  return (
    <nav className={clsx("fixed top-0 left-0 w-full z-50 transition", scrolled ? "bg-white/95 shadow" : "bg-white/90")}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-primaryDark">
          <span className="text-2xl">👑</span>
          <span className="font-['Playfair_Display'] text-xl">Garhwal Grace</span>
        </a>
        <button className="md:hidden text-primaryDark text-2xl" onClick={()=>setOpen(v=>!v)}>☰</button>
        <ul className={clsx("md:flex gap-8 items-center", open ? "absolute left-0 right-0 top-full bg-white px-6 py-4 shadow md:static md:p-0" : "hidden md:flex")}>
          {["Home","About","Gallery","Services","Rates","Contact"].map((t)=>{
            const href = "#"+t.toLowerCase()
            return <li key={t}><a onClick={()=>setOpen(false)} className={linkCls} href={href}>{t}</a></li>
          })}
        </ul>
      </div>
    </nav>
  )
}
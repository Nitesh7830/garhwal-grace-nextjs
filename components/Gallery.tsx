'use client'
import Image from 'next/image'
import { GALLERY_IMAGES } from '@/lib/constants'
import { useEffect, useRef, useState } from 'react'

export default function Gallery(){
  const [index, setIndex] = useState(0)
  const showRef = useRef(3)

  const next = () => setIndex(i => (i+1) % (GALLERY_IMAGES.length - showRef.current + 1))
  const prev = () => setIndex(i => (i-1 + (GALLERY_IMAGES.length - showRef.current + 1)) % (GALLERY_IMAGES.length - showRef.current + 1))

  useEffect(()=>{
    const handle = setInterval(next, 5000)
    const onResize = () => {
      showRef.current = window.innerWidth <= 768 ? 1 : window.innerWidth <= 992 ? 2 : 3
      setIndex(0)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => { clearInterval(handle); window.removeEventListener('resize', onResize) }
  }, [])

  const widthPercent = 100 / showRef.current

  return (
    <section id="gallery" className="section bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-title"><h2>Our Work &amp; Transformations</h2></div>
        <div className="relative overflow-hidden rounded-2xl shadow-card">
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-primaryDark rounded-full px-3 py-2 text-xl shadow hover:scale-105 transition z-10">‹</button>
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * widthPercent}%)`}}>
            {GALLERY_IMAGES.map((src, i)=>(
              <div key={i} className="basis-[33.333%] md:basis-[33.333%] sm:basis-1/2 xs:basis-full flex-shrink-0 p-3" style={{flexBasis: `${widthPercent}%`}}>
                <div className="relative w-full h-[340px] rounded-xl overflow-hidden">
                  <Image src={src} alt={`Gallery ${i+1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-primaryDark rounded-full px-3 py-2 text-xl shadow hover:scale-105 transition z-10">›</button>
        </div>
      </div>
    </section>
  )
}
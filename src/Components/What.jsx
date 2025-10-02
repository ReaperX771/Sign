import React, { useEffect, useRef, useState } from 'react'

function What() {
  const boxesRef = useRef([])
  const [visible, setVisible] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = boxesRef.current.indexOf(entry.target)
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisible((prev) => {
                const updated = [...prev]
                updated[index] = true
                return updated
              })
            } else {
              setVisible((prev) => {
                const updated = [...prev]
                updated[index] = false
                return updated
              })
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box)
    })

    return () => observer.disconnect()
  }, [])

  const features = [
    { title: 'Community First', desc: 'A global network where members connect, collaborate, and grow together.' },
    { title: 'Earn Oranges', desc: 'Recognition for every meaningful contribution — your activity matters, and it shows.' },
    { title: 'Shape the Future', desc: 'Be part of a growing dynasty that influences the next wave of Sign’s ecosystem.' },
    { title: 'Identity & Symbols', desc: 'Showcase your unique style with SignGlasses and dynasty badges that reflect who you are.' },
    { title: 'Events & Challenges', desc: 'Join live events, competitions, and seasonal challenges to rise in the ranks.' },
    { title: 'Recognition & Status', desc: 'Your achievements and Oranges reflect your standing within the dynasty.' },
    { title: 'Global Movement', desc: 'Be part of an expanding worldwide community built on trust, creativity, and collaboration.' },
    { title: 'Future Utility', desc: 'Oranges will power more opportunities, benefits, and ecosystem rewards as Sign grows.' },
  ]

  // Different entry directions
  const directions = [
    '-translate-x-10', // left
    'translate-x-10',  // right
    'translate-y-10',  // bottom
    '-translate-y-10', // top
  ]

  return (
    <section id='what' className="bg-white py-20 px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What is <span className="text-[#fc4700]">Orange Dynasty?</span>
        </h2>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-12">
          Orange Dynasty is the community heartbeat of the <span className="font-semibold">Sign ecosystem</span>. 
          It’s where creators, dreamers, and innovators come together to build reputation, earn Oranges, 
          and grow as part of a global movement. More than just a platform, it’s a dynasty of ideas, 
          energy, and identity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center items-center xl:justify-items-center xl:items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (boxesRef.current[index] = el)}
              className={`p-8 bg-gradient-to-b from-orange-100 to-orange-200 rounded-2xl shadow-lg transform transition-all duration-700 w-full max-w-sm h-40 flex flex-col justify-between ${
                visible[index]
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : `opacity-0 ${directions[index % directions.length]}`
              }`}
            >
              <h3 className="text-2xl font-bold text-[#fc4700] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-800 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default What;
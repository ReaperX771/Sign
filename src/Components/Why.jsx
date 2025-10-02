import React, { useEffect, useRef, useState } from 'react'
import { FaUserShield, FaMedal, FaGlobe, FaUnlockAlt, FaUsers, FaGamepad } from 'react-icons/fa'

function Why() {
  const cardsRef = useRef([])
  const [visible, setVisible] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target)
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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const reasons = [
    { title: 'Grow Your Identity', desc: 'Stand out with dynasty badges and unique Sign identity that grows with you.', icon: <FaUserShield className="text-[#fc4700] text-3xl mb-3" /> },
    { title: 'Recognition for Effort', desc: 'Every contribution matters — earn Oranges and climb the dynasty ranks.', icon: <FaMedal className="text-[#fc4700] text-3xl mb-3" /> },
    { title: 'Connect Globally', desc: 'Meet creators, dreamers, and innovators worldwide who share your passion.', icon: <FaGlobe className="text-[#fc4700] text-3xl mb-3" /> },
    { title: 'Unlock Opportunities', desc: 'Access future perks, events, and collaborations powered by Oranges.', icon: <FaUnlockAlt className="text-[#fc4700] text-3xl mb-3" /> },
    { title: 'Be Part of Something Bigger', desc: 'Shape the direction of Sign’s ecosystem and leave your mark.', icon: <FaUsers className="text-[#fc4700] text-3xl mb-3" /> },
    { title: 'Fun & Challenges', desc: 'Join events, seasonal competitions, and have fun while growing your influence.', icon: <FaGamepad className="text-[#fc4700] text-3xl mb-3" /> },
  ]

  const directions = [
    '-translate-x-10', // left
    'translate-x-10',  // right
    'translate-y-10',  // bottom
    '-translate-y-10', // top
  ]

  return (
    <section id='why' className="bg-gray-50 py-20 px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Join <span className="text-[#fc4700]">Orange Dynasty?</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Orange Dynasty isn’t just a community — it’s a movement. Joining means
          growing your reputation, earning recognition, and becoming part of a
          global force that’s shaping the future of Sign.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center items-start">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`p-8 bg-gradient-to-b from-white to-orange-50 border border-[#fc4700] rounded-2xl shadow-md transform transition-all duration-700 w-full max-w-sm h-52 flex flex-col items-center justify-start text-center ${
                visible[index]
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : `opacity-0 ${directions[index % directions.length]}`
              }`}
            >
              {reason.icon}
              <h3 className="text-xl font-bold text-[#fc4700] mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-700 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why
import React, { useEffect, useRef, useState } from 'react'
import { FaUserPlus, FaHandsHelping, FaCoins, FaCrown } from 'react-icons/fa'

function How() {
  const stepsRef = useRef([])
  const [visible, setVisible] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepsRef.current.indexOf(entry.target)
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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      title: 'Join the Dynasty',
      desc: 'Sign up and claim your place in the Orange Dynasty community.',
      icon: <FaUserPlus className="text-[#fc4700] text-4xl mb-4" />,
    },
    {
      title: 'Contribute & Engage',
      desc: 'Share ideas, connect with others, and participate in the movement.',
      icon: <FaHandsHelping className="text-[#fc4700] text-4xl mb-4" />,
    },
    {
      title: 'Earn Oranges',
      desc: 'Every meaningful contribution is rewarded with Oranges you can grow.',
      icon: <FaCoins className="text-[#fc4700] text-4xl mb-4" />,
    },
    {
      title: 'Rise in Status',
      desc: 'Unlock badges, perks, and influence as your reputation grows.',
      icon: <FaCrown className="text-[#fc4700] text-4xl mb-4" />,
    },
  ]

  const directions = [
    '-translate-x-10', // slide from left
    'translate-x-10',  // slide from right
    'translate-y-10',  // slide from bottom
    '-translate-y-10', // slide from top
  ]

  return (
    <section id='how' className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How It <span className="text-[#fc4700] ">Works</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Getting started with Orange Dynasty is simple. Follow these steps and
          become part of a movement that rewards growth, creativity, and
          community.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className={`p-8 bg-gradient-to-b from-orange-50 to-orange-100 rounded-2xl shadow-md transform transition-all duration-700 w-full max-w-sm flex flex-col items-center text-center ${
                visible[index]
                  ? 'opacity-100 translate-x-0 translate-y-0'
                  : `opacity-0 ${directions[index % directions.length]}`
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-200 text-[#fc4700] font-bold mb-4">
                {index + 1}
              </div>
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default How;
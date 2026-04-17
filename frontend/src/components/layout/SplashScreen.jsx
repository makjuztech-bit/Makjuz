import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SplashScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide the splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onFinish, 800) // Call onFinish after fade out animation
    }, 2500)
    return () => clearTimeout(timer)
  }, [onFinish])

  if (!isVisible && !onFinish) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-1000  flex flex-col items-center justify-center bg-slate-950 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
        className="flex flex-col items-center justify-center"
      >
        <motion.img
          src="/makjus.png"
          alt="Makjuz Logo"
          className="h-28 md:h-40 w-auto object-contain drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 overflow-hidden"
        >
          <div className="h-1 w-48 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="h-full w-full bg-fuchsia-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

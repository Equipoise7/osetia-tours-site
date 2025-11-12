import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ScrollEffects.css'

const ScrollEffects = () => {
  const { scrollYProgress } = useScroll()
  const [particles, setParticles] = useState([])

  // Parallax эффекты
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.3, 0])

  useEffect(() => {
    // Создаем частицы для фона
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="scroll-effects">
      {/* Анимированные частицы */}
      <div className="particles-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Прогресс бар прокрутки */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Плавающие градиентные круги */}
      <motion.div
        className="floating-circle circle-1"
        style={{ y: y1, opacity }}
      />
      <motion.div
        className="floating-circle circle-2"
        style={{ y: y2, opacity }}
      />
    </div>
  )
}

export default ScrollEffects

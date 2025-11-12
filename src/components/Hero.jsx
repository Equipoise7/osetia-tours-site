import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaTelegram } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-overlay"></div>
      
      {/* Анимированные горные пики */}
      <motion.div 
        className="mountain-peaks"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <svg className="peaks-svg" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <motion.path
            d="M0,200 L0,150 L200,50 L400,120 L600,40 L800,100 L1000,60 L1200,130 L1200,200 Z"
            fill="rgba(30, 60, 114, 0.2)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,200 L0,170 L300,80 L500,140 L700,70 L900,120 L1200,90 L1200,200 Z"
            fill="rgba(42, 82, 152, 0.15)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <div className="hero-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Откройте для себя Северную Осетию
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Туры по горным ущельям • Экскурсии • Трансфер межгород
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="tel:+79001234567" className="btn btn-primary">
            <FaPhone /> Позвонить
          </a>
          <a href="https://wa.me/79001234567" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://t.me/yourusername" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <FaTelegram /> Telegram
          </a>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero

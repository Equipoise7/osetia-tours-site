import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaTelegram, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Свяжитесь с нами</h2>
        <p>Мы всегда на связи и готовы ответить на ваши вопросы</p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Телефон</h3>
              <a href="tel:+79001234567">+7 (900) 123-45-67</a>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Локация</h3>
              <p>Республика Северная Осетия-Алания</p>
            </div>
          </div>

          <div className="info-item">
            <FaClock className="info-icon" />
            <div>
              <h3>Режим работы</h3>
              <p>Ежедневно, 24/7</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-buttons"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Напишите нам</h3>
          <p>Выберите удобный способ связи</p>
          
          <motion.a
            href="tel:+79001234567"
            className="contact-btn phone-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone />
            <span>Позвонить</span>
          </motion.a>

          <motion.a
            href="https://wa.me/79001234567"
            className="contact-btn whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </motion.a>

          <motion.a
            href="https://t.me/yourusername"
            className="contact-btn telegram-btn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTelegram />
            <span>Telegram</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>&copy; 2024 Туры по Северной Осетии. Все права защищены.</p>
      </motion.footer>
    </section>
  )
}

export default Contact

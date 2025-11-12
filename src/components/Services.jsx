import { motion } from 'framer-motion'
import { FaCar, FaMountain, FaRoute, FaUsers } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaMountain />,
      title: 'Экскурсии по горам',
      description: 'Профессиональные гиды покажут самые живописные места Северной Осетии'
    },
    {
      icon: <FaRoute />,
      title: 'Туры по ущельям',
      description: 'Индивидуальные и групповые туры по горным маршрутам'
    },
    {
      icon: <FaCar />,
      title: 'Трансфер межгород',
      description: 'Комфортные поездки на современном автомобиле Toyota Alphard'
    },
    {
      icon: <FaUsers />,
      title: 'Индивидуальный подход',
      description: 'Подберем маршрут под ваши пожелания и возможности'
    }
  ]

  return (
    <section className="services">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Наши услуги</h2>
        <p>Комфорт и безопасность в каждой поездке</p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="car-showcase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="car-showcase-content">
          <div className="car-image">
            <img 
              src={import.meta.env.BASE_URL + 'images/alphard.png'}
              alt="Toyota Alphard — премиальный минивэн для комфортных путешествий"
              loading="lazy"
            />
          </div>
          <div className="car-description">
            <h3>Toyota Alphard</h3>
            <p>Премиальный минивэн для комфортных путешествий</p>
            <ul>
              <li>✓ Просторный салон до 7 мест</li>
              <li>✓ Климат-контроль</li>
              <li>✓ Кожаные сиденья</li>
              <li>✓ Панорамная крыша</li>
              <li>✓ Опытный водитель</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Services

import { motion } from 'framer-motion'
import './ToursGallery.css'

const tours = [
  {
    id: 1,
    title: 'Цейское ущелье',
    description: 'Живописное горное ущелье с водопадами и ледниками',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
  },
  {
    id: 2,
    title: 'Кармадонское ущелье',
    description: 'Термальные источники и горные пейзажи',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
  },
  {
    id: 3,
    title: 'Даргавс - Город мертвых',
    description: 'Древний некрополь с уникальной архитектурой',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
  },
  {
    id: 4,
    title: 'Фиагдонское ущелье',
    description: 'Горные тропы и средневековые башни',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80'
  },
  {
    id: 5,
    title: 'Куртатинское ущелье',
    description: 'Каньоны, водопады и древние святилища',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
  },
  {
    id: 6,
    title: 'Дигорское ущелье',
    description: 'Нетронутая природа и альпийские луга',
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80'
  }
]

const ToursGallery = () => {
  return (
    <section className="tours-gallery">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Популярные маршруты</h2>
        <p>Откройте красоту горных ущелий Северной Осетии</p>
      </motion.div>

      <div className="tours-grid">
        {tours.map((tour, index) => (
          <motion.div
            key={tour.id}
            className="tour-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="tour-image">
              <img src={tour.image} alt={tour.title} loading="lazy" />
              <div className="tour-overlay"></div>
            </div>
            <div className="tour-info">
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ToursGallery

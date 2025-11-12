import './AlphardPlaceholder.css'

const AlphardPlaceholder = () => {
  return (
    <div className="alphard-placeholder">
      <div className="car-silhouette">
        <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3c72" />
              <stop offset="100%" stopColor="#2a5298" />
            </linearGradient>
          </defs>
          
          {/* Кузов минивэна */}
          <path
            d="M 150 250 L 200 200 L 250 180 L 550 180 L 600 200 L 650 250 L 650 300 L 620 320 L 180 320 L 150 300 Z"
            fill="url(#carGradient)"
            opacity="0.9"
          />
          
          {/* Окна */}
          <path
            d="M 220 200 L 260 185 L 380 185 L 380 230 L 220 230 Z"
            fill="#4a90e2"
            opacity="0.6"
          />
          <path
            d="M 400 185 L 540 185 L 580 200 L 580 230 L 400 230 Z"
            fill="#4a90e2"
            opacity="0.6"
          />
          
          {/* Колеса */}
          <circle cx="240" cy="320" r="35" fill="#2c3e50" />
          <circle cx="240" cy="320" r="20" fill="#34495e" />
          <circle cx="560" cy="320" r="35" fill="#2c3e50" />
          <circle cx="560" cy="320" r="20" fill="#34495e" />
          
          {/* Фары */}
          <rect x="620" y="240" width="20" height="15" rx="3" fill="#fff" opacity="0.9" />
          <rect x="160" y="240" width="20" height="15" rx="3" fill="#fff" opacity="0.9" />
        </svg>
      </div>
      <div className="placeholder-text">
        <h4>📸 Разместите здесь фото вашего Toyota Alphard</h4>
        <p>Инструкция в файле: КАК_ДОБАВИТЬ_ФОТО_ALPHARD.md</p>
      </div>
    </div>
  )
}

export default AlphardPlaceholder

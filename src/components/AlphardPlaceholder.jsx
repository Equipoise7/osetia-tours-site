import './AlphardPlaceholder.css'

// Отображает реальное фото Alphard из публичной папки /images
// Если потребуется оптимизация — можно перенести картинку в src и использовать импорт.
const AlphardPlaceholder = () => {
  return (
    <div className="alphard-placeholder">
      <img
        src="/images/alphard.png"
        alt="Toyota Alphard — комфортный трансфер"
        className="alphard-image"
        loading="lazy"
      />
    </div>
  )
}

export default AlphardPlaceholder

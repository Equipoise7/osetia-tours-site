import './AlphardPlaceholder.css'

// Отображает реальное фото Alphard из публичной папки /images
// Если потребуется оптимизация — можно перенести картинку в src и использовать импорт.
const AlphardPlaceholder = () => {
  return (
    <div className="alphard-placeholder">
      <img
        src={import.meta.env.BASE_URL + 'images/alphard.png'}
        alt="Toyota Alphard — комфортный трансфер"
        className="alphard-image"
        loading="lazy"
        onError={(e) => { e.currentTarget.style.opacity = '0'; }}
      />
    </div>
  )
}

export default AlphardPlaceholder

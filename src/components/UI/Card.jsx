export function Card({ children, className = '', onClick, hover = false }) {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-800 border border-gray-700 rounded-xl
        ${hover ? 'hover:border-clinical-600 hover:bg-gray-750 transition-colors cursor-pointer' : ''}
        ${className}`}
    >
      {children}
    </div>
  )
}

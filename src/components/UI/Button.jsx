export function Button({ children, onClick, variant = 'primary', size = 'md', disabled, className = '', type = 'button' }) {
  const variants = {
    primary: 'bg-clinical-600 hover:bg-clinical-700 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-100',
    ghost: 'bg-transparent hover:bg-gray-700/50 text-gray-300',
    danger: 'bg-red-700 hover:bg-red-600 text-white',
    success: 'bg-green-700 hover:bg-green-600 text-white',
    outline: 'border border-gray-600 hover:bg-gray-700 text-gray-300',
  }
  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors
        ${variants[variant]} ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}`}
    >
      {children}
    </button>
  )
}

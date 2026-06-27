export function Badge({ children, variant = 'default', size = 'sm' }) {
  const variants = {
    default: 'bg-gray-700 text-gray-200',
    blue: 'bg-blue-900/60 text-blue-300',
    green: 'bg-green-900/60 text-green-300',
    red: 'bg-red-900/60 text-red-300',
    yellow: 'bg-yellow-900/60 text-yellow-300',
    purple: 'bg-purple-900/60 text-purple-300',
    critical: 'bg-red-600 text-white',
  }
  const sizes = { xs: 'px-1.5 py-0.5 text-xs', sm: 'px-2 py-0.5 text-xs', md: 'px-2.5 py-1 text-sm' }
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  )
}

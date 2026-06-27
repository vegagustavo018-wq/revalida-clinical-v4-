export function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-1 bg-gray-900 p-1 rounded-xl border border-gray-700 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1 min-w-fit justify-center
            ${active === tab.id
              ? 'bg-clinical-600 text-white shadow'
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'}`}
        >
          {tab.icon && <span>{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  )
}

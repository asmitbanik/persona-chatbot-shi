function PersonaSwitcher({ personas, active, onSwitch }) {
  return (
    <div className="flex space-x-2 bg-gray-100/60 p-1.5 rounded-full border border-gray-300 shadow-inner">
      {personas.map((p) => (
        <button
          key={p.id}
          onClick={() => onSwitch(p)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            active.id === p.id
              ? 'bg-white text-black shadow-md scale-105'
              : 'text-gray-600 hover:text-black hover:bg-gray-200/50'
          }`}
        >
          {p.name}
        </button>
      ))}
    </div>
  )
}

export default PersonaSwitcher
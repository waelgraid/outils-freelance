interface ReviewCardProps {
  name: string
  job: string
  review: string
  rating?: number
  toolName: string
}

export function ReviewCard({ name, job, review, rating = 5, toolName }: ReviewCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 my-6">
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map(i => (
          <span key={i} className={`text-sm ${i <= rating ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
        ))}
        <span className="ml-2 text-xs text-gray-400">via {toolName}</span>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed italic mb-3">"{review}"</p>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-800">{name}</span>
          <span className="text-xs text-gray-400 ml-1">· {job}</span>
        </div>
      </div>
    </div>
  )
}

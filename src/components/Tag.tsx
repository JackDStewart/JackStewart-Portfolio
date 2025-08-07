interface TagProps {
  tag: string
  isActive: boolean
  onClick: () => void
}

export function Tag({ tag, isActive, onClick }: TagProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-inter font-medium transition-all duration-200 ${
        isActive
          ? 'bg-primary text-white shadow-lg'
          : 'bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:bg-primary/10 hover:text-primary dark:hover:text-primary border border-gray-200 dark:border-gray-700'
      }`}
    >
      {tag}
    </button>
  )
}

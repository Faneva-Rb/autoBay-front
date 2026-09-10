import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Toolbar({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('mb-4 flex flex-col gap-3 sm:flex-row sm:items-center', className)}>
      {children}
    </div>
  )
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  className,
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}) {
  return (
    <div className={cn('relative flex-1 sm:max-w-xs', className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  )
}

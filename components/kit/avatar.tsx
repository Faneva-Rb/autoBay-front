import { cn } from '@/lib/utils'
import { initials } from '@/lib/format'

const sizeClasses = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-12 text-base',
}

export function Avatar({
  name,
  className,
  size = 'md',
}: {
  name: string
  className?: string
  size?: keyof typeof sizeClasses
}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary',
        sizeClasses[size],
        className,
      )}
      aria-hidden
    >
      {initials(name)}
    </span>
  )
}

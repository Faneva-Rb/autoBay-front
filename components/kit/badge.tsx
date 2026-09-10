import { cn } from '@/lib/utils'

export type Tone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple'

const toneClasses: Record<Tone, string> = {
  neutral: 'bg-muted text-muted-foreground',
  primary: 'bg-primary/10 text-primary dark:bg-primary/15',
  success: 'bg-emerald-500/12 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  warning: 'bg-amber-500/15 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  danger: 'bg-red-500/12 text-red-700 dark:bg-red-500/15 dark:text-red-400',
  info: 'bg-blue-500/12 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
  purple: 'bg-violet-500/12 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400',
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone
  dot?: boolean
}

export function Badge({ tone = 'neutral', dot = false, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {dot && <span className="size-1.5 rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  )
}

const statusToneMap: Record<string, Tone> = {
  // generic
  Active: 'success',
  Inactive: 'neutral',
  Available: 'success',
  Busy: 'warning',
  'On Leave': 'neutral',
  // appointments
  Scheduled: 'info',
  Confirmed: 'primary',
  'In Progress': 'warning',
  Completed: 'success',
  Cancelled: 'danger',
  'No Show': 'neutral',
  // repairs
  Draft: 'neutral',
  Pending: 'info',
  'Waiting for Parts': 'purple',
  'In Service': 'warning',
  // stock
  'In Stock': 'success',
  'Low Stock': 'warning',
  'Out of Stock': 'danger',
  // invoices / payments
  Sent: 'info',
  Paid: 'success',
  'Partially Paid': 'warning',
  Overdue: 'danger',
  Failed: 'danger',
  Refunded: 'purple',
  // priority
  Low: 'neutral',
  Medium: 'info',
  High: 'warning',
  Urgent: 'danger',
}

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const tone = statusToneMap[status] ?? 'neutral'
  return (
    <Badge tone={tone} dot className={className}>
      {status}
    </Badge>
  )
}

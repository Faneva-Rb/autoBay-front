import { TrendingUp, TrendingDown, type LucideIcon } from 'lucide-react'
import { Card } from '@/components/kit/card'
import { cn } from '@/lib/utils'

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendLabel,
}: {
  label: string
  value: string
  icon: LucideIcon
  trend?: number
  trendLabel?: string
}) {
  const positive = (trend ?? 0) >= 0
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
          <span className="text-2xl font-semibold tracking-tight tabular-nums">{value}</span>
        </div>
        <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
      </div>
      {trend !== undefined && (
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          <span
            className={cn(
              'inline-flex items-center gap-0.5 font-medium',
              positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400',
            )}
          >
            {positive ? <TrendingUp className="size-3.5" /> : <TrendingDown className="size-3.5" />}
            {positive ? '+' : ''}
            {trend}%
          </span>
          {trendLabel && <span className="text-muted-foreground">{trendLabel}</span>}
        </div>
      )}
    </Card>
  )
}

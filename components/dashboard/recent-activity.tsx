import {
  Users,
  Car,
  Wrench,
  FileText,
  CalendarDays,
  CreditCard,
  type LucideIcon,
} from 'lucide-react'
import { activities } from '@/lib/mock-data/activity'
import type { ActivityType } from '@/lib/types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/kit/card'
import { relativeTime } from '@/lib/format'

const iconMap: Record<ActivityType, LucideIcon> = {
  client: Users,
  vehicle: Car,
  repair: Wrench,
  invoice: FileText,
  appointment: CalendarDays,
  payment: CreditCard,
}

export function RecentActivity() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="flex flex-col">
          {activities.slice(0, 8).map((activity, i) => {
            const Icon = iconMap[activity.type]
            return (
              <li key={activity.id} className="flex gap-3 py-2.5">
                <div className="flex flex-col items-center">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <Icon className="size-4" />
                  </span>
                  {i < 7 && <span className="my-1 w-px flex-1 bg-border" aria-hidden />}
                </div>
                <div className="flex flex-col pb-1">
                  <span className="text-sm font-medium leading-snug">{activity.message}</span>
                  <span className="text-xs text-muted-foreground">{activity.detail}</span>
                  <span className="mt-0.5 text-xs text-muted-foreground/70">
                    {relativeTime(activity.timestamp)}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}

import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { appointments } from '@/lib/mock-data/appointments'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/kit/card'
import { StatusBadge } from '@/components/kit/badge'
import { Button } from '@/components/kit/button'

export function TodaysAppointments() {
  const today = appointments.filter((a) => a.date === '2025-02-24')

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Today&apos;s Appointments</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/appointments">
            View all
            <ArrowRight className="size-3.5" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="flex flex-col divide-y divide-border">
          {today.map((appt) => (
            <li key={appt.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <div className="flex w-14 shrink-0 flex-col items-center rounded-lg bg-muted px-2 py-1.5">
                <Clock className="size-3.5 text-muted-foreground" />
                <span className="mt-0.5 text-xs font-medium tabular-nums">{appt.time}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{appt.clientName}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {appt.vehicle} · {appt.serviceType}
                </p>
              </div>
              <StatusBadge status={appt.status} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

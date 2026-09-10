import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { repairOrders } from '@/lib/mock-data/repair-orders'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/kit/card'
import { StatusBadge } from '@/components/kit/badge'
import { Button } from '@/components/kit/button'
import { Progress } from '@/components/kit/progress'

export function ActiveRepairs() {
  const active = repairOrders
    .filter((o) => ['In Progress', 'Waiting for Parts', 'Pending'].includes(o.status))
    .slice(0, 5)

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Active Repair Orders</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/repair-orders">
            View all
            <ArrowRight className="size-3.5" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="flex flex-col divide-y divide-border">
          {active.map((order) => (
            <li key={order.id} className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {order.vehicle}{' '}
                    <span className="font-normal text-muted-foreground">· {order.number}</span>
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {order.clientName} · {order.mechanicName}
                  </p>
                </div>
                <StatusBadge status={order.status} />
              </div>
              <div className="flex items-center gap-3">
                <Progress value={order.progress} className="h-1.5" />
                <span className="w-9 shrink-0 text-right text-xs font-medium tabular-nums text-muted-foreground">
                  {order.progress}%
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

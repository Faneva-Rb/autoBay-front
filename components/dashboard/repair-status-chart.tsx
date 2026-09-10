'use client'

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { repairsByStatus } from '@/lib/mock-data/analytics'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/kit/card'
import { ChartTooltip } from '@/components/charts/chart-tooltip'

export function RepairStatusChart() {
  const total = repairsByStatus.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Repair Orders by Status</CardTitle>
        <CardDescription>Current active workload distribution</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative h-48 w-48 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={repairsByStatus}
                  dataKey="value"
                  nameKey="status"
                  innerRadius={58}
                  outerRadius={90}
                  paddingAngle={2}
                  strokeWidth={0}
                >
                  {repairsByStatus.map((entry) => (
                    <Cell key={entry.status} fill={entry.tone} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-semibold tabular-nums">{total}</span>
              <span className="text-xs text-muted-foreground">Total</span>
            </div>
          </div>
          <ul className="flex w-full flex-col gap-2.5">
            {repairsByStatus.map((entry) => (
              <li key={entry.status} className="flex items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ backgroundColor: entry.tone }}
                    aria-hidden
                  />
                  {entry.status}
                </span>
                <span className="font-medium tabular-nums">{entry.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

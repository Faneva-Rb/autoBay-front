import { DollarSign, Wrench, CalendarClock, AlertTriangle } from 'lucide-react'
import { PageHeader } from '@/components/layout/page-header'
import { StatCard } from '@/components/dashboard/stat-card'
import { RevenueChart } from '@/components/dashboard/revenue-chart'
import { RepairStatusChart } from '@/components/dashboard/repair-status-chart'
import { TodaysAppointments } from '@/components/dashboard/todays-appointments'
import { ActiveRepairs } from '@/components/dashboard/active-repairs'
import { RecentActivity } from '@/components/dashboard/recent-activity'
import { Button } from '@/components/kit/button'
import { repairOrders } from '@/lib/mock-data/repair-orders'
import { appointments } from '@/lib/mock-data/appointments'
import { spareParts } from '@/lib/mock-data/spare-parts'
import { formatCurrency } from '@/lib/format'

export default function DashboardPage() {
  const activeRepairs = repairOrders.filter((o) =>
    ['In Progress', 'Waiting for Parts', 'Pending'].includes(o.status),
  ).length
  const todayAppointments = appointments.filter((a) => a.date === '2025-02-24').length
  const lowStock = spareParts.filter((p) => p.status !== 'In Stock').length

  return (
    <div>
      <PageHeader
        title="Tableau de bord"
        description="Bienvenue, Elena."
        actions={
          <>
            <Button variant="outline">Export Report</Button>
            <Button>New Repair Order</Button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Monthly Revenue"
          value={formatCurrency(64800)}
          icon={DollarSign}
          trend={5.7}
          trendLabel="vs last month"
        />
        <StatCard
          label="Active Repair Orders"
          value={String(activeRepairs)}
          icon={Wrench}
          trend={12}
          trendLabel="vs last week"
        />
        <StatCard
          label="Today's Appointments"
          value={String(todayAppointments)}
          icon={CalendarClock}
          trend={-3}
          trendLabel="vs yesterday"
        />
        <StatCard
          label="Low Stock Items"
          value={String(lowStock)}
          icon={AlertTriangle}
          trend={2}
          trendLabel="need reorder"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <RepairStatusChart />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <TodaysAppointments />
        <ActiveRepairs />
      </div>

      <div className="mt-4">
        <RecentActivity />
      </div>
    </div>
  )
}

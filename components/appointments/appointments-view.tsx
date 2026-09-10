'use client'

import { useMemo, useState } from 'react'
import { Plus, Clock, User, Car, Wrench, CalendarDays, Trash2 } from 'lucide-react'
import type { Appointment, AppointmentStatus } from '@/lib/types'
import { appointments as seedAppointments } from '@/lib/mock-data/appointments'
import { clients } from '@/lib/mock-data/clients'
import { mechanics } from '@/lib/mock-data/mechanics'
import { PageHeader } from '@/components/layout/page-header'
import { Toolbar, SearchInput } from '@/components/kit/toolbar'
import { Tabs } from '@/components/kit/tabs'
import { Button } from '@/components/kit/button'
import { Card } from '@/components/kit/card'
import { StatusBadge } from '@/components/kit/badge'
import { Avatar } from '@/components/kit/avatar'
import { Modal } from '@/components/kit/modal'
import { Field, Input } from '@/components/kit/input'
import { Select } from '@/components/kit/select'
import { EmptyState } from '@/components/kit/empty-state'
import { formatDate } from '@/lib/format'

const statuses: AppointmentStatus[] = [
  'Scheduled',
  'Confirmed',
  'In Progress',
  'Completed',
  'Cancelled',
  'No Show',
]

const emptyForm = {
  date: '2025-02-24',
  time: '09:00',
  clientName: clients[0] ? `${clients[0].firstName} ${clients[0].lastName}` : '',
  vehicle: '',
  serviceType: '',
  mechanicName: mechanics[0]?.name ?? '',
  durationMinutes: 60,
  status: 'Scheduled' as AppointmentStatus,
}

export function AppointmentsView() {
  const [appointments, setAppointments] = useState<Appointment[]>(seedAppointments)
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState('all')
  const [formOpen, setFormOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)

  const filtered = useMemo(() => {
    return appointments.filter((a) => {
      const q = search.toLowerCase()
      const matchesSearch =
        a.clientName.toLowerCase().includes(q) ||
        a.vehicle.toLowerCase().includes(q) ||
        a.serviceType.toLowerCase().includes(q)
      const matchesTab = tab === 'all' || a.status === tab
      return matchesSearch && matchesTab
    })
  }, [appointments, search, tab])

  const grouped = useMemo(() => {
    const map = new Map<string, Appointment[]>()
    for (const a of [...filtered].sort((x, y) => (x.date + x.time).localeCompare(y.date + y.time))) {
      const list = map.get(a.date) ?? []
      list.push(a)
      map.set(a.date, list)
    }
    return Array.from(map.entries())
  }, [filtered])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = `AP-${3000 + appointments.length + 1}`
    setAppointments((prev) => [{ id, ...form }, ...prev])
    setFormOpen(false)
    setForm(emptyForm)
  }

  const tabs = [
    { value: 'all', label: 'All', count: appointments.length },
    ...statuses.map((s) => ({
      value: s,
      label: s,
      count: appointments.filter((a) => a.status === s).length,
    })),
  ]

  return (
    <div>
      <PageHeader
        title="Rendez-vous"
        description="Schedule and manage workshop appointments."
        actions={
          <Button onClick={() => setFormOpen(true)}>
            <Plus />
            Nouveau rendez-vous
          </Button>
        }
      />

      <Toolbar>
        <SearchInput value={search} onChange={setSearch} placeholder="Search appointments..." />
      </Toolbar>

      <div className="mb-5">
        <Tabs tabs={tabs} active={tab} onChange={setTab} />
      </div>

      {grouped.length === 0 ? (
        <EmptyState
          icon={CalendarDays}
          title="No appointments found"
          description="Adjust your filters or schedule a new appointment."
        />
      ) : (
        <div className="flex flex-col gap-6">
          {grouped.map(([date, items]) => (
            <div key={date}>
              <div className="mb-3 flex items-center gap-2">
                <CalendarDays className="size-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold">{formatDate(date)}</h2>
                <span className="text-xs text-muted-foreground">
                  {items.length} appointment{items.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                {items.map((appt) => (
                  <Card key={appt.id} className="flex flex-col gap-3 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                        <Clock className="size-3.5" />
                        {appt.time}
                        <span className="font-normal text-primary/70">· {appt.durationMinutes}m</span>
                      </span>
                      <StatusBadge status={appt.status} />
                    </div>
                    <div className="flex flex-col gap-1.5 text-sm">
                      <span className="flex items-center gap-2 font-medium">
                        <User className="size-3.5 text-muted-foreground" />
                        {appt.clientName}
                      </span>
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Car className="size-3.5" />
                        {appt.vehicle}
                      </span>
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Wrench className="size-3.5" />
                        {appt.serviceType}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-3">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Avatar name={appt.mechanicName} size="sm" className="size-6 text-[10px]" />
                        {appt.mechanicName}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Cancel appointment"
                        onClick={() =>
                          setAppointments((prev) => prev.filter((a) => a.id !== appt.id))
                        }
                      >
                        <Trash2 className="text-muted-foreground" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        title="New Appointment"
        description="Schedule a new workshop appointment."
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setFormOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" form="appointment-form">
              Schedule
            </Button>
          </>
        }
      >
        <form id="appointment-form" onSubmit={submit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Date" htmlFor="date">
            <Input
              id="date"
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </Field>
          <Field label="Time" htmlFor="time">
            <Input
              id="time"
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />
          </Field>
          <Field label="Client" htmlFor="client">
            <Select
              value={form.clientName}
              onChange={(e) => setForm({ ...form, clientName: e.target.value })}
              options={clients.map((c) => ({
                label: `${c.firstName} ${c.lastName}`,
                value: `${c.firstName} ${c.lastName}`,
              }))}
            />
          </Field>
          <Field label="Vehicle" htmlFor="vehicle">
            <Input
              id="vehicle"
              required
              placeholder="e.g. Toyota Corolla"
              value={form.vehicle}
              onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
            />
          </Field>
          <Field label="Service type" htmlFor="serviceType">
            <Input
              id="serviceType"
              required
              placeholder="e.g. Oil Change"
              value={form.serviceType}
              onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
            />
          </Field>
          <Field label="Duration (min)" htmlFor="duration">
            <Input
              id="duration"
              type="number"
              value={form.durationMinutes}
              onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })}
            />
          </Field>
          <Field label="Mechanic" htmlFor="mechanic">
            <Select
              value={form.mechanicName}
              onChange={(e) => setForm({ ...form, mechanicName: e.target.value })}
              options={mechanics.map((m) => ({ label: m.name, value: m.name }))}
            />
          </Field>
          <Field label="Status" htmlFor="status">
            <Select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value as AppointmentStatus })}
              options={statuses.map((s) => ({ label: s, value: s }))}
            />
          </Field>
        </form>
      </Modal>
    </div>
  )
}

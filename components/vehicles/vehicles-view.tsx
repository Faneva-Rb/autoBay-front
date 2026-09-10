'use client'

import { useMemo, useState } from 'react'
import {
  Plus,
  Car,
  Wrench,
  CalendarClock,
  Gauge,
  Fuel,
  Cog,
  Eye,
  Pencil,
  Trash2,
  MoreVertical,
  User,
} from 'lucide-react'
import type { Vehicle, FuelType, Transmission, VehicleStatus } from '@/lib/types'
import { vehicles as seedVehicles } from '@/lib/mock-data/vehicles'
import { clients } from '@/lib/mock-data/clients'
import { PageHeader } from '@/components/layout/page-header'
import { Toolbar, SearchInput } from '@/components/kit/toolbar'
import { Select } from '@/components/kit/select'
import { Button } from '@/components/kit/button'
import { DataTable, type Column } from '@/components/kit/data-table'
import { StatusBadge, Badge } from '@/components/kit/badge'
import { DropdownMenu } from '@/components/kit/dropdown-menu'
import { Modal, ConfirmDialog } from '@/components/kit/modal'
import { Field, Input } from '@/components/kit/input'
import { EmptyState } from '@/components/kit/empty-state'
import { StatCard } from '@/components/dashboard/stat-card'
import { formatDate, formatNumber } from '@/lib/format'

const emptyForm = {
  registration: '',
  brand: '',
  model: '',
  year: new Date().getFullYear(),
  fuel: 'Gasoline' as FuelType,
  transmission: 'Manual' as Transmission,
  mileage: 0,
  clientId: clients[0]?.id ?? '',
  status: 'Active' as VehicleStatus,
}

export function VehiclesView() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(seedVehicles)
  const [search, setSearch] = useState('')
  const [fuel, setFuel] = useState('all')
  const [status, setStatus] = useState('all')
  const [formOpen, setFormOpen] = useState(false)
  const [editing, setEditing] = useState<Vehicle | null>(null)
  const [viewing, setViewing] = useState<Vehicle | null>(null)
  const [deleting, setDeleting] = useState<Vehicle | null>(null)
  const [form, setForm] = useState(emptyForm)

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const q = search.toLowerCase()
      const matchesSearch =
        `${v.brand} ${v.model}`.toLowerCase().includes(q) ||
        v.registration.toLowerCase().includes(q) ||
        v.clientName.toLowerCase().includes(q)
      const matchesFuel = fuel === 'all' || v.fuel === fuel
      const matchesStatus = status === 'all' || v.status === status
      return matchesSearch && matchesFuel && matchesStatus
    })
  }, [vehicles, search, fuel, status])

  const openAdd = () => {
    setEditing(null)
    setForm(emptyForm)
    setFormOpen(true)
  }

  const openEdit = (v: Vehicle) => {
    setEditing(v)
    setForm({
      registration: v.registration,
      brand: v.brand,
      model: v.model,
      year: v.year,
      fuel: v.fuel,
      transmission: v.transmission,
      mileage: v.mileage,
      clientId: v.clientId,
      status: v.status,
    })
    setFormOpen(true)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const client = clients.find((c) => c.id === form.clientId)
    const clientName = client ? `${client.firstName} ${client.lastName}` : 'Unassigned'
    if (editing) {
      setVehicles((prev) =>
        prev.map((v) => (v.id === editing.id ? { ...v, ...form, clientName } : v)),
      )
    } else {
      const id = `VH-${2000 + vehicles.length + 1}`
      setVehicles((prev) => [
        {
          id,
          ...form,
          clientName,
          lastService: '—',
          nextService: '—',
        },
        ...prev,
      ])
    }
    setFormOpen(false)
  }

  const columns: Column<Vehicle>[] = [
    {
      key: 'vehicle',
      header: 'Vehicle',
      sortValue: (v) => `${v.brand} ${v.model}`,
      render: (v) => (
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Car className="size-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium">
              {v.brand} {v.model}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {v.year} · <span className="font-mono">{v.registration}</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      key: 'owner',
      header: 'Owner',
      sortValue: (v) => v.clientName,
      render: (v) => <span className="text-sm">{v.clientName}</span>,
    },
    {
      key: 'fuel',
      header: 'Fuel',
      render: (v) => <Badge tone="neutral">{v.fuel}</Badge>,
    },
    {
      key: 'mileage',
      header: 'Mileage',
      align: 'right',
      sortValue: (v) => v.mileage,
      render: (v) => <span className="tabular-nums">{formatNumber(v.mileage)} km</span>,
    },
    {
      key: 'nextService',
      header: 'Next Service',
      sortValue: (v) => v.nextService,
      render: (v) => <span className="text-sm text-muted-foreground">{formatDate(v.nextService)}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (v) => <StatusBadge status={v.status} />,
    },
    {
      key: 'actions',
      header: '',
      align: 'right',
      render: (v) => (
        <DropdownMenu
          trigger={
            <Button variant="ghost" size="icon" aria-label="Actions">
              <MoreVertical />
            </Button>
          }
          actions={[
            { label: 'View details', icon: <Eye className="size-4" />, onClick: () => setViewing(v) },
            { label: 'Edit', icon: <Pencil className="size-4" />, onClick: () => openEdit(v) },
            {
              label: 'Delete',
              icon: <Trash2 className="size-4" />,
              destructive: true,
              onClick: () => setDeleting(v),
            },
          ]}
        />
      ),
    },
  ]

  const inService = vehicles.filter((v) => v.status === 'In Service').length
  const dueSoon = vehicles.filter((v) => {
    const d = new Date(v.nextService)
    if (Number.isNaN(d.getTime())) return false
    const days = (d.getTime() - new Date('2025-02-24').getTime()) / 86400000
    return days >= 0 && days <= 30
  }).length

  return (
    <div>
      <PageHeader
        title="Vehicles"
        description="Track every vehicle in your workshop and its service history."
        actions={
          <Button onClick={openAdd}>
            <Plus />
            New Vehicle
          </Button>
        }
      />

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Vehicles" value={String(vehicles.length)} icon={Car} />
        <StatCard label="Currently In Service" value={String(inService)} icon={Wrench} />
        <StatCard label="Due for Service (30d)" value={String(dueSoon)} icon={CalendarClock} />
      </div>

      <Toolbar>
        <SearchInput value={search} onChange={setSearch} placeholder="Search vehicles..." />
        <Select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          className="sm:w-40"
          options={[
            { label: 'All fuel types', value: 'all' },
            { label: 'Gasoline', value: 'Gasoline' },
            { label: 'Diesel', value: 'Diesel' },
            { label: 'Hybrid', value: 'Hybrid' },
            { label: 'Electric', value: 'Electric' },
          ]}
        />
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="sm:w-40"
          options={[
            { label: 'All statuses', value: 'all' },
            { label: 'Active', value: 'Active' },
            { label: 'In Service', value: 'In Service' },
            { label: 'Inactive', value: 'Inactive' },
          ]}
        />
      </Toolbar>

      <DataTable
        columns={columns}
        data={filtered}
        getRowKey={(v) => v.id}
        onRowClick={(v) => setViewing(v)}
        empty={
          <EmptyState
            icon={Car}
            title="No vehicles found"
            description="Try adjusting your filters or register a new vehicle."
          />
        }
      />

      <Modal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        title={editing ? 'Edit Vehicle' : 'New Vehicle'}
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setFormOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" form="vehicle-form">
              {editing ? 'Save Changes' : 'Create Vehicle'}
            </Button>
          </>
        }
      >
        <form id="vehicle-form" onSubmit={submit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Registration" htmlFor="registration">
            <Input
              id="registration"
              required
              value={form.registration}
              onChange={(e) => setForm({ ...form, registration: e.target.value })}
            />
          </Field>
          <Field label="Owner" htmlFor="clientId">
            <Select
              value={form.clientId}
              onChange={(e) => setForm({ ...form, clientId: e.target.value })}
              options={clients.map((c) => ({
                label: `${c.firstName} ${c.lastName}`,
                value: c.id,
              }))}
            />
          </Field>
          <Field label="Brand" htmlFor="brand">
            <Input
              id="brand"
              required
              value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}
            />
          </Field>
          <Field label="Model" htmlFor="model">
            <Input
              id="model"
              required
              value={form.model}
              onChange={(e) => setForm({ ...form, model: e.target.value })}
            />
          </Field>
          <Field label="Year" htmlFor="year">
            <Input
              id="year"
              type="number"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: Number(e.target.value) })}
            />
          </Field>
          <Field label="Mileage (km)" htmlFor="mileage">
            <Input
              id="mileage"
              type="number"
              value={form.mileage}
              onChange={(e) => setForm({ ...form, mileage: Number(e.target.value) })}
            />
          </Field>
          <Field label="Fuel type" htmlFor="fuel">
            <Select
              value={form.fuel}
              onChange={(e) => setForm({ ...form, fuel: e.target.value as FuelType })}
              options={[
                { label: 'Gasoline', value: 'Gasoline' },
                { label: 'Diesel', value: 'Diesel' },
                { label: 'Hybrid', value: 'Hybrid' },
                { label: 'Electric', value: 'Electric' },
              ]}
            />
          </Field>
          <Field label="Transmission" htmlFor="transmission">
            <Select
              value={form.transmission}
              onChange={(e) => setForm({ ...form, transmission: e.target.value as Transmission })}
              options={[
                { label: 'Manual', value: 'Manual' },
                { label: 'Automatic', value: 'Automatic' },
              ]}
            />
          </Field>
          <Field label="Status" htmlFor="status" className="sm:col-span-2">
            <Select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value as VehicleStatus })}
              options={[
                { label: 'Active', value: 'Active' },
                { label: 'In Service', value: 'In Service' },
                { label: 'Inactive', value: 'Inactive' },
              ]}
            />
          </Field>
        </form>
      </Modal>

      <Modal
        open={viewing !== null}
        onClose={() => setViewing(null)}
        title={viewing ? `${viewing.brand} ${viewing.model}` : ''}
        description={viewing?.registration}
      >
        {viewing && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <StatusBadge status={viewing.status} />
              <span className="text-xs text-muted-foreground">{viewing.year}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <IconStat icon={<User className="size-4" />} label="Owner" value={viewing.clientName} />
              <IconStat icon={<Gauge className="size-4" />} label="Mileage" value={`${formatNumber(viewing.mileage)} km`} />
              <IconStat icon={<Fuel className="size-4" />} label="Fuel" value={viewing.fuel} />
              <IconStat icon={<Cog className="size-4" />} label="Transmission" value={viewing.transmission} />
              <IconStat icon={<CalendarClock className="size-4" />} label="Last service" value={formatDate(viewing.lastService)} />
              <IconStat icon={<CalendarClock className="size-4" />} label="Next service" value={formatDate(viewing.nextService)} />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => {
                  openEdit(viewing)
                  setViewing(null)
                }}
              >
                <Pencil />
                Edit Vehicle
              </Button>
            </div>
          </div>
        )}
      </Modal>

      <ConfirmDialog
        open={deleting !== null}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          if (deleting) setVehicles((prev) => prev.filter((v) => v.id !== deleting.id))
        }}
        title="Delete vehicle?"
        message={deleting ? `This will remove ${deleting.brand} ${deleting.model} (${deleting.registration}).` : ''}
        confirmLabel="Delete"
        destructive
      />
    </div>
  )
}

function IconStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3">
      <p className="mb-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  )
}

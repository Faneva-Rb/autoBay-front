'use client'

import { useMemo, useState } from 'react'
import {
  Plus,
  Users,
  Phone,
  Mail,
  MapPin,
  Eye,
  Pencil,
  Trash2,
  Car,
  Wrench,
  MoreVertical,
} from 'lucide-react'
import type { Client, ClientStatus } from '@/lib/types'
import { clients as seedClients } from '@/lib/mock-data/clients'
import { PageHeader } from '@/components/layout/page-header'
import { Toolbar, SearchInput } from '@/components/kit/toolbar'
import { Select } from '@/components/kit/select'
import { Button } from '@/components/kit/button'
import { DataTable, type Column } from '@/components/kit/data-table'
import { Avatar } from '@/components/kit/avatar'
import { StatusBadge } from '@/components/kit/badge'
import { DropdownMenu } from '@/components/kit/dropdown-menu'
import { Modal, ConfirmDialog } from '@/components/kit/modal'
import { Field, Input } from '@/components/kit/input'
import { EmptyState } from '@/components/kit/empty-state'
import { StatCard } from '@/components/dashboard/stat-card'
import { formatCurrency, formatDate } from '@/lib/format'

const emptyForm = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  status: 'Active' as ClientStatus,
}

export function ClientsView() {
  const [clients, setClients] = useState<Client[]>(seedClients)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [formOpen, setFormOpen] = useState(false)
  const [editing, setEditing] = useState<Client | null>(null)
  const [viewing, setViewing] = useState<Client | null>(null)
  const [deleting, setDeleting] = useState<Client | null>(null)
  const [form, setForm] = useState(emptyForm)

  const filtered = useMemo(() => {
    return clients.filter((c) => {
      const q = search.toLowerCase()
      const matchesSearch =
        `${c.firstName} ${c.lastName}`.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.includes(q)
      const matchesStatus = status === 'all' || c.status === status
      return matchesSearch && matchesStatus
    })
  }, [clients, search, status])

  const openAdd = () => {
    setEditing(null)
    setForm(emptyForm)
    setFormOpen(true)
  }

  const openEdit = (client: Client) => {
    setEditing(client)
    setForm({
      firstName: client.firstName,
      lastName: client.lastName,
      phone: client.phone,
      email: client.email,
      address: client.address,
      status: client.status,
    })
    setFormOpen(true)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editing) {
      setClients((prev) =>
        prev.map((c) => (c.id === editing.id ? { ...c, ...form } : c)),
      )
    } else {
      const id = `CL-${1000 + clients.length + 1}`
      setClients((prev) => [
        {
          id,
          ...form,
          vehicleCount: 0,
          totalRepairs: 0,
          totalSpent: 0,
          registeredAt: new Date().toISOString().slice(0, 10),
        },
        ...prev,
      ])
    }
    setFormOpen(false)
  }

  const columns: Column<Client>[] = [
    {
      key: 'name',
      header: 'Client',
      sortValue: (c) => `${c.firstName} ${c.lastName}`,
      render: (c) => (
        <div className="flex items-center gap-3">
          <Avatar name={`${c.firstName} ${c.lastName}`} size="sm" />
          <div className="min-w-0">
            <p className="truncate font-medium">
              {c.firstName} {c.lastName}
            </p>
            <p className="truncate text-xs text-muted-foreground">{c.id}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'contact',
      header: 'Contact',
      render: (c) => (
        <div className="flex flex-col gap-0.5 text-xs">
          <span className="flex items-center gap-1.5 text-foreground">
            <Phone className="size-3 text-muted-foreground" />
            {c.phone}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Mail className="size-3" />
            {c.email}
          </span>
        </div>
      ),
    },
    {
      key: 'vehicles',
      header: 'Vehicles',
      align: 'center',
      sortValue: (c) => c.vehicleCount,
      render: (c) => <span className="tabular-nums">{c.vehicleCount}</span>,
    },
    {
      key: 'repairs',
      header: 'Repairs',
      align: 'center',
      sortValue: (c) => c.totalRepairs,
      render: (c) => <span className="tabular-nums">{c.totalRepairs}</span>,
    },
    {
      key: 'spent',
      header: 'Total Spent',
      align: 'right',
      sortValue: (c) => c.totalSpent,
      render: (c) => <span className="font-medium tabular-nums">{formatCurrency(c.totalSpent)}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (c) => <StatusBadge status={c.status} />,
    },
    {
      key: 'actions',
      header: '',
      align: 'right',
      render: (c) => (
        <DropdownMenu
          trigger={
            <Button variant="ghost" size="icon" aria-label="Actions">
              <MoreVertical />
            </Button>
          }
          actions={[
            { label: 'View details', icon: <Eye className="size-4" />, onClick: () => setViewing(c) },
            { label: 'Edit', icon: <Pencil className="size-4" />, onClick: () => openEdit(c) },
            {
              label: 'Delete',
              icon: <Trash2 className="size-4" />,
              destructive: true,
              onClick: () => setDeleting(c),
            },
          ]}
        />
      ),
    },
  ]

  const activeCount = clients.filter((c) => c.status === 'Active').length
  const totalRevenue = clients.reduce((s, c) => s + c.totalSpent, 0)

  return (
    <div>
      <PageHeader
        title="Clients"
        description="Manage your customer database and their history."
        actions={
          <Button onClick={openAdd}>
            <Plus />
            New Client
          </Button>
        }
      />

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Clients" value={String(clients.length)} icon={Users} />
        <StatCard label="Active Clients" value={String(activeCount)} icon={Car} />
        <StatCard label="Lifetime Revenue" value={formatCurrency(totalRevenue)} icon={Wrench} />
      </div>

      <Toolbar>
        <SearchInput value={search} onChange={setSearch} placeholder="Search clients..." />
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="sm:w-40"
          options={[
            { label: 'All statuses', value: 'all' },
            { label: 'Active', value: 'Active' },
            { label: 'Inactive', value: 'Inactive' },
          ]}
        />
      </Toolbar>

      <DataTable
        columns={columns}
        data={filtered}
        getRowKey={(c) => c.id}
        onRowClick={(c) => setViewing(c)}
        empty={
          <EmptyState
            icon={Users}
            title="No clients found"
            description="Try adjusting your search or add a new client."
            action={
              <Button onClick={openAdd}>
                <Plus />
                New Client
              </Button>
            }
          />
        }
      />

      <Modal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        title={editing ? 'Edit Client' : 'New Client'}
        description={editing ? 'Update client information.' : 'Add a new client to your database.'}
        footer={
          <>
            <Button variant="outline" onClick={() => setFormOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" form="client-form">
              {editing ? 'Save Changes' : 'Create Client'}
            </Button>
          </>
        }
      >
        <form id="client-form" onSubmit={submit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="First name" htmlFor="firstName">
              <Input
                id="firstName"
                required
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
            </Field>
            <Field label="Last name" htmlFor="lastName">
              <Input
                id="lastName"
                required
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </Field>
          </div>
          <Field label="Phone" htmlFor="phone">
            <Input
              id="phone"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </Field>
          <Field label="Email" htmlFor="email">
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </Field>
          <Field label="Address" htmlFor="address">
            <Input
              id="address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </Field>
          <Field label="Status" htmlFor="status">
            <Select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value as ClientStatus })}
              options={[
                { label: 'Active', value: 'Active' },
                { label: 'Inactive', value: 'Inactive' },
              ]}
            />
          </Field>
        </form>
      </Modal>

      <Modal
        open={viewing !== null}
        onClose={() => setViewing(null)}
        title={viewing ? `${viewing.firstName} ${viewing.lastName}` : ''}
        description={viewing?.id}
        footer={
          <Button
            onClick={() => {
              if (viewing) openEdit(viewing)
              setViewing(null)
            }}
          >
            <Pencil />
            Edit Client
          </Button>
        }
      >
        {viewing && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Avatar name={`${viewing.firstName} ${viewing.lastName}`} size="lg" />
              <div className="flex flex-col gap-1">
                <StatusBadge status={viewing.status} />
                <span className="text-xs text-muted-foreground">
                  Client since {formatDate(viewing.registeredAt)}
                </span>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DetailRow icon={<Phone className="size-4" />} label="Phone" value={viewing.phone} />
              <DetailRow icon={<Mail className="size-4" />} label="Email" value={viewing.email} />
              <DetailRow
                icon={<MapPin className="size-4" />}
                label="Address"
                value={viewing.address}
                full
              />
            </dl>
            <div className="grid grid-cols-3 gap-3">
              <MiniStat label="Vehicles" value={String(viewing.vehicleCount)} />
              <MiniStat label="Repairs" value={String(viewing.totalRepairs)} />
              <MiniStat label="Spent" value={formatCurrency(viewing.totalSpent)} />
            </div>
          </div>
        )}
      </Modal>

      <ConfirmDialog
        open={deleting !== null}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          if (deleting) setClients((prev) => prev.filter((c) => c.id !== deleting.id))
        }}
        title="Delete client?"
        message={
          deleting
            ? `This will permanently remove ${deleting.firstName} ${deleting.lastName} and cannot be undone.`
            : ''
        }
        confirmLabel="Delete"
        destructive
      />
    </div>
  )
}

function DetailRow({
  icon,
  label,
  value,
  full,
}: {
  icon: React.ReactNode
  label: string
  value: string
  full?: boolean
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <dt className="mb-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        {icon}
        {label}
      </dt>
      <dd className="text-sm">{value}</dd>
    </div>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3 text-center">
      <p className="text-lg font-semibold tabular-nums">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

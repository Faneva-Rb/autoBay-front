import type { Metadata } from 'next'
import { AppointmentsView } from '@/components/appointments/appointments-view'

export const metadata: Metadata = {
  title: 'Appointments — AutoBay',
}

export default function AppointmentsPage() {
  return <AppointmentsView />
}

import type { Mechanic } from '@/lib/types'

export const mechanics: Mechanic[] = [
  { id: 'MC-01', name: 'Marcus Bell', specialization: 'Engine & Transmission', phone: '+1 202 555 0301', email: 'marcus.bell@autobay.com', status: 'Busy', activeRepairs: 3, completedRepairs: 214, performance: 94, rating: 4.8, hireDate: '2019-04-01' },
  { id: 'MC-02', name: 'Diego Ramirez', specialization: 'Electrical Systems', phone: '+1 202 555 0302', email: 'diego.ramirez@autobay.com', status: 'Available', activeRepairs: 1, completedRepairs: 187, performance: 91, rating: 4.7, hireDate: '2020-01-15' },
  { id: 'MC-03', name: 'Aisha Khan', specialization: 'Diagnostics & ECU', phone: '+1 202 555 0303', email: 'aisha.khan@autobay.com', status: 'Busy', activeRepairs: 2, completedRepairs: 156, performance: 96, rating: 4.9, hireDate: '2020-09-10' },
  { id: 'MC-04', name: 'Tom Weber', specialization: 'Brakes & Suspension', phone: '+1 202 555 0304', email: 'tom.weber@autobay.com', status: 'Available', activeRepairs: 0, completedRepairs: 203, performance: 89, rating: 4.6, hireDate: '2018-11-22' },
  { id: 'MC-05', name: 'Sara Lindqvist', specialization: 'Bodywork & Paint', phone: '+1 202 555 0305', email: 'sara.lindqvist@autobay.com', status: 'On Leave', activeRepairs: 0, completedRepairs: 132, performance: 87, rating: 4.5, hireDate: '2021-03-08' },
  { id: 'MC-06', name: 'Nathan Cole', specialization: 'Air Conditioning', phone: '+1 202 555 0306', email: 'nathan.cole@autobay.com', status: 'Busy', activeRepairs: 2, completedRepairs: 121, performance: 90, rating: 4.7, hireDate: '2021-07-19' },
  { id: 'MC-07', name: 'Priya Nair', specialization: 'Hybrid & EV Systems', phone: '+1 202 555 0307', email: 'priya.nair@autobay.com', status: 'Available', activeRepairs: 1, completedRepairs: 98, performance: 93, rating: 4.8, hireDate: '2022-02-14' },
  { id: 'MC-08', name: 'Owen Murphy', specialization: 'General Maintenance', phone: '+1 202 555 0308', email: 'owen.murphy@autobay.com', status: 'Available', activeRepairs: 1, completedRepairs: 176, performance: 85, rating: 4.4, hireDate: '2019-08-30' },
]

export function getMechanicById(id: string) {
  return mechanics.find((mechanic) => mechanic.id === id)
}

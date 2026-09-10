import type { Activity } from '@/lib/types'

export const activities: Activity[] = [
  { id: 'AC-01', type: 'payment', message: 'Invoice INV-2025-0010 paid', detail: 'Benjamin Silva · $297.00 via Card', timestamp: '2025-02-24T09:42:00' },
  { id: 'AC-02', type: 'repair', message: 'Repair order RO-2025-0004 updated', detail: 'Toyota RAV4 · progress 80%', timestamp: '2025-02-24T09:15:00' },
  { id: 'AC-03', type: 'appointment', message: 'Appointment completed', detail: 'William Dubois · Peugeot 3008 · Tire Rotation', timestamp: '2025-02-24T08:50:00' },
  { id: 'AC-04', type: 'client', message: 'New client registered', detail: 'Mia Ahmed · CL-1010', timestamp: '2025-02-24T08:20:00' },
  { id: 'AC-05', type: 'vehicle', message: 'Vehicle added', detail: 'Tesla Model 3 · CA-508-EF', timestamp: '2025-02-24T08:05:00' },
  { id: 'AC-06', type: 'invoice', message: 'Invoice INV-2025-0006 sent', detail: 'Noah Meyer · $896.40', timestamp: '2025-02-24T07:58:00' },
  { id: 'AC-07', type: 'repair', message: 'Repair order RO-2025-0009 created', detail: 'Tesla Model 3 · draft', timestamp: '2025-02-24T07:40:00' },
  { id: 'AC-08', type: 'payment', message: 'Payment failed', detail: 'Henry Petrov · $1,160.35 via Card', timestamp: '2025-02-23T18:12:00' },
  { id: 'AC-09', type: 'appointment', message: 'Appointment scheduled', detail: 'Lucas Fischer · Tesla Model 3 · Feb 25', timestamp: '2025-02-23T17:30:00' },
  { id: 'AC-10', type: 'repair', message: 'Repair order RO-2025-0002 completed', detail: 'Mercedes-Benz C200 · Brake service', timestamp: '2025-02-23T16:45:00' },
  { id: 'AC-11', type: 'invoice', message: 'Invoice INV-2025-0002 paid', detail: 'William Dubois · $313.20', timestamp: '2025-02-23T15:20:00' },
  { id: 'AC-12', type: 'client', message: 'Client details updated', detail: 'Liam Okafor · CL-1003', timestamp: '2025-02-23T14:05:00' },
  { id: 'AC-13', type: 'vehicle', message: 'Service reminder due', detail: 'Ford Focus · CA-901-DF · Feb 28', timestamp: '2025-02-23T11:30:00' },
  { id: 'AC-14', type: 'repair', message: 'Repair order RO-2025-0003 waiting for parts', detail: 'Renault Clio · MAF Sensor', timestamp: '2025-02-23T10:50:00' },
  { id: 'AC-15', type: 'payment', message: 'Payment received', detail: 'Daniel Larsson · $224.64 via Cash', timestamp: '2025-02-18T13:15:00' },
  { id: 'AC-16', type: 'appointment', message: 'Appointment cancelled', detail: 'Daniel Larsson · Bodywork Estimate', timestamp: '2025-02-23T09:10:00' },
  { id: 'AC-17', type: 'client', message: 'New client registered', detail: 'Isabella Moreau · CL-1012', timestamp: '2025-02-22T16:40:00' },
  { id: 'AC-18', type: 'invoice', message: 'Invoice INV-2025-0007 overdue', detail: 'Henry Petrov · $1,160.35', timestamp: '2025-02-22T08:00:00' },
  { id: 'AC-19', type: 'vehicle', message: 'Vehicle added', detail: 'BMW X3 · CA-238-NP', timestamp: '2025-02-21T15:25:00' },
  { id: 'AC-20', type: 'repair', message: 'Repair order RO-2025-0001 created', detail: 'BMW 320i · engine misfire', timestamp: '2025-02-18T09:30:00' },
]

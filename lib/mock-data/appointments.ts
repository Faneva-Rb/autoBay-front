import type { Appointment } from '@/lib/types'

export const appointments: Appointment[] = [
  { id: 'AP-3001', date: '2025-02-24', time: '08:30', clientName: 'James Carter', vehicle: 'BMW 320i', serviceType: 'Oil & Filter Change', mechanicName: 'Marcus Bell', durationMinutes: 45, status: 'Confirmed' },
  { id: 'AP-3002', date: '2025-02-24', time: '09:30', clientName: 'Sophia Nguyen', vehicle: 'Mercedes-Benz C200', serviceType: 'Brake Inspection', mechanicName: 'Tom Weber', durationMinutes: 60, status: 'In Progress' },
  { id: 'AP-3003', date: '2025-02-24', time: '10:45', clientName: 'Liam Okafor', vehicle: 'Renault Clio', serviceType: 'Full Diagnostic', mechanicName: 'Aisha Khan', durationMinutes: 90, status: 'Scheduled' },
  { id: 'AP-3004', date: '2025-02-24', time: '13:00', clientName: 'Noah Meyer', vehicle: 'Toyota RAV4', serviceType: 'Hybrid Battery Check', mechanicName: 'Priya Nair', durationMinutes: 75, status: 'Confirmed' },
  { id: 'AP-3005', date: '2025-02-24', time: '14:30', clientName: 'Emma Rossi', vehicle: 'Volkswagen Golf', serviceType: 'AC Service', mechanicName: 'Nathan Cole', durationMinutes: 60, status: 'Scheduled' },
  { id: 'AP-3006', date: '2025-02-24', time: '16:00', clientName: 'William Dubois', vehicle: 'Peugeot 3008', serviceType: 'Tire Rotation', mechanicName: 'Owen Murphy', durationMinutes: 40, status: 'Completed' },
  { id: 'AP-3007', date: '2025-02-25', time: '08:00', clientName: 'Ava Kowalski', vehicle: 'Renault Megane', serviceType: 'Suspension Repair', mechanicName: 'Tom Weber', durationMinutes: 120, status: 'Scheduled' },
  { id: 'AP-3008', date: '2025-02-25', time: '10:00', clientName: 'Benjamin Silva', vehicle: 'Ford Kuga', serviceType: 'Engine Diagnostic', mechanicName: 'Aisha Khan', durationMinutes: 90, status: 'Confirmed' },
  { id: 'AP-3009', date: '2025-02-25', time: '11:30', clientName: 'Mia Ahmed', vehicle: 'Hyundai i30', serviceType: 'Oil & Filter Change', mechanicName: 'Marcus Bell', durationMinutes: 45, status: 'Scheduled' },
  { id: 'AP-3010', date: '2025-02-25', time: '14:00', clientName: 'Lucas Fischer', vehicle: 'Tesla Model 3', serviceType: 'EV Software Update', mechanicName: 'Priya Nair', durationMinutes: 60, status: 'Confirmed' },
  { id: 'AP-3011', date: '2025-02-26', time: '09:00', clientName: 'Henry Petrov', vehicle: 'BMW 520d', serviceType: 'Timing Belt Replacement', mechanicName: 'Marcus Bell', durationMinutes: 180, status: 'Scheduled' },
  { id: 'AP-3012', date: '2025-02-26', time: '13:30', clientName: 'Charlotte Bianchi', vehicle: 'Mercedes-Benz A180', serviceType: 'Electrical Fault', mechanicName: 'Diego Ramirez', durationMinutes: 90, status: 'Confirmed' },
  { id: 'AP-3013', date: '2025-02-26', time: '15:30', clientName: 'Daniel Larsson', vehicle: 'Volkswagen Passat', serviceType: 'Bodywork Estimate', mechanicName: 'Sara Lindqvist', durationMinutes: 45, status: 'Cancelled' },
  { id: 'AP-3014', date: '2025-02-27', time: '08:30', clientName: 'James Carter', vehicle: 'Toyota Corolla', serviceType: 'Annual Service', mechanicName: 'Owen Murphy', durationMinutes: 120, status: 'Scheduled' },
  { id: 'AP-3015', date: '2025-02-27', time: '11:00', clientName: 'Olivia Santos', vehicle: 'BMW X3', serviceType: 'Brake Pad Replacement', mechanicName: 'Tom Weber', durationMinutes: 75, status: 'No Show' },
]

import type { Invoice } from '@/lib/types'

export const invoices: Invoice[] = [
  { id: 'IN-01', number: 'INV-2025-0001', clientName: 'Sophia Nguyen', vehicle: 'Mercedes-Benz C200', repairOrder: 'RO-2025-0002', issueDate: '2025-02-22', dueDate: '2025-03-08', amount: 313.2, amountPaid: 313.2, status: 'Paid' },
  { id: 'IN-02', number: 'INV-2025-0002', clientName: 'William Dubois', vehicle: 'Peugeot 3008', repairOrder: 'RO-2025-0005', issueDate: '2025-02-23', dueDate: '2025-03-09', amount: 313.2, amountPaid: 313.2, status: 'Paid' },
  { id: 'IN-03', number: 'INV-2025-0003', clientName: 'Daniel Larsson', vehicle: 'Volkswagen Passat', repairOrder: 'RO-2025-0012', issueDate: '2025-02-18', dueDate: '2025-03-04', amount: 224.64, amountPaid: 224.64, status: 'Paid' },
  { id: 'IN-04', number: 'INV-2025-0004', clientName: 'Liam Okafor', vehicle: 'Ford Focus', repairOrder: 'RO-2025-0014', issueDate: '2025-02-22', dueDate: '2025-03-08', amount: 404.11, amountPaid: 200, status: 'Partially Paid' },
  { id: 'IN-05', number: 'INV-2025-0005', clientName: 'James Carter', vehicle: 'BMW 320i', repairOrder: 'RO-2025-0001', issueDate: '2025-02-24', dueDate: '2025-03-10', amount: 615.6, amountPaid: 0, status: 'Sent' },
  { id: 'IN-06', number: 'INV-2025-0006', clientName: 'Noah Meyer', vehicle: 'Toyota RAV4', repairOrder: 'RO-2025-0004', issueDate: '2025-02-24', dueDate: '2025-03-10', amount: 896.4, amountPaid: 0, status: 'Sent' },
  { id: 'IN-07', number: 'INV-2025-0007', clientName: 'Henry Petrov', vehicle: 'BMW 520d', repairOrder: 'RO-2025-0010', issueDate: '2025-02-10', dueDate: '2025-02-20', amount: 1160.35, amountPaid: 0, status: 'Overdue' },
  { id: 'IN-08', number: 'INV-2025-0008', clientName: 'Ava Kowalski', vehicle: 'Renault Megane', repairOrder: 'RO-2025-0006', issueDate: '2025-02-23', dueDate: '2025-03-09', amount: 545.4, amountPaid: 0, status: 'Draft' },
  { id: 'IN-09', number: 'INV-2025-0009', clientName: 'Emma Rossi', vehicle: 'Volkswagen Golf', repairOrder: 'RO-2025-0013', issueDate: '2025-02-24', dueDate: '2025-03-10', amount: 320.76, amountPaid: 0, status: 'Sent' },
  { id: 'IN-10', number: 'INV-2025-0010', clientName: 'Benjamin Silva', vehicle: 'Ford Kuga', repairOrder: 'RO-2025-0007', issueDate: '2025-02-24', dueDate: '2025-03-10', amount: 297, amountPaid: 297, status: 'Paid' },
  { id: 'IN-11', number: 'INV-2025-0011', clientName: 'Charlotte Bianchi', vehicle: 'Mercedes-Benz A180', repairOrder: 'RO-2025-0011', issueDate: '2025-02-05', dueDate: '2025-02-15', amount: 648, amountPaid: 300, status: 'Overdue' },
  { id: 'IN-12', number: 'INV-2025-0012', clientName: 'Mia Ahmed', vehicle: 'Hyundai i30', repairOrder: 'RO-2025-0008', issueDate: '2025-02-24', dueDate: '2025-03-10', amount: 442.8, amountPaid: 0, status: 'Draft' },
  { id: 'IN-13', number: 'INV-2025-0013', clientName: 'Lucas Fischer', vehicle: 'Tesla Model 3', repairOrder: 'RO-2025-0009', issueDate: '2025-02-24', dueDate: '2025-03-10', amount: 108, amountPaid: 0, status: 'Draft' },
  { id: 'IN-14', number: 'INV-2025-0014', clientName: 'Noah Meyer', vehicle: 'Hyundai Tucson', repairOrder: 'RO-2025-0015', issueDate: '2025-02-14', dueDate: '2025-02-28', amount: 54, amountPaid: 0, status: 'Cancelled' },
  { id: 'IN-15', number: 'INV-2025-0015', clientName: 'James Carter', vehicle: 'Toyota Corolla', repairOrder: 'RO-2024-0088', issueDate: '2025-01-28', dueDate: '2025-02-11', amount: 268.92, amountPaid: 268.92, status: 'Paid' },
]

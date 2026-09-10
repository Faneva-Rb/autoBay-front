import type { Payment } from '@/lib/types'

export const payments: Payment[] = [
  { id: 'PM-0001', invoiceNumber: 'INV-2025-0001', clientName: 'Sophia Nguyen', amount: 313.2, method: 'Card', date: '2025-02-22', status: 'Completed' },
  { id: 'PM-0002', invoiceNumber: 'INV-2025-0002', clientName: 'William Dubois', amount: 313.2, method: 'Bank Transfer', date: '2025-02-23', status: 'Completed' },
  { id: 'PM-0003', invoiceNumber: 'INV-2025-0003', clientName: 'Daniel Larsson', amount: 224.64, method: 'Cash', date: '2025-02-18', status: 'Completed' },
  { id: 'PM-0004', invoiceNumber: 'INV-2025-0004', clientName: 'Liam Okafor', amount: 200, method: 'Mobile Money', date: '2025-02-22', status: 'Completed' },
  { id: 'PM-0005', invoiceNumber: 'INV-2025-0010', clientName: 'Benjamin Silva', amount: 297, method: 'Card', date: '2025-02-24', status: 'Completed' },
  { id: 'PM-0006', invoiceNumber: 'INV-2025-0011', clientName: 'Charlotte Bianchi', amount: 300, method: 'Bank Transfer', date: '2025-02-07', status: 'Completed' },
  { id: 'PM-0007', invoiceNumber: 'INV-2025-0015', clientName: 'James Carter', amount: 268.92, method: 'Card', date: '2025-01-28', status: 'Completed' },
  { id: 'PM-0008', invoiceNumber: 'INV-2025-0005', clientName: 'James Carter', amount: 615.6, method: 'Card', date: '2025-02-24', status: 'Pending' },
  { id: 'PM-0009', invoiceNumber: 'INV-2025-0006', clientName: 'Noah Meyer', amount: 896.4, method: 'Bank Transfer', date: '2025-02-24', status: 'Pending' },
  { id: 'PM-0010', invoiceNumber: 'INV-2025-0009', clientName: 'Emma Rossi', amount: 320.76, method: 'Mobile Money', date: '2025-02-24', status: 'Pending' },
  { id: 'PM-0011', invoiceNumber: 'INV-2024-0091', clientName: 'Lucas Fischer', amount: 480, method: 'Card', date: '2025-01-15', status: 'Completed' },
  { id: 'PM-0012', invoiceNumber: 'INV-2024-0090', clientName: 'Henry Petrov', amount: 560, method: 'Bank Transfer', date: '2025-01-12', status: 'Completed' },
  { id: 'PM-0013', invoiceNumber: 'INV-2024-0089', clientName: 'Ava Kowalski', amount: 190, method: 'Cash', date: '2025-01-09', status: 'Completed' },
  { id: 'PM-0014', invoiceNumber: 'INV-2024-0088', clientName: 'Sophia Nguyen', amount: 145, method: 'Mobile Money', date: '2025-01-05', status: 'Completed' },
  { id: 'PM-0015', invoiceNumber: 'INV-2025-0007', clientName: 'Henry Petrov', amount: 1160.35, method: 'Card', date: '2025-02-19', status: 'Failed' },
  { id: 'PM-0016', invoiceNumber: 'INV-2024-0087', clientName: 'Marcus Reid', amount: 220, method: 'Cash', date: '2025-01-03', status: 'Completed' },
  { id: 'PM-0017', invoiceNumber: 'INV-2024-0086', clientName: 'Olivia Santos', amount: 95, method: 'Card', date: '2024-12-28', status: 'Refunded' },
  { id: 'PM-0018', invoiceNumber: 'INV-2024-0085', clientName: 'William Dubois', amount: 410, method: 'Bank Transfer', date: '2024-12-22', status: 'Completed' },
  { id: 'PM-0019', invoiceNumber: 'INV-2024-0084', clientName: 'Benjamin Silva', amount: 175, method: 'Mobile Money', date: '2024-12-19', status: 'Completed' },
  { id: 'PM-0020', invoiceNumber: 'INV-2024-0083', clientName: 'Daniel Larsson', amount: 340, method: 'Card', date: '2024-12-15', status: 'Completed' },
]

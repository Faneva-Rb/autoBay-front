export type ClientStatus = 'Active' | 'Inactive'

export interface Customer {
  id: string
  name: string
  firstName: string
  phoneNumber: string
  email: string
  address: string
  vehicleCount: number
  totalRepairs: number
  totalSpent: number
  registeredAt: string
  status: ClientStatus
}

export interface ApiResponse<T> {
  status: number;
  success: boolean;
  data: T;
}

export type FuelType = 'Gasoline' | 'Diesel' | 'Hybrid' | 'Electric'
export type Transmission = 'Manual' | 'Automatic'
export type VehicleStatus = 'Active' | 'In Service' | 'Inactive'

export interface Vehicle {
  id: string
  registration: string
  brand: string
  model: string
  year: number
  fuel: FuelType
  transmission: Transmission
  mileage: number
  clientId: string
  clientName: string
  lastService: string
  nextService: string
  status: VehicleStatus
}

export type AppointmentStatus =
  | 'Scheduled'
  | 'Confirmed'
  | 'In Progress'
  | 'Completed'
  | 'Cancelled'
  | 'No Show'

export interface Appointment {
  id: string
  date: string
  time: string
  clientName: string
  vehicle: string
  serviceType: string
  mechanicName: string
  durationMinutes: number
  status: AppointmentStatus
}

export type RepairStatus =
  | 'Draft'
  | 'Pending'
  | 'In Progress'
  | 'Waiting for Parts'
  | 'Completed'
  | 'Cancelled'

export type Priority = 'Low' | 'Medium' | 'High' | 'Urgent'

export interface RepairService {
  description: string
  quantity: number
  unitPrice: number
}

export interface RepairPart {
  name: string
  reference: string
  quantity: number
  unitPrice: number
}

export interface RepairOrder {
  id: string
  number: string
  clientName: string
  vehicle: string
  registration: string
  description: string
  diagnosis: string
  mechanicName: string
  priority: Priority
  startDate: string
  estimatedCompletion: string
  progress: number
  status: RepairStatus
  services: RepairService[]
  parts: RepairPart[]
  laborCost: number
  discount: number
  taxRate: number
}

export type MechanicStatus = 'Available' | 'Busy' | 'On Leave'

export interface Mechanic {
  id: string
  name: string
  specialization: string
  phone: string
  email: string
  status: MechanicStatus
  activeRepairs: number
  completedRepairs: number
  performance: number
  rating: number
  hireDate: string
}

export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock'

export interface SparePart {
  id: string
  reference: string
  name: string
  category: string
  supplier: string
  quantity: number
  minStock: number
  purchasePrice: number
  sellingPrice: number
  location: string
  status: StockStatus
}

export type InvoiceStatus =
  | 'Draft'
  | 'Sent'
  | 'Paid'
  | 'Partially Paid'
  | 'Overdue'
  | 'Cancelled'

export interface Invoice {
  id: string
  number: string
  clientName: string
  vehicle: string
  repairOrder: string
  issueDate: string
  dueDate: string
  amount: number
  amountPaid: number
  status: InvoiceStatus
}

export type PaymentMethod = 'Cash' | 'Bank Transfer' | 'Mobile Money' | 'Card'
export type PaymentStatus = 'Completed' | 'Pending' | 'Failed' | 'Refunded'

export interface Payment {
  id: string
  invoiceNumber: string
  clientName: string
  amount: number
  method: PaymentMethod
  date: string
  status: PaymentStatus
}

export type UserRole = 'ADMIN' | 'WORKSHOP_MANAGER' | 'RECEPTIONIST' | 'MECHANIC'
export type UserStatus = 'Active' | 'Inactive'

export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: UserRole
  status: UserStatus
  lastLogin: string
}

export type ActivityType =
  | 'client'
  | 'vehicle'
  | 'repair'
  | 'invoice'
  | 'appointment'
  | 'payment'

export interface Activity {
  id: string
  type: ActivityType
  message: string
  detail: string
  timestamp: string
}

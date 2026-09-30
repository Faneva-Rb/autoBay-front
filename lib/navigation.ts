import {
  LayoutDashboard,
  Users,
  Car,
  CalendarDays,
  Wrench,
  HardHat,
  Package,
  FileText,
  CreditCard,
  BarChart3,
  UserCog,
  Settings,
  type LucideIcon,
} from 'lucide-react'
import { UserRole } from './types'



export interface NavItem {
  label: string
  href: string
  icon: LucideIcon,
  role: UserRole[]
}


export const navItems: NavItem[] = [
  { label: 'Tableau de bord', href: '/dashboard', icon: LayoutDashboard, role: ["ADMIN", "MECHANIC"]  },
  { label: 'Clients', href: '/clients', icon: Users, role: ["ADMIN"] },
  { label: 'Vehicules', href: '/vehicles', icon: Car, role: ["ADMIN"] },
  { label: 'Rendez-vous', href: '/appointments', icon: CalendarDays, role: ["ADMIN"] },
  { label: 'Ordre de réparation', href: '/repair-orders', icon: Wrench, role: ["ADMIN", "MECHANIC"] },
  { label: 'Mécaniciens', href: '/mechanics', icon: HardHat, role: ["ADMIN"] },
  // { label: 'Spare Parts', href: '/spare-parts', icon: Package },
  // { label: 'Facture', href: '/invoices', icon: FileText },
  // { label: 'Payments', href: '/payments', icon: CreditCard },
  // { label: 'Rapports', href: '/reports', icon: BarChart3 },
  // { label: 'Utilisateurs', href: '/users', icon: UserCog },
  // { label: 'Paramètres', href: '/settings', icon: Settings },
]

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

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { label: 'Tableau de bord', href: '/', icon: LayoutDashboard },
  { label: 'Clients', href: '/clients', icon: Users },
  { label: 'Vehicules', href: '/vehicles', icon: Car },
  { label: 'Rendez-vous', href: '/appointments', icon: CalendarDays },
  { label: 'Ordre de réparation', href: '/repair-orders', icon: Wrench },
  { label: 'Mécaniciens', href: '/mechanics', icon: HardHat },
  { label: 'Spare Parts', href: '/spare-parts', icon: Package },
  { label: 'Facture', href: '/invoices', icon: FileText },
  { label: 'Payments', href: '/payments', icon: CreditCard },
  { label: 'Rapports', href: '/reports', icon: BarChart3 },
  { label: 'Utilisateurs', href: '/users', icon: UserCog },
  { label: 'Paramètres', href: '/settings', icon: Settings },
]

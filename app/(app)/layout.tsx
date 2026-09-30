import AuthGuard from '@/components/AuthGuard'
import { AppShell } from '@/components/layout/app-shell'
import { AuthProvider } from '@/contexts/AuthContext'

export default function AppGroupLayout({ children }: { children: React.ReactNode }) {
  return <div>
    <AuthProvider>
      <AuthGuard>
        <AppShell>{children}</AppShell>
      </AuthGuard>
    </AuthProvider>
  </div>

}

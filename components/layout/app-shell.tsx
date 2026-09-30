'use client'

import { useState } from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'
import { useAuth } from '@/contexts/AuthContext'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const {user} = useAuth()
  console.log(user?.role);
  

  return (
    <div className="min-h-screen bg-background">
      {user && <Sidebar role={user?.role} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} /> }
      
      <div className="lg:pl-64">
        <Header onMenuClick={() => setMobileOpen(true)} />
        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}

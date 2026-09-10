'use client'

import { Menu, Search, Bell, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { Avatar } from '@/components/kit/avatar'

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md sm:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-md p-2 text-muted-foreground hover:bg-muted lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </button>

      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search clients, vehicles, orders..."
          className="h-9 w-full rounded-md border border-input bg-muted/40 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="ml-auto flex items-center gap-1">
        <button
          onClick={toggleTheme}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </button>
        <button
          className="relative rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="size-5" />
          <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-destructive ring-2 ring-background" />
        </button>
        <div className="ml-1 flex items-center gap-2.5 pl-1">
          <Avatar name="Elena Vasquez" size="sm" />
          <div className="hidden flex-col leading-tight md:flex">
            <span className="text-sm font-medium">Elena Vasquez</span>
            <span className="text-xs text-muted-foreground">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  )
}

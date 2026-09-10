'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface MenuAction {
  label: string
  icon?: React.ReactNode
  onClick: () => void
  destructive?: boolean
}

export function DropdownMenu({
  trigger,
  actions,
  align = 'end',
}: {
  trigger: React.ReactNode
  actions: MenuAction[]
  align?: 'start' | 'end'
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen((v) => !v)}>{trigger}</div>
      {open && (
        <div
          className={cn(
            'absolute z-30 mt-1 min-w-44 overflow-hidden rounded-lg border border-border bg-popover p-1 shadow-lg animate-in fade-in zoom-in-95',
            align === 'end' ? 'right-0' : 'left-0',
          )}
        >
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={() => {
                action.onClick()
                setOpen(false)
              }}
              className={cn(
                'flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors',
                action.destructive
                  ? 'text-destructive hover:bg-destructive/10'
                  : 'text-popover-foreground hover:bg-accent hover:text-accent-foreground',
              )}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

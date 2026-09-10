interface TooltipEntry {
  name?: string
  value?: number | string
  color?: string
  payload?: Record<string, unknown>
}

export function ChartTooltip({
  active,
  payload,
  label,
  formatter,
}: {
  active?: boolean
  payload?: TooltipEntry[]
  label?: string
  formatter?: (value: number | string) => string
}) {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-lg">
      {label && <p className="mb-1 font-medium text-popover-foreground">{label}</p>}
      <div className="flex flex-col gap-1">
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: entry.color }}
                aria-hidden
              />
              {entry.name}
            </span>
            <span className="font-medium tabular-nums text-popover-foreground">
              {formatter ? formatter(entry.value ?? 0) : entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

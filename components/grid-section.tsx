"use client"

import type React from "react"

import { GridCard } from "./grid-card"

interface GridItem {
  image: string
  title: string
  description: string
  icon?: React.ReactNode
}

interface GridSectionProps {
  title?: string
  subtitle?: string
  items: GridItem[]
  columns?: 1 | 2 | 3 | 4
}

export function GridSection({ title, subtitle, items, columns = 3 }: GridSectionProps) {
  const gridCols = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{title}</h2>}
            {subtitle && <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{subtitle}</p>}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {items.map((item, index) => (
            <GridCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

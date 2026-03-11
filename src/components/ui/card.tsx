import type { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

export function Card({ children, className = '', style, onClick }: CardProps) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      className={`w-full text-left ${className}`}
      style={{
        background: 'var(--color-pm-surface)',
        borderRadius: 'var(--radius-card)',
        padding: '20px',
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--color-pm-border)',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}

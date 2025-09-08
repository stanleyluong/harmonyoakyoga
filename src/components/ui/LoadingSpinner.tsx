import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  variant?: 'default' | 'dots' | 'pulse'
  text?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  className, 
  variant = 'default',
  text 
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex items-center justify-center space-x-1', className)}>
        <div className={cn('bg-accent rounded-full animate-bounce', sizes[size])} style={{ animationDelay: '0ms' }} />
        <div className={cn('bg-accent rounded-full animate-bounce', sizes[size])} style={{ animationDelay: '150ms' }} />
        <div className={cn('bg-accent rounded-full animate-bounce', sizes[size])} style={{ animationDelay: '300ms' }} />
        {text && (
          <span className={cn('ml-3 text-neutral/70', textSizes[size])}>
            {text}
          </span>
        )}
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div className={cn('flex flex-col items-center justify-center', className)}>
        <div className={cn('bg-accent rounded-full animate-pulse', sizes[size])} />
        {text && (
          <span className={cn('mt-2 text-neutral/70', textSizes[size])}>
            {text}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div className={cn(
        'animate-spin rounded-full border-2 border-accent/20 border-t-accent', 
        sizes[size]
      )} />
      {text && (
        <span className={cn('mt-2 text-neutral/70', textSizes[size])}>
          {text}
        </span>
      )}
    </div>
  )
}
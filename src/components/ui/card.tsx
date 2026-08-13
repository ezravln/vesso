import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {children}
    </div>
  )
}

interface CardImageProps {
  src: string
  alt?: string
  className?: string
}

export function CardImage({
  src,
  alt = "",
  className,
}: CardImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "object-contain",
        className
      )}
    />
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({
  children,
  className,
}: CardContentProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({
  children,
  className,
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-base font-semibold text-zinc-900",
        className
      )}
    >
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function CardDescription({
  children,
  className,
}: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-zinc-600",
        className
      )}
    >
      {children}
    </p>
  )
}

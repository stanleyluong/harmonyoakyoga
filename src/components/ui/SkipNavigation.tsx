interface SkipNavigationProps {
  links: Array<{
    href: string
    label: string
  }>
}

export default function SkipNavigation({ links }: SkipNavigationProps) {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <nav aria-label="Skip navigation links" className="fixed top-0 left-0 z-[9999] bg-neutral text-light p-2 rounded-br-brand">
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-3 py-2 text-sm font-medium rounded-brand bg-accent hover:bg-accent/90 focus:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-light focus:ring-offset-2 focus:ring-offset-neutral transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
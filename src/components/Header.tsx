import VessoImg from "@/assets/VessoText.png"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Produk", to: "#product" },
  { label: "Galeri", to: "#galery" },
  { label: "Blog", to: "#blog" },
  { label: "Tentang Kami", to: "#aboutme" },
  { label: "Hubungi Kami", to: "#contactme" },
]

export default function Header() {
  return (
    <header className={cn("w-full bg-white")}>
      <div className={cn("mx-auto max-w-7xl px-6 md:px-8 lg:px-32 flex items-center justify-between h-16")}>
        <a href="#" aria-label="Vesso home" className="inline-flex items-center">
          <img src={VessoImg} alt="Vesso" className={cn("h-9 w-auto")} />
        </a>

        <nav aria-label="Primary" className={cn("hidden md:flex items-center gap-8")}>
          {navLinks.map(({ label, to }) => (
            <a
              key={to}
              href={to}
              className={cn(
                "text-sm font-medium",
                "text-zinc-600",
                "transition-colors",
                "hover:text-zinc-800",
                "tracking-wide"
              )}
            >
              {label}
            </a>
          ))}

          <a
            href="#"
            className={cn(
              "rounded-full",
              "bg-[#6F8061]",
              "px-5 py-2",
              "text-sm font-medium text-white",
              "transition-colors",
              "hover:bg-[#5F7052]"
            )}
          >
            Masuk
          </a>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={false}
          aria-controls="mobile-menu"
          className={cn("flex md:hidden items-center text-zinc-700")}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className={cn("h-6 w-6")} />
        </button>
      </div>
    </header>
  )
}

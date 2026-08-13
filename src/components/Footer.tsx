import VessoLogo from "@/assets/VessoText.png"
import { cn } from "@/lib/utils"

const productLinks = [
  "Promo",
  "Baru",
  "Kategori 1",
  "Kategori 2",
  "Kategori 3",
]

const companyLinks = [
  "About",
  "Contact Us",
  "Lowongan Kerja",
  "Gallery",
  "Kebijakan Privasi",
  "Syarat dan Ketentuan",
]

export default function Footer() {
  return (
    <footer className={cn("w-full border-t border-zinc-200 bg-white")}>
      <div className={cn("mx-auto max-w-7xl px-6 md:px-8 lg:px-32 py-12")}>
        <div className={cn("grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16")}>
          <div>
            <a href="#" aria-label="Vesso home" className="inline-flex items-center">
              <img src={VessoLogo} alt="Vesso" className="h-8 w-auto mb-4" />
            </a>

            <address className="not-italic space-y-1 text-sm leading-6 text-zinc-500">
              <div>Alamat</div>
              <div>Kota</div>
              <div>Kode Pos</div>
              <div>Telp</div>
            </address>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                className="px-3 py-1.5 text-xs font-medium transition-colors bg-[#1877F2] text-white hover:bg-[#166FE5] focus:bg-[#166FE5]"
              >
                Facebook
              </a>

              <a
                href="#"
                className="px-3 py-1.5 text-xs font-medium transition-colors bg-[#E4405F] text-white hover:bg-[#D7375A] focus:bg-[#D7375A]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="px-3 py-1.5 text-xs font-medium transition-colors bg-[#1DA1F2] text-white hover:bg-[#166FE5] focus:bg-[#166FE5]"
              >
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h3 className={cn("mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-900")}>Produk</h3>

            <nav className="flex flex-col gap-3" aria-label="Footer produk">
              {productLinks.map((item) => (
                <a key={item} href="#" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">{item}</a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className={cn("mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-900")}>Perusahaan</h3>

            <nav className="flex flex-col gap-3" aria-label="Footer perusahaan">
              {companyLinks.map((item) => (
                <a key={item} href="#" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">{item}</a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className={cn("border-t border-zinc-100 px-6 py-5 md:px-8 lg:px-32")}>
        <div className={cn("mx-auto max-w-7xl flex flex-col gap-2 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between")}>
          <p>© 2021–2029 Vesso. All Rights Reserved.</p>
          <p>Bug report & feedback: Vesso</p>
        </div>
      </div>
    </footer>
  )
}

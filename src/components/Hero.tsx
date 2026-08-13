import BottleHeroImage from "@/assets/bottle-image-hero.png"
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <main id="main" role="main" className="w-full bg-white">
      <section className={cn("mx-auto px-6 md:px-8 flex items-center justify-center")}>
        <img
          src={BottleHeroImage}
          alt="Botol Vesso — closeup produk"
          className="w-full h-auto max-h-[650px] object-contain mx-auto"
          loading="eager"
        />
      </section>
    </main >
  )
}

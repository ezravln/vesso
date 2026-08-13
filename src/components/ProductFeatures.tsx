import BottleColors from "@/assets/colors.png"
import BottleSizes from "@/assets/size.png"
import BottleDurability from "@/assets/durable.png"
import BottleWarranty from "@/assets/warranty.png"
import FeatureItem from "./ui/FeatureItem"

const features = [
  {
    image: BottleColors,
    title: "Banyak Pilihan Warna",
    description:
      "Tersedia berbagai pilihan warna yang bisa disesuaikan dengan gayamu.",
  },
  {
    image: BottleSizes,
    title: "Berbagai Ukuran",
    description:
      "Pilih ukuran yang sesuai untuk kebutuhan sehari-hari maupun perjalanan.",
  },
  {
    image: BottleDurability,
    title: "Kuat dan Tahan Lama",
    description:
      "Dirancang dengan material berkualitas untuk menemani aktivitasmu.",
  },
  {
    image: BottleWarranty,
    title: "Garansi 1 Tahun",
    description:
      "Nikmati ketenangan dengan perlindungan garansi selama satu tahun.",
  },
]

export default function ProductFeatures() {
  return (
    <section
      aria-label="Keunggulan Vesso"
      className="w-full border-b border-zinc-100 bg-white"
    >
      <div className="mx-auto px-6 md:px-8 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureItem key={feature.title} feature={feature} index={index} isLast={index >= features.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
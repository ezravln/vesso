const availableAt = [
  {
    icon: "https://img.logo.dev/tokopedia.com?token=pk_MQ7mUwekSCGLw7VIwcLFYg",
    title: "Tokopedia",
  },
  {
    icon: "https://img.logo.dev/bukalapak.com?token=pk_MQ7mUwekSCGLw7VIwcLFYg",
    title: "Bukalapak",
  },
  {
    icon: "https://img.logo.dev/shopee.com?token=pk_MQ7mUwekSCGLw7VIwcLFYg",
    title: "Shopee",
  },
  {
    icon: "https://img.logo.dev/lazada.com?token=pk_MQ7mUwekSCGLw7VIwcLFYg",
    title: "Lazada",
  },
  {
    icon: "https://img.logo.dev/blibli.com?token=pk_MQ7mUwekSCGLw7VIwcLFYg",
    title: "Blibli",
  },
]

export default function AvailableAt() {
  return (
    <section className="w-full border-t border-zinc-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-32 py-10">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">Tersedia di</h2>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-4">
          {availableAt.map((item) => (
            <a
              key={item.title}
              href="#"
              aria-label={`Tersedia di ${item.title}`}
              className="group flex items-center w-30 gap-3 p-2 transition-colors rounded-sm"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-6 w-6 object-contain md:grayscale transition-all duration-200 group-hover:grayscale-0 group-focus:grayscale-0"
              />

              <span className="text-sm font-medium text-zinc-700">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

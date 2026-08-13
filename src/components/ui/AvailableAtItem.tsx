interface Item {
    icon: string
    title: string
}

export default function AvailableAtItem({ item }: { item: Item }) {
    return (
        <a
            href="#"
            aria-label={`Tersedia di ${item.title}`}
            className="group flex items-center gap-3 p-2 transition-colors hover:bg-zinc-50 rounded-sm"
        >
            <div className="flex items-center justify-center w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-sm">
                <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 w-6 object-contain grayscale transition-all duration-200 group-hover:grayscale-0 group-focus:grayscale-0"
                />
            </div>

            <span className="text-sm font-medium text-zinc-700">{item.title}</span>
        </a>
    )
}

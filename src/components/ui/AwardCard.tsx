import { Card, CardImage, CardContent, CardTitle } from "./card"

interface Award {
    image: string
    title: string
}

export default function AwardCard({ award }: { award: Award }) {
    return (
        <Card
            className="w-full max-w-xs bg-white border border-zinc-100 rounded-sm p-6 transition-colors duration-150 focus-within:border-zinc-200"
        >
            <figure className="w-full flex items-center justify-center">
                <CardImage src={award.image} alt={award.title} className="h-28 w-auto object-contain" />
            </figure>

            <CardContent className="pt-6 text-center">
                <CardTitle className="text-sm text-zinc-800 tracking-tight">{award.title}</CardTitle>
            </CardContent>
        </Card>
    )
}

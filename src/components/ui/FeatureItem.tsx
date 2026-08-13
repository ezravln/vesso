import { cn } from "@/lib/utils"
import { Card, CardImage, CardContent, CardTitle, CardDescription } from "./card"

interface Feature {
    image: string
    title: string
    description: string
}

interface Props {
    feature: Feature
    index: number
    isLast?: boolean
}

export default function FeatureItem({ feature, index, isLast = false }: Props) {
    return (
        <Card
            className={cn(
                "flex items-center gap-5",
                "border-0 border-b border-zinc-100",
                "px-5 py-8",
                index % 2 === 0 ? "flex-row" : "flex-row-reverse",
                "sm:flex-row sm:border-b sm:border-r-0",
                "sm:px-6 sm:py-10",
                (index === 0 || index === 2) && "sm:border-r sm:border-zinc-100",
                (index === 2 || index === 3) && "sm:border-b-0",
                "lg:flex-col lg:items-center lg:gap-6",
                "lg:border-b-0 lg:border-r",
                "lg:px-8 lg:py-12",
                index === 3 && "lg:border-r-0 border-b-0",
            )}
        >
            <div className={cn(
                "flex shrink-0 items-center justify-center",
                "h-24 w-24",
                "sm:h-28 sm:w-28",
                "lg:h-32 lg:w-32",
            )}>
                <CardImage
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-contain"
                />
            </div>

            <CardContent
                className={cn(
                    "min-w-0 flex-1",
                    "text-left",
                    "lg:flex-none lg:text-center",
                )}
            >
                <CardTitle
                    className={cn(
                        "text-base font-medium",
                        "tracking-tight text-zinc-900",
                        "lg:text-[17px]",
                    )}
                >
                    {feature.title}
                </CardTitle>

                <CardDescription
                    className={cn(
                        "mt-2",
                        "text-sm leading-6",
                        "text-zinc-500",
                    )}
                >
                    {feature.description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}

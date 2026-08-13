import { Card, CardContent, CardImage, CardTitle } from "./ui/card"

const awards = [
  {
    image: "https://plus.unsplash.com/premium_photo-1712500155262-7672faece06b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Top Brand 2016–2020",
  },
  {
    image: "https://images.unsplash.com/photo-1656761961810-9e0f885dff6a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Popular Brand Award 2016–2020",
  },
  {
    image: "https://images.unsplash.com/photo-1643080203000-5f642f229c82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9wJTIwaW5vdmF0aW9uJTIwYXdhcmR8ZW58MHx8MHx8fDA%3D",
    title: "Top Innovation 2016–2020",
  },
]

export default function Awards() {
  return (
    <section
      aria-labelledby="awards-heading"
      className="w-full bg-[#F9FAFB]"
    >
      <div className="mx-auto px-6 py-20 md:px-8 lg:px-32">
        <div className="mb-16 text-center">
          <h2
            id="awards-heading"
            className="
              text-2xl
              font-medium
              tracking-tight
              text-zinc-900
              md:text-3xl
            "
          >
            Penghargaan
          </h2>
        </div>

        <div
          role="list"
          className="
            mx-auto
            grid
            max-w-5xl
            grid-cols-1
            divide-y divide-zinc-200
            sm:grid-cols-3
            sm:divide-x
            sm:divide-y-0
          "
        >
          {awards.map((award) => (
            <Card
              key={award.title}
              className="
                group
                cursor-pointer
                flex
                min-h-60
                items-center
                justify-center
                px-8
                py-10
                text-center
              "
            >
              <CardContent className="group-hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                <CardImage
                  src={award.image}
                  alt={award.title}
                  className="
                    h-32
                    w-32
                    object-cover
                    md:h-36
                    md:w-36
                  "
                />

                <CardTitle
                  className="
                    mt-7
                    max-w-48
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-zinc-500
                  "
                >
                  {award.title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
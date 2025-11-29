import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "FlowTask has transformed how our team works. We've cut our meeting time in half and everyone knows exactly what they need to do.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "/professional-woman-headshot.png",
  },
  {
    content:
      "The best project management tool we've ever used. Simple enough to get started immediately, powerful enough to scale with us.",
    author: "Marcus Johnson",
    role: "Engineering Lead",
    company: "StartupXYZ",
    avatar: "/professional-man-headshot.png",
  },
  {
    content:
      "We tried every tool out there. FlowTask is the only one that stuck. Our team adoption went from 30% to 100% in two weeks.",
    author: "Emily Rodriguez",
    role: "Operations Director",
    company: "GrowthCo",
    avatar: "/testimonial-person-3.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/30 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Testimonials</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by teams everywhere
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See why thousands of teams choose FlowTask to get their best work done.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="flex-1 text-lg text-foreground">&ldquo;{testimonial.content}&rdquo;</blockquote>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

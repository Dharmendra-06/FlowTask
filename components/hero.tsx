import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium text-muted-foreground">Now in public beta</span>
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The complete platform to manage your work
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Your team&apos;s toolkit to stop juggling tools and start shipping faster. Securely plan, track, and
              deliver with FlowTask.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Get started free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <Play className="h-4 w-4" />
                Watch demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">No credit card required · Free forever plan</p>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl">
              <img
                src="/modern-project-management-dashboard-with-tasks-kan.jpg"
                alt="FlowTask dashboard preview"
                className="rounded-xl"
                width={600}
                height={500}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-lg sm:-bottom-6 sm:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Task completed</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

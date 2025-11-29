import { Zap, Users, BarChart3, Shield, Clock, Layers } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with instant updates and real-time collaboration that keeps your team in sync.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Bring your team together with shared workspaces, comments, and seamless communication tools.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get insights into team performance with powerful dashboards and customizable reports.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and SOC 2 compliance to keep your data safe and secure.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Built-in time tracking helps you understand where time goes and optimize workflows.",
  },
  {
    icon: Layers,
    title: "Integrations",
    description: "Connect with 100+ tools you already use including Slack, GitHub, and Google Workspace.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Features</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to ship faster
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed to help teams of all sizes work more efficiently and deliver exceptional results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

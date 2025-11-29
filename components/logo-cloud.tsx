export function LogoCloud() {
  const stats = [
    { value: "20 days", label: "saved on daily workflows", company: "Spotify" },
    { value: "98%", label: "faster project delivery", company: "Airbnb" },
    { value: "300%", label: "increase in productivity", company: "Slack" },
    { value: "6×", label: "faster team collaboration", company: "Dropbox" },
  ]

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">Trusted by leading teams worldwide</p>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <p className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{stat.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

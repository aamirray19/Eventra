import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eventra — Coming Soon" },
      {
        name: "description",
        content: "Trade on events, or open your own room and stake on what happens next. Coming soon.",
      },
      { property: "og:title", content: "Eventra — Coming Soon" },
      {
        property: "og:description",
        content: "Trade on events, or open your own room and stake on what happens next. Coming soon.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* subtle emerald glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        {/* Hero */}
        <main className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs text-muted-foreground">
            <span className="text-primary">✦</span>
            Coming Soon
            <span className="text-primary">✦</span>
          </div>

          <h1 className="text-shimmer mt-8 max-w-3xl text-6xl leading-[1.05] tracking-tight md:text-8xl lg:text-9xl">
            <span className="font-serif italic">Eventra</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm text-muted-foreground md:text-base">
            Eventra turns events into markets. Trade on what happens next, or
            open your own event room and let others stake on it. Something
            special is coming.
          </p>
        </main>
      </div>
    </div>
  );
}

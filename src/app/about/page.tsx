import content from "@/content/about.json";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-end min-h-[90vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/career-growth.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div
          className="relative z-10 w-full max-w-3xl px-6 pb-20"
          style={{ marginLeft: "8vw" }}
        >
          {/* Tag */}
          <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm w-fit">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: "#FB8C00" }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase text-white/90"
              style={{
                fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              }}
            >
              {content.hero.tag}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            style={{
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            {content.hero.titleLine1}
            <br />
            {content.hero.titleLine2Plain}
            <span style={{ color: "#FB8C00" }}> {content.hero.titleLine2Accent}</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section
        className="w-full py-24 px-6"
        style={{ backgroundColor: "#F2F1EF" }}
      >
        <div
          className="max-w-3xl"
          style={{ marginLeft: "8vw" }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-8"
            style={{
              color: "#FB8C00",
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
            }}
          >
            {content.intro.label}
          </p>
          <p
            className="text-xl md:text-2xl text-gray-800 leading-relaxed"
            style={{
              fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {content.intro.body}
          </p>
        </div>
      </section>
    </>
  );
}

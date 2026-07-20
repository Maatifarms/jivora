import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote: "Sourcing certified organic cotton from Portugal used to require days of manual document auditing. Jivora's AI matched us to LoomCraft and estimated customs duties in seconds. Our shipping time dropped from 3 weeks to 4 days.",
    author: "Elena Rostova",
    role: "Head of Sourcing, EcoThread Ltd (London, UK)",
    rating: 5,
    matchBadge: "Matched via AI Sourcing"
  },
  {
    quote: "As a German solar panel distributor, compliance is our biggest hurdle. Jivora's AI compliance checklist ensured our German imports met all EU environmental directives automatically. Truly a modern B2B trade operating system.",
    author: "Dieter Meyer",
    role: "Operations Director, SolarWerks GmbH (Frankfurt, Germany)",
    rating: 5,
    matchBadge: "Matched via AI Sourcing"
  }
];

export default function SuccessStories() {
  return (
    <section className="bg-grey-light py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-sky">CASE STUDIES</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Success Stories
          </h2>
          <p className="text-base text-navy-muted">
            See how importers and exporters across the UK and Europe are scaling their B2B operations using JIVORA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="rounded-2xl border border-grey-border bg-white p-6 md:p-8 space-y-6 relative hover:border-brand-sky-accent transition-all duration-300 card-shadow-premium hover:-translate-y-1"
            >
              {/* Quote bubble decor */}
              <Quote className="absolute right-6 top-6 h-12 w-12 text-grey-medium/50 rotate-180 flex-shrink-0" />
              
              {/* Stars & Match badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <span className="inline-flex items-center gap-1 rounded bg-brand-sky-light/50 px-2 py-0.5 text-[10px] font-bold text-brand-sky-dark border border-brand-sky-accent/20">
                  <Sparkles className="h-3 w-3 text-brand-sky" />
                  <span>{t.matchBadge}</span>
                </span>
              </div>

              {/* Text */}
              <p className="text-sm font-medium text-navy/90 leading-relaxed relative z-10 italic">
                "{t.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-grey-border/50 pt-4">
                <h4 className="text-sm font-bold text-navy">{t.author}</h4>
                <p className="text-xs text-navy-muted">{t.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

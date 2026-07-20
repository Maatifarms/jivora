import { Users, MessageCircle, Star, Sparkles } from "lucide-react";

export default function CommunitySection() {
  const stories = [
    {
      title: "London Retail Group Sourced GOTS Fabric in 4 Days",
      author: "David Miller • UK Wholesale Importer",
      quote: "Jivora AI pre-cleared our Portuguese supplier. We saved £14,000 on ocean freight using recommended DDP Incoterms."
    },
    {
      title: "Porto Textile Looms Scaled UK Export Volume by 200%",
      author: "Sofia Silva • LoomCraft Textiles Lda",
      quote: "Our factory audit score of 9.9/10 connected us directly with major retail chains in London, Manchester, and Berlin."
    }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">Trade Community & Success Stories</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">15,000+ Verified Trade Network</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        {stories.map((s, idx) => (
          <div key={idx} className="rounded-xl border border-grey-border bg-grey-light/60 p-5 space-y-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <h4 className="font-extrabold text-navy text-sm">{s.title}</h4>
            <p className="text-navy-muted italic leading-relaxed">"{s.quote}"</p>
            <div className="font-bold text-navy text-[11px] pt-1">{s.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

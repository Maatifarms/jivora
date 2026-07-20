"use client";

import { Bookmark, Star, Trash2 } from "lucide-react";
import { useState } from "react";

export default function SavedSearches() {
  const [favorites, setFavorites] = useState([
    { id: "1", query: "GOTS Organic Linen Fabrics Porto", type: "Search Query", date: "Today" },
    { id: "2", query: "LoomCraft Textiles Lda", type: "Supplier Profile", date: "Yesterday" }
  ]);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-4 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Bookmark className="h-5 w-5 text-brand-sky" />
          <h4 className="text-base font-extrabold text-navy">Saved Sourcing Favorites ({favorites.length})</h4>
        </div>
        <span className="text-xs font-bold text-navy-muted">Quick Access</span>
      </div>

      <div className="space-y-2 text-xs">
        {favorites.map((f) => (
          <div key={f.id} className="flex items-center justify-between p-3 rounded-xl bg-grey-light border border-grey-border/40">
            <div>
              <span className="font-extrabold text-navy block">{f.query}</span>
              <span className="text-[10px] text-navy-muted">{f.type} • Saved {f.date}</span>
            </div>
            <button
              onClick={() => removeFavorite(f.id)}
              className="p-1 text-navy-muted hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";

const INITIAL_SUPPLIERS = [
  {
    id: 1, name: "Mayvenn Hair", logo: "M", origin: "USA", tags: ["Popular", "Certified"],
    products: [
      { type: "100% Human (Brazilian)", category: "human", texture: "Body Wave", lengths: "12\"–30\"", price: "$95–$340", rating: 4.7, reviews: 1380 },
      { type: "100% Human (Peruvian)", category: "human", texture: "Straight", lengths: "10\"–28\"", price: "$85–$310", rating: 4.5, reviews: 940 },
      { type: "100% Human (Malaysian)", category: "human", texture: "Deep Curly", lengths: "12\"–26\"", price: "$99–$299", rating: 4.4, reviews: 610 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Loose Wave", lengths: "12\"–24\"", price: "$48–$120", rating: 3.9, reviews: 475 },
    ],
  },
  {
    id: 2, name: "Luxy Hair", logo: "L", origin: "Canada", tags: ["Luxury", "Extensions"],
    products: [
      { type: "100% Remy Human", category: "human", texture: "Clip-In Straight", lengths: "16\"–24\"", price: "$159–$419", rating: 4.8, reviews: 2540 },
      { type: "100% Remy Human", category: "human", texture: "Clip-In Wavy", lengths: "18\"–22\"", price: "$179–$399", rating: 4.6, reviews: 1970 },
      { type: "100% Remy Human", category: "human", texture: "Halo Extension", lengths: "20\"–24\"", price: "$199–$349", rating: 4.9, reviews: 880 },
    ],
  },
  {
    id: 3, name: "Janet Collection", logo: "JC", origin: "USA", tags: ["Budget", "Wide Range"],
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Kinky Curly", lengths: "10\"–18\"", price: "$13–$38", rating: 4.0, reviews: 720 },
      { type: "Synthetic", category: "synthetic", texture: "Water Wave", lengths: "12\"–22\"", price: "$16–$44", rating: 3.8, reviews: 560 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Deep Wave", lengths: "14\"–20\"", price: "$30–$70", rating: 3.6, reviews: 340 },
      { type: "100% Human (Indian)", category: "human", texture: "Natural Straight", lengths: "10\"–26\"", price: "$65–$215", rating: 4.2, reviews: 830 },
    ],
  },
  {
    id: 4, name: "Sensationnel", logo: "SN", origin: "USA", tags: ["Wigs", "Versatile"],
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Lace Front Wig — Bob", lengths: "10\"–14\"", price: "$22–$60", rating: 4.1, reviews: 990 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Full Wig — Curly", lengths: "16\"–20\"", price: "$55–$145", rating: 3.7, reviews: 455 },
      { type: "100% Human", category: "human", texture: "HD Lace Wig — Straight", lengths: "14\"–28\"", price: "$130–$480", rating: 4.6, reviews: 720 },
    ],
  },
  {
    id: 5, name: "AliExpress Vendors", logo: "AE", origin: "China", tags: ["Wholesale", "Budget"],
    products: [
      { type: "100% Human (Vietnamese)", category: "human", texture: "Raw Straight", lengths: "8\"–32\"", price: "$28–$195", rating: 3.8, reviews: 5800 },
      { type: "Synthetic", category: "synthetic", texture: "Jumbo Braid", lengths: "24\"–36\"", price: "$6–$20", rating: 3.5, reviews: 3400 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Bouncy Curl", lengths: "12\"–22\"", price: "$20–$65", rating: 3.4, reviews: 2300 },
    ],
  },
  {
    id: 6, name: "Bobbi Boss", logo: "BB", origin: "USA", tags: ["Braids", "Protective"],
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Pre-Stretched Braid", lengths: "28\"–56\"", price: "$8–$22", rating: 4.3, reviews: 1600 },
      { type: "Synthetic", category: "synthetic", texture: "Knotless Box Braid Wig", lengths: "16\"–30\"", price: "$25–$75", rating: 4.2, reviews: 890 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Twist-Out Wig", lengths: "14\"–22\"", price: "$40–$95", rating: 3.8, reviews: 530 },
    ],
  },
  {
    id: 7, name: "Raw Indian Hair Co.", logo: "RI", origin: "India", tags: ["Raw Virgin", "Ethical"],
    products: [
      { type: "100% Human (Indian)", category: "human", texture: "Raw Wavy", lengths: "10\"–30\"", price: "$110–$380", rating: 4.9, reviews: 720 },
      { type: "100% Human (Indian)", category: "human", texture: "Raw Curly", lengths: "10\"–24\"", price: "$120–$350", rating: 4.8, reviews: 580 },
      { type: "100% Human (Indian)", category: "human", texture: "Raw Straight", lengths: "12\"–32\"", price: "$100–$360", rating: 4.7, reviews: 640 },
    ],
  },
  {
    id: 8, name: "Zury Sis", logo: "ZS", origin: "USA", tags: ["Affordable", "Wigs"],
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Lace Front — Pixie", lengths: "6\"–12\"", price: "$18–$45", rating: 3.9, reviews: 1100 },
      { type: "Synthetic", category: "synthetic", texture: "Lace Front — Long Straight", lengths: "22\"–28\"", price: "$25–$60", rating: 3.7, reviews: 870 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Half Wig — Layered", lengths: "16\"–20\"", price: "$35–$80", rating: 3.6, reviews: 420 },
    ],
  },
  {
    id: 9, name: "Divatress", logo: "DV", origin: "USA", tags: ["Multi-Brand", "Online"],
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Crochet Curl", lengths: "12\"–18\"", price: "$10–$30", rating: 4.0, reviews: 760 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Clip-In Curly", lengths: "14\"–20\"", price: "$35–$90", rating: 3.8, reviews: 390 },
      { type: "100% Human (Brazilian)", category: "human", texture: "Body Wave Bundle", lengths: "16\"–24\"", price: "$88–$260", rating: 4.4, reviews: 950 },
    ],
  },
  {
    id: 10, name: "Vivica A. Fox Hair", logo: "VF", origin: "USA", tags: ["Celebrity", "Wigs"],
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Full Wig — Glam", lengths: "14\"–20\"", price: "$28–$70", rating: 4.1, reviews: 1300 },
      { type: "Synthetic", category: "synthetic", texture: "Lace Front — Bob", lengths: "10\"–14\"", price: "$35–$80", rating: 4.0, reviews: 980 },
      { type: "100% Human", category: "human", texture: "Lace Front — Straight", lengths: "16\"–26\"", price: "$150–$420", rating: 4.5, reviews: 670 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Full Wig — Wavy", lengths: "18\"–22\"", price: "$55–$130", rating: 3.9, reviews: 480 },
    ],
  },
];

const CATEGORY_CONFIG = {
  human:     { label: "100% Human",  color: "#c8a97e", bg: "#2e1f0e" },
  synthetic: { label: "Synthetic",   color: "#7eb8c8", bg: "#0e1e2e" },
  mixed:     { label: "Blend",       color: "#b87ec8", bg: "#1e0e2e" },
};

function avgRating(products) {
  return products.reduce((a, p) => a + p.rating, 0) / products.length;
}

function StarRating({ rating, size = 13 }) {
  return (
    <span style={{ letterSpacing: 1 }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ color: s <= Math.round(rating) ? "#c8a97e" : "#3a2e2e", fontSize: size }}>&#9733;</span>
      ))}
      <span style={{ color: "#a08060", fontSize: size - 1, marginLeft: 4 }}>{rating.toFixed(1)}</span>
    </span>
  );
}

function InteractiveStars({ value, onChange }) {
  const [hover, setHover] = useState(0);
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {[1,2,3,4,5].map(s => (
        <span
          key={s}
          onClick={() => onChange(s)}
          onMouseEnter={() => setHover(s)}
          onMouseLeave={() => setHover(0)}
          style={{
            fontSize: 30, cursor: "pointer",
            color: s <= (hover || value) ? "#c8a97e" : "#2a1f1a",
            transition: "color 0.12s, transform 0.12s",
            transform: s <= (hover || value) ? "scale(1.25)" : "scale(1)",
            display: "inline-block", userSelect: "none",
          }}
        >&#9733;</span>
      ))}
    </div>
  );
}

function PriceBadge({ price }) {
  const low = parseInt(price.replace("$",""));
  const tier = low < 25 ? "💰" : low < 80 ? "💰💰" : "💰💰💰";
  return <span style={{ fontSize: 11, color: "#a08060" }}>{tier} {price}</span>;
}

function ProductRow({ product, delay }) {
  const cfg = CATEGORY_CONFIG[product.category];
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
      borderRadius: 10, marginBottom: 7,
      background: "rgba(255,255,255,0.025)", border: "1px solid rgba(200,169,126,0.09)",
      animation: `fadeUp 0.35s ease ${delay}s both`,
    }}>
      <span style={{
        fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 20, flexShrink: 0,
        background: cfg.bg, color: cfg.color, letterSpacing: 0.5,
        border: `1px solid ${cfg.color}40`, whiteSpace: "nowrap",
      }}>{cfg.label}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: "#e8d5b8", fontSize: 13, fontWeight: 600 }}>{product.texture}</div>
        <div style={{ color: "#7a6050", fontSize: 11 }}>{product.lengths}</div>
      </div>
      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div><StarRating rating={product.rating} /></div>
        <PriceBadge price={product.price} />
        <div style={{ color: "#5a4a40", fontSize: 10 }}>{product.reviews.toLocaleString()} reviews</div>
      </div>
    </div>
  );
}

function ReviewBubble({ review, delay }) {
  return (
    <div style={{
      background: "rgba(200,169,126,0.035)", border: "1px solid #251a10",
      borderRadius: 10, padding: "10px 12px", marginBottom: 8,
      animation: `fadeUp 0.3s ease ${delay}s both`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <span style={{ color: "#c8a97e", fontWeight: 600, fontSize: 13 }}>{review.name}</span>
        <StarRating rating={review.rating} size={11} />
      </div>
      <div style={{ color: "#8a7060", fontSize: 12, fontStyle: "italic", lineHeight: 1.5 }}>"{review.text}"</div>
      <div style={{ color: "#3a2818", fontSize: 10, marginTop: 5 }}>{review.product} · {review.date}</div>
    </div>
  );
}

function SupplierCard({ supplier, isExpanded, onToggle, onReviewClick, userReviews }) {
  const myReviews = userReviews.filter(r => r.supplierId === supplier.id);
  const avg = avgRating(supplier.products).toFixed(1);
  const hasHuman = supplier.products.some(p => p.category === "human");
  const hasSynth  = supplier.products.some(p => p.category === "synthetic");
  const hasMixed  = supplier.products.some(p => p.category === "mixed");

  return (
    <div style={{
      background: "linear-gradient(135deg, #1a1210 0%, #100c0a 100%)",
      border: `1px solid ${isExpanded ? "#c8a97e45" : "#1e1410"}`,
      borderRadius: 16, marginBottom: 11, overflow: "hidden",
      transition: "border-color 0.3s, box-shadow 0.3s",
      boxShadow: isExpanded ? "0 8px 36px rgba(200,169,126,0.11)" : "0 2px 10px rgba(0,0,0,0.5)",
    }}>
      <div onClick={onToggle} style={{ display: "flex", alignItems: "center", gap: 13, padding: "15px 16px", cursor: "pointer" }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10, flexShrink: 0,
          background: "linear-gradient(135deg, #c8a97e, #7a5a28)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 12, color: "#08060a",
        }}>{supplier.logo}</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ color: "#e8d5b8", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15 }}>{supplier.name}</span>
            <span style={{ color: "#4a3a30", fontSize: 11 }}>• {supplier.origin}</span>
          </div>
          <div style={{ display: "flex", gap: 5, marginTop: 5, flexWrap: "wrap" }}>
            {supplier.tags.map(t => (
              <span key={t} style={{ fontSize: 9, color: "#7a6040", background: "#160e08", border: "1px solid #2a1a0e", borderRadius: 20, padding: "2px 8px" }}>{t}</span>
            ))}
            <span style={{ fontSize: 9, color: "#c8a97e", background: "#1c1006", border: "1px solid #c8a97e28", borderRadius: 20, padding: "2px 8px" }}>
              {supplier.products.length} products
            </span>
            {myReviews.length > 0 && (
              <span style={{ fontSize: 9, color: "#7ec87e", background: "#081408", border: "1px solid #7ec87e28", borderRadius: 20, padding: "2px 8px" }}>
                {myReviews.length} review{myReviews.length > 1 ? "s" : ""} ✓
              </span>
            )}
          </div>
        </div>
        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <div style={{ color: "#c8a97e", fontSize: 20, fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>{avg}</div>
          <div style={{ color: "#4a3a30", fontSize: 9, letterSpacing: 1 }}>AVG</div>
        </div>
        <div style={{ color: "#3a2a20", fontSize: 15, transition: "transform 0.3s", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>&#9660;</div>
      </div>

      <div style={{ display: "flex", gap: 6, padding: "0 16px 12px", flexWrap: "wrap" }}>
        {hasHuman && <span style={{ fontSize: 9, color: CATEGORY_CONFIG.human.color, background: CATEGORY_CONFIG.human.bg, border: `1px solid ${CATEGORY_CONFIG.human.color}28`, borderRadius: 20, padding: "2px 10px" }}>100% Human ✓</span>}
        {hasSynth  && <span style={{ fontSize: 9, color: CATEGORY_CONFIG.synthetic.color, background: CATEGORY_CONFIG.synthetic.bg, border: `1px solid ${CATEGORY_CONFIG.synthetic.color}28`, borderRadius: 20, padding: "2px 10px" }}>Synthetic ✓</span>}
        {hasMixed  && <span style={{ fontSize: 9, color: CATEGORY_CONFIG.mixed.color, background: CATEGORY_CONFIG.mixed.bg, border: `1px solid ${CATEGORY_CONFIG.mixed.color}28`, borderRadius: 20, padding: "2px 10px" }}>Blend ✓</span>}
      </div>

      {isExpanded && (
        <div style={{ borderTop: "1px solid #1a1008" }}>
          <div style={{ padding: "12px 13px 4px" }}>
            <div style={{ color: "#4a3828", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Products & Ratings</div>
            {supplier.products.map((p, i) => <ProductRow key={i} product={p} delay={i * 0.04} />)}
          </div>

          {myReviews.length > 0 && (
            <div style={{ padding: "4px 13px 6px" }}>
              <div style={{ color: "#4a3828", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Community Reviews</div>
              {myReviews.map((r, i) => <ReviewBubble key={i} review={r} delay={i * 0.04} />)}
            </div>
          )}

          <div style={{ padding: "8px 13px 14px" }}>
            <button onClick={e => { e.stopPropagation(); onReviewClick(supplier); }} style={{
              width: "100%", padding: "11px", borderRadius: 16, cursor: "pointer",
              background: "linear-gradient(135deg, #e8c7a7, #d4a373)",
              border: "1px solid rgba(255,255,255,0.08)", color: "#1a1a1a",
              fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase",
              transition: "background 0.2s",
            }}>&#9997; Write a Review</button>
          </div>
        </div>
      )}
    </div>
  );
}

function ReviewModal({ supplier, onClose, onSubmit }) {
  const [name, setName]         = useState("");
  const [product, setProduct]   = useState(supplier.products[0].texture);
  const [rating, setRating]     = useState(0);
  const [text, setText]         = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]       = useState("");

  function handleSubmit() {
    if (!name.trim())  { setError("Please enter your name."); return; }
    if (rating === 0)  { setError("Please choose a star rating."); return; }
    if (text.trim().length < 10) { setError("Please write at least 10 characters."); return; }
    setError("");
    const today = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    onSubmit({ supplierId: supplier.id, name: name.trim(), product, rating, text: text.trim(), date: today });
    setSubmitted(true);
  }

  const inp = {
    width: "100%", background: "#0e0a08", border: "1px solid #251810",
    borderRadius: 9, padding: "10px 12px", color: "#e8d5b8",
    fontSize: 13, outline: "none", fontFamily: "'DM Sans', sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 999,
      background: "rgba(3,1,1,0.93)", display: "flex", alignItems: "flex-end",
      animation: "fadeUp 0.2s ease both",
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: "100%", maxWidth: 600, margin: "0 auto",
        background: "linear-gradient(160deg, #1c1410, #100c08)",
        border: "1px solid #2a1a10", borderRadius: "20px 20px 0 0",
        padding: "24px 18px 38px", maxHeight: "92vh", overflowY: "auto",
      }}>
        <div style={{ width: 36, height: 3, background: "#2a1a10", borderRadius: 2, margin: "0 auto 20px" }} />

        {submitted ? (
          <div style={{ textAlign: "center", padding: "28px 0" }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>&#10024;</div>
            <div style={{ color: "#c8a97e", fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 22, marginBottom: 8 }}>Thank You!</div>
            <div style={{ color: "#5a4a40", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              Your review for <strong style={{ color: "#e8d5b8" }}>{supplier.name}</strong> has been added.
            </div>
            <button onClick={onClose} style={{
              padding: "12px 32px", borderRadius: 30, border: "1px solid #c8a97e50",
              background: "#c8a97e12", color: "#c8a97e", fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}>Close</button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 20 }}>
              <div style={{ color: "#5a4030", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>Reviewing</div>
              <div style={{ color: "#e8d5b8", fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 20 }}>{supplier.name}</div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ color: "#6a5040", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Your Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Jasmine T." style={inp} />
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ color: "#6a5040", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Product</label>
              <select value={product} onChange={e => setProduct(e.target.value)} style={{ ...inp, cursor: "pointer" }}>
                {supplier.products.map((p, i) => (
                  <option key={i} value={p.texture} style={{ background: "#140f0c" }}>
                    {p.texture} ({CATEGORY_CONFIG[p.category].label})
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ color: "#6a5040", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Your Rating</label>
              <InteractiveStars value={rating} onChange={setRating} />
              {rating > 0 && (
                <div style={{ color: "#6a5a50", fontSize: 12, marginTop: 5 }}>
                  {["","Poor — Not recommended","Fair — Has some issues","Good — Worth buying","Great — Really happy!","Excellent — Absolutely love it!"][rating]}
                </div>
              )}
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ color: "#6a5040", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Your Review</label>
              <textarea
                value={text} onChange={e => setText(e.target.value.slice(0, 300))}
                placeholder="Share your experience — quality, shedding, shipping, customer service..."
                rows={4} style={{ ...inp, resize: "vertical", lineHeight: 1.6 }}
              />
              <div style={{ color: "#2e2010", fontSize: 10, marginTop: 3, textAlign: "right" }}>{text.length}/300</div>
            </div>

            {error && (
              <div style={{ color: "#c87e7e", fontSize: 12, marginBottom: 12, background: "#200e0e", border: "1px solid #c87e7e28", borderRadius: 8, padding: "9px 12px" }}>
                {error}
              </div>
            )}

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={onClose} style={{
                flex: 1, padding: "12px", borderRadius: 10, cursor: "pointer",
                background: "transparent", border: "1px solid #251810", color: "#4a3a30", fontSize: 13,
              }}>Cancel</button>
              <button onClick={handleSubmit} style={{
                flex: 2, padding: "12px", borderRadius: 10, cursor: "pointer",
                background: "linear-gradient(135deg, #c8a97e, #8a6830)",
                border: "none", color: "#08060a", fontSize: 13, fontWeight: 700, letterSpacing: 0.5,
              }}>Submit Review ✦</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [expandedId, setExpandedId]     = useState(null);
  const [filter, setFilter]             = useState("all");
  const [sortBy, setSortBy]             = useState("name");
  const [reviewTarget, setReviewTarget] = useState(null);
  const [userReviews, setUserReviews]   = useState([]);
  const [searchQ, setSearchQ]           = useState("");

  const filters = [
    { id: "all",       label: "All" },
    { id: "human",     label: "100% Human" },
    { id: "synthetic", label: "Synthetic" },
    { id: "mixed",     label: "Blend" },
  ];

  const filtered = INITIAL_SUPPLIERS
    .filter(s => {
      const matchCat    = filter === "all" ? true : s.products.some(p => p.category === filter);
      const matchSearch = searchQ === "" ? true :
        s.name.toLowerCase().includes(searchQ.toLowerCase()) ||
        s.tags.some(t => t.toLowerCase().includes(searchQ.toLowerCase())) ||
        s.products.some(p => p.texture.toLowerCase().includes(searchQ.toLowerCase()));
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "rating")   return avgRating(b.products) - avgRating(a.products);
      if (sortBy === "products") return b.products.length - a.products.length;
      return a.name.localeCompare(b.name);
    });

  const totalBase = INITIAL_SUPPLIERS.reduce((a, s) => a + s.products.reduce((b, p) => b + p.reviews, 0), 0);

  return 
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #fffaf5 0%, #f8efe6 45%, #f1e3d3 100%)", color: "#2b2b2b", fontFamily: "'DM Sans', sans-serif", paddingBottom: 60 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fffaf5; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        @keyframes shimmer { 0%,100% { opacity:0.5; } 50% { opacity:1; } }
        input::placeholder, textarea::placeholder { color: #362518; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #070403; }
        ::-webkit-scrollbar-thumb { background: #321e10; border-radius: 2px; }
      `}</style>

      {/* Hero */}
      <div style={{
  textAlign: "center",
  padding: "110px 24px 80px",
  minHeight: "72vh",
  background: "#fffaf5",
  
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderBottom: "1px solid rgba(255,255,255,0.08)"
}}>
      
      <div style={{
  fontSize: 11,
  letterSpacing: 6,
  color: "#d4a373",
  textTransform: "uppercase",
  marginBottom: 18
}}>
  ✦ Hair Supplier Intelligence ✦

        </div>
        <h1 style={{
  fontFamily: "'Playfair Display', serif",
  fontWeight: 900,
  fontSize: "clamp(36px, 6vw, 64px)",
  textAlign: "center",
  marginBottom: "10px",
  color: "#f7eFe8"
}}>
  The Hair <br />
  <span style={{ color: "#e8c7a7" }}>
    Supplier Rater
  </span>
</h1>
      
<p style={{
  color: "#d8cfc7",
  fontSize: "18px",
  maxWidth: "620px",
  margin: "0 auto",
  lineHeight: 1.8
}}>
  Compare real hair, synthetic & blends — honest prices, quality ratings & community reviews.
</p>
      </div>

      {/* Stats Bar */}
      <div style={{ marginTop: "28px" }}>
  <button style={{
    background: "linear-gradient(135deg, #e8c7a7, #d4a373)",
    color: "#1a1a1a",
    padding: "14px 30px",
    borderRadius: "999px",
    border: "none",
    fontWeight: 700,
    fontSize: "15px",
    letterSpacing: "0.3px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(212,163,115,0.28)"
  }}>
    Explore Vendors
  </button>
</div>

      {/* Controls */}
      <div style={{ padding: "16px 13px 4px", maxWidth: 600, margin: "0 auto" }}>
        {/* Search */}
        <div style={{ position: "relative", marginBottom: 11 }}>
          <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#3a2a18", fontSize: 13 }}>&#128269;</span>
          <input
            value={searchQ} onChange={e => setSearchQ(e.target.value)}
            placeholder="Search by supplier name or texture..."
            style={{
              width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 30, padding: "10px 12px 10px 32px",
              color: "#f7efe8", fontSize: 13, outline: "none", fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
          />
          {searchQ && (
            <button onClick={() => setSearchQ("")} style={{
              position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
              background: "0f0f10", border: "none", color: "#f7efe8", fontSize: 16, cursor: "pointer", padding: 0,
            }}>&#215;</button>
          )}
        </div>

        {/* Filter */}
        <div style={{ display: "flex", gap: 7, marginBottom: 10, overflowX: "auto", paddingBottom: 2 }}>
          {filters.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{
              padding: "8px 16px",
borderRadius: 30,
border: "1px solid rgba(255,255,255,0.12)",

background: filter === f.id
? "linear-gradient(135deg, #e8c7a7, #d4a373)"
: "rgba(255,255,255,0.04)",

color: filter === f.id
? "#1a1a1a"
: "#f7efe8",

fontSize: 12,
fontWeight: 600,
              cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s",
            }}>{f.label}</button>
          ))}
        </div>

        {/* Sort */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#2e2010", fontSize: 10, letterSpacing: 1, textTransform: "uppercase" }}>Sort</span>
          {[["name","Name"],["rating","Top Rated"],["products","Most Products"]].map(([val, lab]) => (
            <button key={val} onClick={() => setSortBy(val)} style={{
              padding: "4px 11px", borderRadius: 20, border: "1px solid",
              borderColor: sortBy === val ? "#c8a97e45" : "#180e06",
              background: sortBy === val ? "#c8a97e07" : "transparent",
              color: sortBy === val ? "#c8a97e" : "#2e2010",
              fontSize: 11, cursor: "pointer", transition: "all 0.2s",
            }}>{lab}</button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div style={{ maxWidth: 600, margin: "6px auto 0", padding: "0 13px" }}>
        <span style={{ color: "#251808", fontSize: 11 }}>
          {filtered.length} supplier{filtered.length !== 1 ? "s" : ""}
          {searchQ && <span> matching "<span style={{ color: "#4a3020" }}>{searchQ}</span>"</span>}
        </span>
      </div>

      {/* Cards */}
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "8px 13px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "50px 0", color: "#2e2010" }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>&#128269;</div>
            <div style={{ fontSize: 14 }}>No suppliers match your search.</div>
          </div>
        ) : filtered.map(s => (
          <SupplierCard
            key={s.id} supplier={s}
            isExpanded={expandedId === s.id}
            onToggle={() => setExpandedId(expandedId === s.id ? null : s.id)}
            onReviewClick={sup => setReviewTarget(sup)}
            userReviews={userReviews}
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{ maxWidth: 600, margin: "4px auto 0", padding: "0 13px" }}>
        <div style={{ borderRadius: 12, background: "#090605", border: "1px solid #140a06", padding: "14px" }}>
          <div style={{ color: "#2e2010", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Hair Type Guide</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => (
              <div key={key} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: cfg.color, flexShrink: 0, marginTop: 4 }} />
                <div>
                  <span style={{ color: cfg.color, fontSize: 11, fontWeight: 600 }}>{cfg.label}</span>
                  <span style={{ color: "#2e2010", fontSize: 11, marginLeft: 6 }}>
                    {key === "human"     && "— Virgin or Remy from a single donor. Most natural feel, longest lasting, highest cost."}
                    {key === "synthetic" && "— Man-made fibers. Budget-friendly, less heat-versatile, great for protective styles."}
                    {key === "mixed"     && "— Human & synthetic combined. Mid-range price/quality, blends durability with a natural look."}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", color: "#160e06", fontSize: 9, marginTop: 20, letterSpacing: 3 }}>
        ✦ TAP A SUPPLIER · EXPAND PRODUCTS · WRITE A REVIEW ✦
      </div>

      {reviewTarget && (
        <ReviewModal
          supplier={reviewTarget}
          onClose={() => setReviewTarget(null)}
          onSubmit={review => {
            setUserReviews(prev => [...prev, review]);
            setTimeout(() => setReviewTarget(null), 2000);
          }}
        />
      )}
    </div>
)
}
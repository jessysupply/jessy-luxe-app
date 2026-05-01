import React, { useState } from "react";
const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

const INITIAL_SUPPLIERS = [
  {
    id: 1, name: "Mayvenn Hair", logo: "M", origin: "USA", tags: ["Popular", "Certified"],
    website: "https://www.mayvenn.com/jessyluxebeauty",
    shopLink: "https://www.mayvenn.com/jessyluxebeauty",
    products: [
      { type: "100% Human (Brazilian)", category: "human", texture: "Body Wave", lengths: "12\"–30\"", price: "$95–$340", rating: 4.7, reviews: 1380 },
      { type: "100% Human (Peruvian)", category: "human", texture: "Straight", lengths: "10\"–28\"", price: "$85–$310", rating: 4.5, reviews: 940 },
      { type: "100% Human (Malaysian)", category: "human", texture: "Deep Curly", lengths: "12\"–26\"", price: "$99–$299", rating: 4.4, reviews: 610 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Loose Wave", lengths: "12\"–24\"", price: "$48–$120", rating: 3.9, reviews: 475 },
    ],
  },
  {
    id: 2, name: "Luxy Hair", logo: "L", origin: "Canada", tags: ["Luxury", "Extensions"],
    website: "https://www.amazon.com/s?k=luxy+hair+extensions&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=luxy+hair+extensions&tag=jessyluxebeau-20",
    products: [
      { type: "100% Remy Human", category: "human", texture: "Clip-In Straight", lengths: "16\"–24\"", price: "$159–$419", rating: 4.8, reviews: 2540 },
      { type: "100% Remy Human", category: "human", texture: "Clip-In Wavy", lengths: "18\"–22\"", price: "$179–$399", rating: 4.6, reviews: 1970 },
      { type: "100% Remy Human", category: "human", texture: "Halo Extension", lengths: "20\"–24\"", price: "$199–$349", rating: 4.9, reviews: 880 },
    ],
  },
  {
    id: 3, name: "Janet Collection", logo: "JC", origin: "USA", tags: ["Budget", "Wide Range"],
    website: "https://www.amazon.com/s?k=janet+collection+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=janet+collection+hair&tag=jessyluxebeau-20",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Kinky Curly", lengths: "10\"–18\"", price: "$13–$38", rating: 4.0, reviews: 720 },
      { type: "Synthetic", category: "synthetic", texture: "Water Wave", lengths: "12\"–22\"", price: "$16–$44", rating: 3.8, reviews: 560 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Deep Wave", lengths: "14\"–20\"", price: "$30–$70", rating: 3.6, reviews: 340 },
      { type: "100% Human (Indian)", category: "human", texture: "Natural Straight", lengths: "10\"–26\"", price: "$65–$215", rating: 4.2, reviews: 830 },
    ],
  },
  {
    id: 4, name: "Sensationnel", logo: "SN", origin: "USA", tags: ["Wigs", "Versatile"],
    website: "https://www.amazon.com/s?k=sensationnel+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=sensationnel+hair&tag=jessyluxebeau-20",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Lace Front Wig — Bob", lengths: "10\"–14\"", price: "$22–$60", rating: 4.1, reviews: 990 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Full Wig — Curly", lengths: "16\"–20\"", price: "$55–$145", rating: 3.7, reviews: 455 },
      { type: "100% Human", category: "human", texture: "HD Lace Wig — Straight", lengths: "14\"–28\"", price: "$130–$480", rating: 4.6, reviews: 720 },
    ],
  },
  {
    id: 5, name: "AliExpress Vendors", logo: "AE", origin: "China", tags: ["Wholesale", "Budget"],
    website: "https://www.aliexpress.com",
shopLink: "https://www.aliexpress.com/category/200000456/hair-extensions.html",
    products: [
      { type: "100% Human (Vietnamese)", category: "human", texture: "Raw Straight", lengths: "8\"–32\"", price: "$28–$195", rating: 3.8, reviews: 5800 },
      { type: "Synthetic", category: "synthetic", texture: "Jumbo Braid", lengths: "24\"–36\"", price: "$6–$20", rating: 3.5, reviews: 3400 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Bouncy Curl", lengths: "12\"–22\"", price: "$20–$65", rating: 3.4, reviews: 2300 },
    ],
  },
  {
    id: 6, name: "Bobbi Boss", logo: "BB", origin: "USA", tags: ["Braids", "Protective"],
    website: "https://www.amazon.com/s?k=bobbi+boss+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=bobbi+boss+hair&tag=jessyluxebeau-20",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Pre-Stretched Braid", lengths: "28\"–56\"", price: "$8–$22", rating: 4.3, reviews: 1600 },
      { type: "Synthetic", category: "synthetic", texture: "Knotless Box Braid Wig", lengths: "16\"–30\"", price: "$25–$75", rating: 4.2, reviews: 890 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Twist-Out Wig", lengths: "14\"–22\"", price: "$40–$95", rating: 3.8, reviews: 530 },
    ],
  },
  {
    id: 7, name: "Raw Indian Hair Co.", logo: "RI", origin: "India", tags: ["Raw Virgin", "Ethical"],
    website: "https://www.indianhairgiant.com",
shopLink: "https://www.indianhairgiant.com/collections/all",
    products: [
      { type: "100% Human (Indian)", category: "human", texture: "Raw Wavy", lengths: "10\"–30\"", price: "$110–$380", rating: 4.9, reviews: 720 },
      { type: "100% Human (Indian)", category: "human", texture: "Raw Curly", lengths: "10\"–24\"", price: "$120–$350", rating: 4.8, reviews: 580 },
      { type: "100% Human (Indian)", category: "human", texture: "Raw Straight", lengths: "12\"–32\"", price: "$100–$360", rating: 4.7, reviews: 640 },
    ],
  },
  {
    id: 8, name: "Zury Sis", logo: "ZS", origin: "USA", tags: ["Affordable", "Wigs"],
    website: "https://www.amazon.com/s?k=zury+sis+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=zury+sis+hair&tag=jessyluxebeau-20",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Lace Front — Pixie", lengths: "6\"–12\"", price: "$18–$45", rating: 3.9, reviews: 1100 },
      { type: "Synthetic", category: "synthetic", texture: "Lace Front — Long Straight", lengths: "22\"–28\"", price: "$25–$60", rating: 3.7, reviews: 870 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Half Wig — Layered", lengths: "16\"–20\"", price: "$35–$80", rating: 3.6, reviews: 420 },
    ],
  },
  {
    id: 9, name: "Ebonyline", logo: "EL", origin: "USA", tags: ["Multi-Brand", "Online"],
    website: "https://www.ebonyline.com",
    shopLink: "https://www.ebonyline.com",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Lace Front Wig", lengths: "10\"–22\"", price: "$15–$50", rating: 4.2, reviews: 3200 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Human Blend Wig", lengths: "12\"–24\"", price: "$30–$90", rating: 4.1, reviews: 2800 },
      { type: "100% Human", category: "human", texture: "Remy Weave Bundle", lengths: "10\"–30\"", price: "$50–$200", rating: 4.3, reviews: 2100 },
    ],
  },
  {
    id: 10, name: "Vivica A. Fox Hair", logo: "VF", origin: "USA", tags: ["Celebrity", "Wigs"],
    website: "https://www.amazon.com/s?k=vivica+fox+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=vivica+fox+hair&tag=jessyluxebeau-20",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Full Wig — Glam", lengths: "14\"–20\"", price: "$28–$70", rating: 4.1, reviews: 1300 },
      { type: "Synthetic", category: "synthetic", texture: "Lace Front — Bob", lengths: "10\"–14\"", price: "$35–$80", rating: 4.0, reviews: 980 },
      { type: "100% Human", category: "human", texture: "Lace Front — Straight", lengths: "16\"–26\"", price: "$150–$420", rating: 4.5, reviews: 670 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Full Wig — Wavy", lengths: "18\"–22\"", price: "$55–$130", rating: 3.9, reviews: 480 },
    ],
  },
  {
    id: 11, name: "Outre Hair", logo: "OT", origin: "USA", tags: ["Trendy", "Affordable"],
    website: "https://www.amazon.com/s?k=outre+hair&tag=jessyluxebeau-20",
shopLink: "https://www.amazon.com/s?k=outre+hair&tag=jessyluxebeau-20",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Lace Front Wig", lengths: "12\"–26\"", price: "$20–$60", rating: 4.2, reviews: 2100 },
      { type: "100% Human", category: "human", texture: "Remi Weave", lengths: "10\"–30\"", price: "$40–$150", rating: 4.3, reviews: 1500 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "HD Lace Wig", lengths: "14\"–24\"", price: "$50–$120", rating: 4.1, reviews: 980 },
    ],
  },
  {
    id: 12, name: "Shake-N-Go", logo: "SG", origin: "USA", tags: ["Budget", "Wigs"],
    website: "https://www.shake-n-go.com",
    shopLink: "https://ebonyline.com/collections/shake-n-go",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Lace Front Wig", lengths: "10\"–22\"", price: "$18–$55", rating: 4.0, reviews: 1800 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Half Wig", lengths: "12\"–18\"", price: "$25–$65", rating: 3.9, reviews: 1200 },
    ],
  },
  {
    id: 13, name: "Freetress", logo: "FT", origin: "USA", tags: ["Braids", "Crochet"],
    website: "https://www.amazon.com/s?k=freetress+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=freetress+hair&tag=jessyluxebeau-20",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Crochet Braid", lengths: "10\"–24\"", price: "$8–$25", rating: 4.1, reviews: 2200 },
      { type: "Synthetic", category: "synthetic", texture: "Lace Front Wig", lengths: "12\"–22\"", price: "$20–$55", rating: 4.0, reviews: 1600 },
    ],
  },
  {
    id: 14, name: "Model Model", logo: "MM", origin: "USA", tags: ["Affordable", "Wigs"],
    website: "https://www.amazon.com/s?k=model+model+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=model+model+hair&tag=jessyluxebeau-20",
    products: [
      { type: "Synthetic", category: "synthetic", texture: "Lace Front Wig", lengths: "10\"–22\"", price: "$20–$60", rating: 4.0, reviews: 1400 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Full Wig", lengths: "12\"–20\"", price: "$30–$80", rating: 3.9, reviews: 900 },
    ],
  },
  {
    id: 15, name: "Bellami Hair", logo: "BL", origin: "USA", tags: ["Luxury", "Extensions"],
    website: "https://go.shopmy.us/p-54647534",
   shopLink: "https://go.shopmy.us/p-54647534",
    products: [
      { type: "100% Human", category: "human", texture: "Clip-In Extensions", lengths: "16\"–24\"", price: "$180–$380", rating: 4.6, reviews: 3200 },
      { type: "100% Human", category: "human", texture: "Tape-In Extensions", lengths: "14\"–22\"", price: "$160–$320", rating: 4.5, reviews: 2100 },
    ],
  },
  {
    id: 16, name: "UNice Hair", logo: "UN", origin: "China", tags: ["Affordable", "Human Hair"],
    website: "https://www.awin1.com/cread.php?awinmid=39912&awinaffid=2866481",
    shopLink: "https://www.amazon.com/s?k=model+model+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "Body Wave Wig", lengths: "10\"–30\"", price: "$55–$200", rating: 4.4, reviews: 4500 },
      { type: "100% Human", category: "human", texture: "Straight Lace Front", lengths: "12\"–28\"", price: "$60–$220", rating: 4.3, reviews: 3800 },
    ],
  },
  {
    id: 17, name: "Luvme Hair", logo: "LV", origin: "China", tags: ["Glueless", "Human Hair"],
    website: "https://www.amazon.com/s?k=luvme+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=luvme+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "Glueless Wig", lengths: "10\"–30\"", price: "$80–$300", rating: 4.5, reviews: 5200 },
      { type: "100% Human", category: "human", texture: "HD Lace Front", lengths: "12\"–26\"", price: "$90–$280", rating: 4.4, reviews: 4100 },
    ],
  },
  {
    id: 18, name: "Private Label Extensions", logo: "PL", origin: "USA", tags: ["Wholesale", "Virgin Hair"],
    website: "https://www.privatelabelextensions.com",
    shopLink: "https://www.privatelabelextensions.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$70–$250", rating: 4.6, reviews: 2800 },
      { type: "100% Human", category: "human", texture: "Lace Closure", lengths: "12\"–20\"", price: "$60–$180", rating: 4.5, reviews: 1900 },
    ],
  },
  {
    id: 19, name: "TedHair", logo: "TH", origin: "China", tags: ["Affordable", "Human Hair"],
    website: "https://www.tedhair.com",
    shopLink: "https://www.tedhair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Body Wave Bundle", lengths: "10\"–28\"", price: "$40–$160", rating: 4.3, reviews: 2100 },
      { type: "100% Human", category: "human", texture: "Straight Wig", lengths: "12\"–26\"", price: "$55–$190", rating: 4.2, reviews: 1700 },
    ],
  },
  {
    id: 20, name: "Nadula Hair", logo: "ND", origin: "China", tags: ["Human Hair", "Wigs"],
    website: "https://www.amazon.com/s?k=nadula+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=nadula+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "10\"–30\"", price: "$60–$250", rating: 4.4, reviews: 3600 },
      { type: "100% Human", category: "human", texture: "Body Wave Bundle", lengths: "12\"–28\"", price: "$45–$180", rating: 4.3, reviews: 2900 },
    ],
  },
  {
    id: 21, name: "Ballice Hair", logo: "BH", origin: "USA", tags: ["Virgin Hair", "Bundles"],
    website: "https://ballicevirginhair.com",
    shopLink: "https://ballicevirginhair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$80–$280", rating: 4.5, reviews: 1200 },
      { type: "100% Human", category: "human", texture: "Lace Frontal", lengths: "12\"–22\"", price: "$70–$200", rating: 4.4, reviews: 900 },
    ],
  },
  {
    id: 22, name: "Rebe Hair", logo: "RB", origin: "China", tags: ["Affordable", "Human Hair"],
    website: "https://www.rebehair.com",
    shopLink: "https://www.rebehair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Straight Bundle", lengths: "10\"–28\"", price: "$35–$150", rating: 4.2, reviews: 1500 },
      { type: "100% Human", category: "human", texture: "Body Wave Wig", lengths: "12\"–26\"", price: "$55–$200", rating: 4.1, reviews: 1100 },
    ],
  },
  {
    id: 23, name: "Honest Hair Factory", logo: "HF", origin: "China", tags: ["Wholesale", "Factory Direct"],
    website: "https://www.honesthairfactory.com",
    shopLink: "https://www.honesthairfactory.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$30–$140", rating: 4.3, reviews: 1800 },
      { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "12\"–28\"", price: "$60–$220", rating: 4.2, reviews: 1400 },
    ],
  },
  {
    id: 24, name: "Dhwarak Indian Hair", logo: "DI", origin: "India", tags: ["Raw Indian", "Virgin Hair"],
    website: "https://dhwarakindianhair.com",
    shopLink: "https://dhwarakindianhair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Raw Indian Bundle", lengths: "10\"–30\"", price: "$60–$220", rating: 4.5, reviews: 800 },
      { type: "100% Human", category: "human", texture: "Raw Curly Bundle", lengths: "12\"–26\"", price: "$70–$240", rating: 4.4, reviews: 650 },
    ],
  },
  {
    id: 25, name: "Alibaba", logo: "AB", origin: "China", tags: ["Wholesale", "Budget"],
    website: "https://www.alibaba.com",
    shopLink: "https://www.alibaba.com/trade/search?SearchText=human+hair+extensions",
    products: [
      { type: "100% Human", category: "human", texture: "Bulk Bundle", lengths: "10\"–30\"", price: "$20–$100", rating: 3.8, reviews: 5000 },
      { type: "Synthetic", category: "synthetic", texture: "Synthetic Wig", lengths: "10\"–24\"", price: "$10–$50", rating: 3.7, reviews: 4200 },
    ],
  },
  {
    id: 26, name: "Virgin Hair Vendor", logo: "VV", origin: "China", tags: ["Virgin Hair", "Wholesale"],
    website: "https://www.virginhairvendor.com",
    shopLink: "https://www.virginhairvendor.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$40–$180", rating: 4.3, reviews: 1600 },
      { type: "100% Human", category: "human", texture: "Lace Front Wig", lengths: "12\"–26\"", price: "$70–$220", rating: 4.2, reviews: 1200 },
    ],
  },
  {
    id: 27, name: "Indique Hair", logo: "IQ", origin: "India", tags: ["Luxury", "Virgin Hair"],
    website: "https://www.amazon.com/s?k=indique+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=indique+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Indian Bundle", lengths: "10\"–30\"", price: "$90–$300", rating: 4.6, reviews: 2400 },
      { type: "100% Human", category: "human", texture: "Lace Closure Wig", lengths: "12\"–26\"", price: "$120–$380", rating: 4.5, reviews: 1800 },
    ],
  },
  {
    id: 28, name: "New Star Hair", logo: "NS", origin: "China", tags: ["Virgin Hair", "Human Hair"],
    website: "https://newstarwig.com",
    shopLink: "https://newstarwig.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Body Wave Wig", lengths: "10\"–30\"", price: "$50–$200", rating: 4.3, reviews: 1900 },
      { type: "100% Human", category: "human", texture: "Straight Bundle", lengths: "12\"–28\"", price: "$40–$160", rating: 4.2, reviews: 1500 },
    ],
  },
  {
    id: 29, name: "Asteria Hair", logo: "AS", origin: "China", tags: ["Human Hair", "Affordable"],
    website: "https://www.asteriahair.com",
    shopLink:  "https://www.amazon.com/s?k=indique+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "10\"–30\"", price: "$55–$220", rating: 4.4, reviews: 2200 },
      { type: "100% Human", category: "human", texture: "Body Wave Bundle", lengths: "12\"–28\"", price: "$40–$170", rating: 4.3, reviews: 1800 },
    ],
  },
  {
    id: 30, name: "Hair Couture", logo: "HC", origin: "USA", tags: ["Luxury", "Extensions"],
    website: "https://www.haircouture.com",
    shopLink: "https://www.haircouture.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Clip-In Extensions", lengths: "14\"–24\"", price: "$120–$350", rating: 4.5, reviews: 1200 },
      { type: "100% Human", category: "human", texture: "Tape-In Extensions", lengths: "12\"–22\"", price: "$100–$300", rating: 4.4, reviews: 900 },
    ],
  },
  {
    id: 31, name: "Hair Compounds", logo: "CP", origin: "USA", tags: ["Wholesale", "Extensions"],
    website: "https://www.haircompounds.com",
    shopLink: "https://www.haircompounds.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–28\"", price: "$60–$200", rating: 4.3, reviews: 800 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Lace Front Wig", lengths: "12\"–22\"", price: "$50–$150", rating: 4.1, reviews: 600 },
    ],
  },
  {
    id: 32, name: "Hibiscus Hair", logo: "HB", origin: "USA", tags: ["Virgin Hair", "Bundles"],
    website: "https://www.hibiscushair.com",
    shopLink: "https://www.hibiscushair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$70–$240", rating: 4.4, reviews: 950 },
      { type: "100% Human", category: "human", texture: "Lace Frontal Wig", lengths: "12\"–26\"", price: "$90–$280", rating: 4.3, reviews: 750 },
    ],
  },
  {
    id: 33, name: "Thanh An Hair", logo: "TA", origin: "Vietnam", tags: ["Raw Hair", "Wholesale"],
    website: "https://www.thanhanhair.com",
    shopLink: "https://www.thanhanhair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Raw Vietnamese Bundle", lengths: "10\"–30\"", price: "$50–$180", rating: 4.5, reviews: 1100 },
      { type: "100% Human", category: "human", texture: "Bone Straight Bundle", lengths: "12\"–28\"", price: "$45–$160", rating: 4.4, reviews: 900 },
    ],
  },
  {
    id: 34, name: "True Glory Hair", logo: "TG", origin: "USA", tags: ["Virgin Hair", "Bundles"],
    website: "https://www.truegloryhair.com",
    shopLink: "https://www.truegloryhair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$80–$260", rating: 4.6, reviews: 2800 },
      { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "12\"–26\"", price: "$100–$320", rating: 4.5, reviews: 2100 },
    ],
  },
  {
    id: 35, name: "ISEE Hair", logo: "IS", origin: "China", tags: ["Human Hair", "Affordable"],
    website: "https://www.awin1.com/cread.php?awinmid=44521&awinaffid=2866481",
shopLink: "https://www.amazon.com/s?k=indique+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "10\"–30\"", price: "$55–$220", rating: 4.4, reviews: 3800 },
      { type: "100% Human", category: "human", texture: "Body Wave Bundle", lengths: "12\"–28\"", price: "$40–$160", rating: 4.3, reviews: 3200 },
    ],
  },
  {
    id: 36, name: "Hermosa Hair", logo: "HM", origin: "China", tags: ["Human Hair", "Glueless"],
    website: "https://www.amazon.com/s?k=hermosa+hair&tag=jessyluxebeau-20",
shopLink: "https://www.amazon.com/s?k=hermosa+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "4C Edges Wig", lengths: "14\"–26\"", price: "$60–$240", rating: 4.5, reviews: 2900 },
      { type: "100% Human", category: "human", texture: "Braided Lace Wig", lengths: "12\"–24\"", price: "$70–$260", rating: 4.4, reviews: 2200 },
    ],
  },
  {
    id: 37, name: "WigDealer", logo: "WD", origin: "USA", tags: ["Wigs", "Affordable"],
    website: "https://shopwigdealer.com",
shopLink: "https://shopwigdealer.com/collections/all-wigs",
    products: [
      { type: "100% Human", category: "human", texture: "Lace Front Wig", lengths: "12\"–26\"", price: "$60–$220", rating: 4.3, reviews: 1800 },
      { type: "Synthetic", category: "synthetic", texture: "Full Wig", lengths: "10\"–22\"", price: "$20–$60", rating: 4.0, reviews: 1400 },
    ],
  },
  {
    id: 38, name: "Ali Grace Hair", logo: "AG", origin: "China", tags: ["Human Hair", "Wigs"],
    website: "https://www.amazon.com/s?k=ali+grace+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=ali+grace+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "Body Wave Wig", lengths: "10\"–30\"", price: "$50–$200", rating: 4.4, reviews: 2600 },
      { type: "100% Human", category: "human", texture: "Straight Lace Front", lengths: "12\"–28\"", price: "$55–$210", rating: 4.3, reviews: 2100 },
    ],
  },
  {
    id: 39, name: "She's Happy Hair", logo: "SH", origin: "USA", tags: ["Virgin Hair", "Bundles"],
    website: "https://www.sheshappyhair.com",
    shopLink: "https://www.sheshappyhair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Peruvian Body Wave", lengths: "10\"–30\"", price: "$70–$240", rating: 4.5, reviews: 1800 },
      { type: "100% Human", category: "human", texture: "Boho Braiding Hair", lengths: "12\"–26\"", price: "$60–$200", rating: 4.4, reviews: 1400 },
    ],
  },
  {
    id: 40, name: "Her Hair Company", logo: "HH", origin: "USA", tags: ["Virgin Hair", "Wholesale"],
    website: "https://www.herhaircompany.com",
    shopLink: "https://www.herhaircompany.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$65–$220", rating: 4.5, reviews: 2100 },
      { type: "100% Human", category: "human", texture: "Lace Closure Wig", lengths: "12\"–26\"", price: "$90–$280", rating: 4.4, reviews: 1700 },
    ],
  },
  {
    id: 41, name: "UniWigs", logo: "UW", origin: "USA", tags: ["Wigs", "Hair Toppers"],
    website: "https://www.uniwigs.com",
    shopLink: "https://www.uniwigs.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Lace Front Wig", lengths: "10\"–24\"", price: "$80–$350", rating: 4.5, reviews: 2400 },
      { type: "Synthetic", category: "synthetic", texture: "Hair Topper", lengths: "8\"–18\"", price: "$40–$160", rating: 4.3, reviews: 1800 },
    ],
  },
  {
    id: 42, name: "Black Show Hair", logo: "BS", origin: "China", tags: ["Virgin Hair", "Wholesale"],
    website: "https://www.blackshowhair.com",
    shopLink: "https://www.blackshowhair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$35–$160", rating: 4.3, reviews: 1600 },
      { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "12\"–28\"", price: "$55–$200", rating: 4.2, reviews: 1200 },
    ],
  },
  {
    id: 43, name: "Virgin City Hair", logo: "VC", origin: "USA", tags: ["Virgin Hair", "Wholesale"],
    website: "https://membership.virgincityhair.com",
    shopLink: "https://membership.virgincityhair.com/shop/",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$60–$220", rating: 4.4, reviews: 1400 },
      { type: "100% Human", category: "human", texture: "Lace Front Wig", lengths: "12\"–26\"", price: "$80–$260", rating: 4.3, reviews: 1100 },
    ],
  },
  {
    id: 51, name: "Julia Hair", logo: "JH", origin: "China", tags: ["Human Hair", "Wigs"],
    website: "https://www.juliahair.com",
    shopLink: "https://www.juliahair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "10\"–30\"", price: "$55–$220", rating: 4.4, reviews: 3200 },
      { type: "100% Human", category: "human", texture: "Body Wave Bundle", lengths: "12\"–28\"", price: "$40–$170", rating: 4.3, reviews: 2600 },
    ],
  },
  {
    id: 52, name: "Recool Hair", logo: "RC", origin: "China", tags: ["Human Hair", "Glueless"],
    website: "https://www.recoolhair.com",
    shopLink: "https://www.recoolhair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Glueless Wig", lengths: "10\"–30\"", price: "$60–$240", rating: 4.4, reviews: 1900 },
      { type: "100% Human", category: "human", texture: "HD Lace Front", lengths: "12\"–28\"", price: "$70–$260", rating: 4.3, reviews: 1500 },
    ],
  },
  {
    id: 53, name: "Celie Hair", logo: "CH", origin: "China", tags: ["Human Hair", "Affordable"],
    website: "https://www.celiehair.com",
    shopLink: "https://www.celiehair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "10\"–30\"", price: "$55–$220", rating: 4.4, reviews: 2400 },
      { type: "100% Human", category: "human", texture: "Body Wave Bundle", lengths: "12\"–28\"", price: "$40–$160", rating: 4.3, reviews: 1900 },
    ],
  },
  {
    id: 54, name: "Sunber Hair", logo: "SB", origin: "China", tags: ["Human Hair", "Wigs"],
    website: "https://www.sunberhair.com",
    shopLink: "https://www.sunberhair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "HD Lace Front Wig", lengths: "10\"–30\"", price: "$60–$250", rating: 4.5, reviews: 3100 },
      { type: "100% Human", category: "human", texture: "Straight Bundle", lengths: "12\"–28\"", price: "$40–$170", rating: 4.3, reviews: 2400 },
    ],
  },
  {
    id: 60, name: "Babe Hair Extensions", logo: "BH", origin: "USA", tags: ["Salon Professional", "Remy Hair"],
    website: "https://babehairextensions.com",
    shopLink: "https://babehairextensions.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Tape-In Extensions", lengths: "14\"–22\"", price: "$150–$300", rating: 4.6, reviews: 2100 },
      { type: "100% Human", category: "human", texture: "Hand-Tied Weft", lengths: "18\"–22\"", price: "$200–$400", rating: 4.7, reviews: 1800 },
      { type: "100% Human", category: "human", texture: "Clip-In Extensions", lengths: "16\"–20\"", price: "$135–$200", rating: 4.5, reviews: 1500 },
    ],
  },
  {
    id: 61, name: "Show Pony Hair Extensions", logo: "SP", origin: "Australia", tags: ["Premium", "Extensions"],
    website: "https://www.showponyhairextensions.com",
    shopLink: "https://www.showponyhairextensions.com",
    products: [
      { type: "100% Human", category: "human", texture: "Clip-In Extensions", lengths: "14\"–22\"", price: "$150–$350", rating: 4.6, reviews: 1200 },
      { type: "100% Human", category: "human", texture: "Tape-In Extensions", lengths: "16\"–22\"", price: "$180–$380", rating: 4.5, reviews: 900 },
    ],
  },
  {
    id: 62, name: "Shuly Wigs", logo: "SW", origin: "USA", tags: ["Sheitel", "Jewish Wig", "Kosher Wig", "European Hair", "Wig"],
    website: "https://shulywigs.com",
    shopLink: "https://shulywigs.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "European Hair Sheitel", lengths: "10\"–24\"", price: "$800–$3000", rating: 4.7, reviews: 580 },
      { type: "100% Human", category: "human", texture: "Lace Front Sheitel", lengths: "12\"–22\"", price: "$600–$2500", rating: 4.6, reviews: 420 },
    ],
  },
  {
    id: 63, name: "BeeWigs", logo: "BW", origin: "China", tags: ["Sheitel", "Kosher Wig", "Jewish Wig", "European Hair", "Wig"],
    website: "https://beewigs.com",
    shopLink: "https://beewigs.com/collections/jewish-wigs",
    products: [
      { type: "100% Human", category: "human", texture: "Silk Top Sheitel", lengths: "10\"–24\"", price: "$400–$1800", rating: 4.5, reviews: 680 },
      { type: "100% Human", category: "human", texture: "Lace Top Sheitel", lengths: "12\"–22\"", price: "$350–$1500", rating: 4.4, reviews: 520 },
    ],
  },
  {
    id: 64, name: "Sherogaga", logo: "SG", origin: "USA", tags: ["Sheitel", "Kosher Wig"],
    website: "https://sherogagashop.com",
    shopLink: "https://sherogagashop.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "European Hair Sheitel", lengths: "10\"–22\"", price: "$500–$2000", rating: 4.6, reviews: 420 },
      { type: "100% Human", category: "human", texture: "Lace Top Sheitel", lengths: "12\"–20\"", price: "$400–$1800", rating: 4.5, reviews: 350 },
    ],
  },
  {
    id: 65, name: "Shani Wigs", logo: "SW", origin: "USA", tags: ["Sheitel", "Bespoke Wig", "Jewish Wig", "Kosher Wig", "European Hair", "Wig"],
    website: "https://shaniwigs.com",
    shopLink: "https://shaniwigs.com/collections/sheitels",
    products: [
      { type: "100% Human", category: "human", texture: "Custom Sheitel", lengths: "10\"–24\"", price: "$600–$2500", rating: 4.7, reviews: 380 },
      { type: "100% Human", category: "human", texture: "Virgin Hair Sheitel", lengths: "12\"–22\"", price: "$500–$2000", rating: 4.6, reviews: 290 },
    ],
  },
  {
    id: 66, name: "FD Jewish Wigs", logo: "FD", origin: "China", tags: ["Sheitel", "Factory Direct", "Jewish Wig", "Kosher Wig", "European Hair", "Wig"],
    website: "https://jewish-wigs.com",
    shopLink: "https://jewish-wigs.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Silk Top Sheitel", lengths: "10\"–24\"", price: "$300–$1500", rating: 4.5, reviews: 460 },
      { type: "100% Human", category: "human", texture: "Lace Top Sheitel", lengths: "12\"–22\"", price: "$250–$1200", rating: 4.4, reviews: 380 },
    ],
  },
  {
    
    id: 55, name: "Klaiyi Hair", logo: "KL", origin: "China", tags: ["Human Hair", "Glueless"],
    website: "https://www.amazon.com/s?k=klaiyi+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=klaiyi+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "Glueless Lace Wig", lengths: "10\"–30\"", price: "$65–$260", rating: 4.5, reviews: 2700 },
      { type: "100% Human", category: "human", texture: "HD Lace Front", lengths: "12\"–28\"", price: "$75–$280", rating: 4.4, reviews: 2100 },
    ],
  },
  {
    id: 56, name: "Beautyforever", logo: "BF", origin: "China", tags: ["Human Hair", "Affordable"],
    website: "https://www.amazon.com/s?k=beauty+forever+hair&tag=jessyluxebeau-20",
    shopLink: "https://www.amazon.com/s?k=beauty+forever+hair&tag=jessyluxebeau-20",
    products: [
      { type: "100% Human", category: "human", texture: "Body Wave Wig", lengths: "10\"–30\"", price: "$50–$200", rating: 4.3, reviews: 2900 },
      { type: "100% Human", category: "human", texture: "Straight Lace Front", lengths: "12\"–28\"", price: "$55–$210", rating: 4.2, reviews: 2300 },
    ],
  },
  {
    id: 57, name: "Ulta Beauty", logo: "UB", origin: "USA", tags: ["Retail", "Multi-Brand"],
    website: "https://go.shopmy.us/p-54647534",
    shopLink: "https://go.shopmy.us/p-54647534",
    products: [
      { type: "100% Human", category: "human", texture: "Clip-In Extensions", lengths: "12\"–24\"", price: "$30–$300", rating: 4.3, reviews: 5200 },
      { type: "Synthetic", category: "synthetic", texture: "Synthetic Wigs", lengths: "10\"–22\"", price: "$20–$150", rating: 4.1, reviews: 3800 },
      { type: "Human/Synthetic Blend", category: "mixed", texture: "Blend Extensions", lengths: "12\"–20\"", price: "$25–$200", rating: 4.0, reviews: 2900 },
    ],
  },
  {
    id: 58, name: "Locks & Mane", logo: "LM", origin: "USA", tags: ["Clip-In", "Remy Hair"],
    website: "https://www.locksandmane.com",
    shopLink: "https://go.shopmy.us/p-54647534",
    products: [
      { type: "100% Human", category: "human", texture: "Clip-In Extensions", lengths: "12\"–20\"", price: "$72–$295", rating: 4.4, reviews: 1200 },
      { type: "100% Human", category: "human", texture: "Human Hair Ponytail", lengths: "18\"–22\"", price: "$185–$250", rating: 4.5, reviews: 800 },
    ],
  },
  {
    id: 59, name: "True & Pure Texture", logo: "TP", origin: "USA", tags: ["Natural Texture", "Curly"],
    website: "https://www.trueandpuretexture.com",
    shopLink: "https://go.shopmy.us/p-54647534",
    products: [
      { type: "100% Human", category: "human", texture: "Curly Coily Clip-Ins", lengths: "10\"–22\"", price: "$120–$350", rating: 4.6, reviews: 980 },
      { type: "100% Human", category: "human", texture: "HD Lace Front Wig", lengths: "12\"–24\"", price: "$200–$450", rating: 4.7, reviews: 750 },
      { type: "100% Human", category: "human", texture: "Virgin Bundles", lengths: "10\"–26\"", price: "$150–$380", rating: 4.5, reviews: 620 },
    ],
  },
  {
    id: 44, name: "Beaudiva Hair", logo: "BD", origin: "China", tags: ["Affordable", "Human Hair"],
    website: "https://www.beaudivahair.com",
    shopLink: "https://www.beaudivahair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Body Wave Wig", lengths: "10\"–30\"", price: "$45–$180", rating: 4.3, reviews: 2200 },
      { type: "100% Human", category: "human", texture: "Straight Bundle", lengths: "12\"–28\"", price: "$35–$150", rating: 4.2, reviews: 1800 },
    ],
  },
  {
    id: 45, name: "Yummi Hair Extensions", logo: "YH", origin: "USA", tags: ["Premium", "Virgin Hair"],
    website: "https://www.yummihair.com",
    shopLink: "https://www.yummihair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Virgin Bundle", lengths: "10\"–30\"", price: "$80–$280", rating: 4.6, reviews: 1500 },
      { type: "100% Human", category: "human", texture: "Lace Front Wig", lengths: "12\"–26\"", price: "$100–$320", rating: 4.5, reviews: 1200 },
    ],
  },
  {
    id: 46, name: "Govihair", logo: "GV", origin: "Vietnam", tags: ["Vietnamese Hair", "Premium"],
    website: "https://www.govihair.com",
    shopLink: "https://www.govihair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Bone Straight Bundle", lengths: "10\"–30\"", price: "$55–$200", rating: 4.5, reviews: 1900 },
      { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "12\"–28\"", price: "$70–$240", rating: 4.4, reviews: 1500 },
    ],
  },
  {
    id: 47, name: "Yoghair", logo: "YG", origin: "Vietnam", tags: ["Vietnamese Hair", "Wholesale"],
    website: "https://www.yoghair.com",
    shopLink: "https://www.yoghair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Raw Vietnamese Bundle", lengths: "10\"–30\"", price: "$50–$190", rating: 4.5, reviews: 1700 },
      { type: "100% Human", category: "human", texture: "Bone Straight Wig", lengths: "12\"–28\"", price: "$65–$220", rating: 4.4, reviews: 1300 },
    ],
  },
  {
    id: 48, name: "Vietnam Remy Hair", logo: "VR", origin: "Vietnam", tags: ["Remy Hair", "Wholesale"],
    website: "https://hair68.com",
    shopLink: "https://hair68.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Remy Bundle", lengths: "10\"–30\"", price: "$45–$180", rating: 4.4, reviews: 1600 },
      { type: "100% Human", category: "human", texture: "Lace Closure Wig", lengths: "12\"–26\"", price: "$65–$220", rating: 4.3, reviews: 1200 },
    ],
  },
  {
    id: 49, name: "RPGShow", logo: "RP", origin: "China", tags: ["HD Lace", "Wigs"],
    website: "https://www.rpgshow.com",
    shopLink: "https://www.rpgshow.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "HD Lace Front Wig", lengths: "10\"–30\"", price: "$80–$350", rating: 4.5, reviews: 2800 },
      { type: "100% Human", category: "human", texture: "Glueless Wig", lengths: "12\"–28\"", price: "$90–$320", rating: 4.4, reviews: 2200 },
    ],
    
  },
  {
    id: 50, name: "West Kiss Hair", logo: "WK", origin: "China", tags: ["Affordable", "Human Hair"],
    website: "https://www.westkisshair.com",
    shopLink: "https://www.westkisshair.com/collections/all",
    products: [
      { type: "100% Human", category: "human", texture: "Body Wave Wig", lengths: "10\"–30\"", price: "$45–$180", rating: 4.3, reviews: 2100 },
      { type: "100% Human", category: "human", texture: "Straight Bundle", lengths: "12\"–28\"", price: "$35–$150", rating: 4.2, reviews: 1800 },
    ],
  },
  {
      id: 67, name: "Zlike Hair", logo: "ZL", origin: "China", tags: ["HD Lace", "300% Density", "Human Hair"],
      website: "https://www.awin1.com/cread.php?awinmid=102013&awinaffid=2866481",
      shopLink: "https://www.awin1.com/cread.php?awinmid=102013&awinaffid=2866481",
      products: [
        { type: "100% Human", category: "human", texture: "300% Density Lace Wig", lengths: "10\"–36\"", price: "$80–$350", rating: 4.6, reviews: 2800 },
        { type: "100% Human", category: "human", texture: "Glueless Lace Front Wig", lengths: "12\"–30\"", price: "$90–$320", rating: 4.5, reviews: 2200 },
        { type: "100% Human", category: "human", texture: "Water Wave Wig", lengths: "10\"–28\"", price: "$75–$280", rating: 4.4, reviews: 1900 },
      ],
      
    },
    {
      id: 68, name: "Wig Fever", logo: "WF", origin: "China", tags: ["Wigs", "Affordable", "Human Hair"],
      website: "https://www.wigforever.com",
      shopLink: "https://www.wigforever.com/collections/all",
      products: [
        { type: "100% Human", category: "human", texture: "Lace Front Wig", lengths: "10\"–30\"", price: "$50–$250", rating: 4.4, reviews: 1800 },
        { type: "100% Human", category: "human", texture: "HD Lace Wig", lengths: "12\"–28\"", price: "$60–$280", rating: 4.3, reviews: 1500 },
      ],
    },
    {
    id: 69, name: "Wavymyhair", logo: "WM", origin: "China", tags: ["Wavy Hair", "Human Hair", "HD Lace"],
    website: "https://www.awin1.com/cread.php?awinmid=102013&awinaffid=2866481",
    shopLink: "https://www.awin1.com/cread.php?awinmid=102013&awinaffid=2866481",
    products: [
      { type: "100% Human", category: "human", texture: "Water Wave Wig", lengths: "10\"–30\"", price: "$60–$250", rating: 4.5, reviews: 1800 },
      { type: "100% Human", category: "human", texture: "Body Wave Bundle", lengths: "12\"–28\"", price: "$45–$180", rating: 4.4, reviews: 1500 },
      { type: "100% Human", category: "human", texture: "HD Lace Front Wig", lengths: "10\"–26\"", price: "$70–$280", rating: 4.3, reviews: 1200 },
    ],
  },
];
// ADD THIS 👇
const DEAL_OF_THE_WEEK = {
  vendorName: "Luxy Hair",
  deal: "20% off all bundles",
  description: "Top-rated 100% human hair extensions at an unbeatable price this week only!",
  shopLink: "https://www.amazon.com/s?k=luxy+hair+extensions&tag=jessyluxebeau-20",
  endDate: new Date("2026-05-04"),
};

// EXISTING CODE 👇
const CATEGORY_CONFIG = {
  human:     { label: "100% Human",  color: "#2a6a2a", bg: "#d8ead8" },
  synthetic: { label: "Synthetic",   color: "#2a5a8a", bg: "#d8e8f0" },
  mixed:     { label: "Blend",       color: "#6a2a8a", bg: "#ead8f0" },
};
// ADD THIS 👇

function DealOfTheWeek() {
  const deal = DEAL_OF_THE_WEEK;
  const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  React.useEffect(() => {
    function calcTime() {
      const diff = deal.endDate - new Date();
      if (diff <= 0) return setTimeLeft({ expired: true });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
    calcTime();
    const timer = setInterval(calcTime, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{ background: "linear-gradient(135deg, #2a6a2a, #1a4a1a)", borderRadius: 16, padding: "32px 24px", margin: "24px 0", textAlign: "center", boxShadow: "0 4px 20px rgba(42,106,42,0.3)" }}>
      <div style={{ display: "inline-block", background: "#c8a97e", color: "#1a1a1a", fontFamily: "Playfair Display, serif", fontWeight: "bold", fontSize: 13, letterSpacing: 3, padding: "6px 18px", borderRadius: 20, marginBottom: 16, textTransform: "uppercase" }}>🔥 Deal of the Week</div>
      <div style={{ fontFamily: "Playfair Display, serif", fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 8 }}>{deal.vendorName}</div>
      <div style={{ fontSize: 20, color: "#c8a97e", fontWeight: "bold", marginBottom: 8 }}>{deal.deal}</div>
      <div style={{ color: "#d4e8d4", fontSize: 14, maxWidth: 400, margin: "0 auto 24px" }}>{deal.description}</div>
      {!timeLeft.expired ? (
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 24 }}>
          {[{label:"Days",value:timeLeft.days},{label:"Hours",value:timeLeft.hours},{label:"Mins",value:timeLeft.minutes},{label:"Secs",value:timeLeft.seconds}].map(({label,value}) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: "10px 16px", minWidth: 60 }}>
              <div style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>{String(value).padStart(2,"0")}</div>
              <div style={{ fontSize: 11, color: "#a8d8a8", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ color: "#c8a97e", marginBottom: 24 }}>Deal has ended — check back soon!</div>
      )}
      <a href={deal.shopLink} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#c8a97e", color: "#1a1a1a", fontWeight: "bold", fontSize: 15, padding: "12px 32px", borderRadius: 30, textDecoration: "none", letterSpacing: 1 }}>Shop This Deal →</a>
    </div>
  );
}

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
        <div style={{ color: "#1a3a1a", fontSize: 13, fontWeight: 600 }}>{product.texture}</div>
        <div style={{ color: "##4a7a4a", fontSize: 11 }}>{product.lengths}</div>
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
function SupplierCard({ supplier, isExpanded, onToggle, onReviewClick, userReviews, favorites, onFavorite, isMobile, compareList = [], onCompare }) {
  const myReviews = userReviews.filter(r => r.supplierId === supplier.id);
  const avg = avgRating(supplier.products).toFixed(1);
  const hasHuman = supplier.products.some(p => p.category === "human");
  const hasSynth  = supplier.products.some(p => p.category === "synthetic");
  const hasMixed  = supplier.products.some(p => p.category === "mixed");

  return (
    <div style={{
      background: "linear-gradient(135deg, #ffffff 0%, #f8f8f6 100%)",
      border: `1px solid ${isExpanded ? "#c8a97e" : "#e0d8d0"}`,
      borderRadius: 16, marginBottom: isMobile ? 14 : 11, position: "relative", overflow: "hidden",
      transition: "border-color 0.3s, box-shadow 0.3s",
      boxShadow: isExpanded ? "0 8px 36px rgba(200,169,126,0.3)" : "0 2px 10px rgba(0,0,0,0.08)"
    }}>
      <div onClick={onToggle} style={{ display: "flex", alignItems: "center", gap: 13, padding: "15px 16px", cursor: "pointer" }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10, flexShrink: 0,
          background: "linear-gradient(135deg, #4a8a4a, #2a6a2a)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 12, color: "#ffffff",
        }}>{supplier.logo}</div>
        <div style={{ flex: 1 }}>
        <button onClick={e => { e.stopPropagation(); onFavorite(supplier.id); }} style={{
          position: "absolute", top: 10, right: 10,
          background: "transparent", border: "none", cursor: "pointer",
          fontSize: 16, color: favorites.includes(supplier.id) ? "#e8354a" : "2a6a2a"
        }}>
          {favorites.includes(supplier.id) ? "❤️" : "🤍"}
          </button>
          <button onClick={e => { e.stopPropagation(); onCompare(supplier); }} style={{
        position: "absolute",
        top: "70%",
        left: "70%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
          background: compareList && compareList.find(s => s.id === supplier.id) ? "#2a6a2a" : "#ffffff",
          border: "2px solid #2a6a2a", borderRadius: 6, cursor: "pointer",
          fontSize: 10, color: compareList && compareList.find(s => s.id === supplier.id) ? "#ffffff" : "#2a6a2a",
          padding: "3px 6px", fontWeight: 700
        }}>
          {compareList && compareList.find(s => s.id === supplier.id) ? "✓ Compare" : "+ Compare"}
        </button>
          
        
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ color: "#1a3a1a", fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: isMobile ? 17 : 16 }}>{supplier.name}</span>
          <span style={{ color: "#4a7a4a", fontSize: isMobile ? 12 : 11, fontWeight: 500 }}>• {supplier.origin}</span>
          </div>
          <div style={{ display: "flex", gap: 5, marginTop: 5, flexWrap: "wrap" }}>
            {supplier.tags.map(t => (
              <span key={t} style={{ fontSize: 9, color: "#2a5a2a", background: "#e8f0e8", border: "1px solid #4a8a4a", borderRadius: 20, padding: "2px 8px" }}>{t}</span>
            ))}
            <span style={{ fontSize: 9, color: "#2a6a2a", background: "#d8ead8", border: "1px solid #c8a97e28", borderRadius: 20, padding: "2px 8px" }}>
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
        <div style={{ color: "#2a6a2a", fontSize: isMobile ? 24 : 22, fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>{avg}</div>
          <div style={{ color: "#4a7a4a", fontSize: 9, letterSpacing: 1 }}>AVG</div>
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
            <a href={supplier.website} target="_blank" rel="noreferrer" style={{
  display: "inline-block", padding: "6px 14px", borderRadius: 8,
  background: "transparent", border: "1px solid #2a6a2a",
  color: "#2a6a2a", fontSize: 11, textDecoration: "none",
  marginLeft: 8
}}>Official Site</a>
<a href={supplier.shopLink} target="_blank" rel="noreferrer" style={{
  display: "inline-block", padding: "6px 14px", borderRadius: 8,
  background: "#c8a97e", border: "1px solid #c8a97e",
  color: "#1a0f0a", fontSize: 11, textDecoration: "none",
  marginLeft: 8, fontWeight: 600
}}>Shop Now</a>
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
    width: "100%", background: "#ffffff", border: "1px solid #4a8a4a",
    borderRadius: 9, padding: "10px 12px", color: "#1a3a1a",
    fontSize: 13, outline: "none", fontFamily: "'DM Sans', sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 99999,
      background: "rgba(3,1,1,0.93)", display: "flex", alignItems: "flex-end",
      animation: "fadeUp 0.2s ease both",
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: "100%", maxWidth: 600, margin: "0 auto",
        background: "linear-gradient(160deg, #ffffff, #f0f5f0)",
        border: "1px solid #4a8a4a", borderRadius: "20px 20px 0 0",
        padding: "24px 18px 38px", maxHeight: "92vh", overflowY: "auto",
      }}>
        <div style={{ width: 36, height: 3, background: "#2a1a10", borderRadius: 2, margin: "0 auto 20px" }} />

        {submitted ? (
          <div style={{ textAlign: "center", padding: "28px 0" }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>&#10024;</div>
            <div style={{ color: "#2a6a2a", fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 22, marginBottom: 8 }}>Thank You!</div>
            <div style={{ color: "#2a3a2a", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              Your review for <strong style={{ color: "#2a6a2a" }}>{supplier.name}</strong> has been added.
            </div>
            <button onClick={onClose} style={{
              padding: "12px 32px", borderRadius: 30, border: "1px solid #c8a97e50",
              background: "#c8a97e12", color: "#c8a97e", fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}>Close</button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 20 }}>
              <div style={{ color: "#2a6a2a", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>Reviewing</div>
              <div style={{ color: "#1a3a1a", fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 20 }}>{supplier.name}</div>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ color: "#2a6a2a", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Your Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Jasmine T." style={inp} />
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ color: "#2a6a2a", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Product</label>
              <select value={product} onChange={e => setProduct(e.target.value)} style={{ ...inp, cursor: "pointer" }}>
                {supplier.products.map((p, i) => (
                  <option key={i} value={p.texture} style={{ background: "#140f0c" }}>
                    {p.texture} ({CATEGORY_CONFIG[p.category].label})
                  </option>
                ))}
                <option disabled>──────────────</option>
<option value="HD Lace Wig">HD Lace Wig</option>
<option value="Transparent Lace Wig">Transparent Lace Wig</option>
<option value="Glueless Wig">Glueless Wig</option>
<option value="Straight Hair With Closure">Straight Hair With Closure</option>
<option value="Body Wave With Closure">Body Wave With Closure</option>
<option value="Loose Wave With Closure">Loose Wave With Closure</option>
<option value="Deep Wave With Closure">Deep Wave With Closure</option>
<option value="Kinky Curly With Closure">Kinky Curly With Closure</option>
<option value="Water Wave With Closure">Water Wave With Closure</option>
<option value="Straight Bundles">Straight Bundles</option>
<option value="Body Wave Bundles">Body Wave Bundles</option>
<option value="Deep Wave Bundles">Deep Wave Bundles</option>
<option value="Kinky Curly Bundles">Kinky Curly Bundles</option>
              </select>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ color: "#2a6a2a", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Your Rating</label>
              <InteractiveStars value={rating} onChange={setRating} />
              {rating > 0 && (
                <div style={{ color: "#6a5a50", fontSize: 12, marginTop: 5 }}>
                  {["","Poor — Not recommended","Fair — Has some issues","Good — Worth buying","Great — Really happy!","Excellent — Absolutely love it!"][rating]}
                </div>
              )}
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ color: "2a6a2a", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Your Review</label>
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
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [reviewTarget, setReviewTarget] = useState(null);
  const [userReviews, setUserReviews] = useState(() => {
    try {
      const saved = localStorage.getItem("jessyluxe_reviews");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [searchQ, setSearchQ] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const suppliersPerPage = 10;
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("jessyluxe_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [compareList, setCompareList] = useState([]);
  const isMobile = window.innerWidth <= 768;
  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const updated = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      try { localStorage.setItem("jessyluxe_favorites", JSON.stringify(updated)); } catch {}
      return updated;
    });
  };
  const toggleCompare = (supplier) => {
    setCompareList(prev => {
      if (prev.find(s => s.id === supplier.id)) {
        return prev.filter(s => s.id !== supplier.id);
      }
      if (prev.length >= 3) {
        alert("You can only compare up to 3 vendors at a time!");
        return prev;
      }
      return [...prev, supplier];
    });
  };
  const filters = [
    { id: "all",       label: "All" },
    { id: "human",     label: "100% Human" },
    { id: "synthetic", label: "Synthetic" },
    { id: "mixed",     label: "Blend" },
    { id: "favorites", label: "❤️ Favorites" },
  ];

  const filtered = INITIAL_SUPPLIERS
    .filter(s => {
      const matchCat    = filter === "all" ? true : filter === "favorites" ? favorites.includes(s.id) : s.products.some(p => p.category === filter);
      const matchSearch = searchQ === "" ? true :
        s.name.toLowerCase().includes(searchQ.toLowerCase()) ||
        s.tags.some(t => t.toLowerCase().includes(searchQ.toLowerCase())) ||
        s.products.some(p => p.texture.toLowerCase().includes(searchQ.toLowerCase()));
      return matchCat && matchSearch;
    })
    const displaySuppliers =
    filtered.length === 0 && searchQ !== ""
      ? INITIAL_SUPPLIERS.filter(s => {
          const matchCat =
            filter === "all"
              ? true
              : filter === "favorites"
              ? favorites.includes(s.id)
              : s.products.some(p => p.category === filter);
  
          return matchCat;
        })
      : filtered;
  
  const noExactMatch = filtered.length === 0 && searchQ !== "";
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "rating") return avgRating(b.products) - avgRating(a.products);
      if (sortBy === "products") return b.products.length - a.products.length;
      return a.name.localeCompare(b.name);
    });
    const totalPages = Math.ceil(sorted.length / suppliersPerPage);
    const paginatedSuppliers = sorted.slice((currentPage - 1) * suppliersPerPage, currentPage * suppliersPerPage);
  const totalBase = INITIAL_SUPPLIERS.reduce((a, s) => a + s.products.reduce((b, p) => b + p.reviews, 0), 0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #f0f5f0 0%, #e8f0e8 45%, #dde8dd 100%)",
      color: "#2b2b2b",
      fontFamily: "'DM Sans', sans-serif",
      paddingBottom: 60,
      position: "relative",
      overflow: "hidden"
    }}>
      
      <div style={{
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0
}}>
{Array.from({ length: 40 }).map((_, i) => (
  <div key={i} style={{
    position: "absolute",
    top: `${Math.floor(i / 5) * 20}%`,
    left: `${(i % 5) * 20}%`,
    transform: "rotate(-30deg)",
    fontSize: isMobile ? 12 : 16,
    fontFamily: "'Playfair Display', serif",
    fontWeight: 900,
    color: "rgba(42,106,42,0.06)",
    whiteSpace: "nowrap",
    userSelect: "none",
    letterSpacing: 2,
  }}>JESSY LUXE BEAUTY</div>
))}
</div>
    <div style={{ position: "relative", zIndex: 1 }}>
  
 {/* ADD THIS RIGHT HERE 👇 */}
 <DealOfTheWeek />

  <div style={{
    position: "absolute",
    top: "-80px",
    left: "-60px",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "rgba(74,138,74,0.10)",
    filter: "blur(10px)"
  }} />
  <div style={{
    position: "absolute",
    top: "180px",
    right: "-70px",
    width: "240px",
    height: "240px",
    borderRadius: "50%",
    background: "rgba(42,106,42,0.10)",
    filter: "blur(14px)"
  }} />
  <div style={{
    position: "absolute",
    bottom: "120px",
    left: "20%",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "rgba(200,169,126,0.10)",
    filter: "blur(12px)"
  }} />
</div>
<div style={{ position: "relative", zIndex: 1 }}></div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { 
          background: #f0f5f0;
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(42,106,42,0.03) 100px,
            rgba(42,106,42,0.03) 200px
          );
        }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        
        @media (max-width: 600px) {
          .hero-section { padding: 40px 16px 24px !important; min-height: auto !important; }g
          .company-name { font-size: 36px !important; }
          .supplier-card { margin: 0 8px 10px !important; }
        }
        input::placeholder, textarea::placeholder { color: #362518; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #070403; }
        ::-webkit-scrollbar-thumb { background: #321e10; border-radius: 2px; }
      `}</style>

      {/* Hero */}
      <div style={{
  padding: isMobile ? "20px 16px 15px" : "110px 24px 80px",
  minHeight: "auto",
  background: "linear-gradient(180deg, rgba(184,216,184,0.7) 0%, rgba(200,224,200,0.7) 100%), url('/headerwave.jpg') 50% 20%/cover no-repeat",
  borderBottom: "1px solid rgba(255,255,255,0.08)"
}}>
  <div style={{ textAlign: "center", marginBottom: 10 }}>
  <div style={{
    fontSize: isMobile ? 9 : 11,
    letterSpacing: isMobile ? 3 : 6,
    color: "#2a6a2a",
    textTransform: "uppercase",
    marginBottom: isMobile ? 8 : 18
  }}>
    ✦ Hair Supplier Intelligence Hub ✦
  </div>
</div>
   <div style={{ textAlign: "center", marginBottom: isMobile ? 10 : 20 }}>
  <div style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: isMobile ? "42px" : "72px",
    fontWeight: 900,
    color: "#1a3a1a",
    letterSpacing: 3,
    textTransform: "uppercase"
  }}>Jessy Luxe</div>
  <div style={{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    color: "#2a6a2a",
    letterSpacing: 8,
    textTransform: "uppercase"
  }}>Beauty</div>
</div>
        <h1 style={{
  fontFamily: "'Playfair Display', serif",
  fontWeight: 900,
  fontSize: isMobile ? "22px" : "clamp(22px, 3vw, 36px)",
  textAlign: "center",
  marginBottom: "10px",
  color: "#1a3a1a"
}}>
Stop Getting Scammed<br />
  <span style={{ color: "#2a5a2a" }}>
    Buying Hair Online
  </span>
</h1>
      
<p style={{
  color: "#3a5a3a",
  fontSize: isMobile ? "15px" : "18px",
  maxWidth: "620px",
  margin: "0 auto",
  lineHeight: 1.8,
  textAlign: "center"
}}>
 Compare 60+ Hair Vendors, See Real Reviews & Find Trusted Hair in Seconds.
</p>
      </div>

     {/* Stats Bar */}
     <div style={{ 
        marginTop: isMobile ? "16px" : "28px",
        display: "flex",
        justifyContent: "center",
        padding: "0 16px"
      }}>
  <button style={{
    background: "linear-gradient(135deg, #4a8a4a, #2a6a2a)",
    color: "#ffffff",
    padding: isMobile ? "14px 40px" : "14px 30px",
    borderRadius: "999px",
    border: "none",
    fontWeight: 700,
    fontSize: isMobile ? "16px" : "15px",
    fontSize: "15px",
    letterSpacing: "0.3px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(42,106,42,0.28)"
  }}>
  Compare Vendors Now
  </button>
</div>

      {/* Controls */}
      <div style={{
  width: "100%",
  maxWidth: isMobile ? "100%" : "900px",
  margin: "0 auto",
  padding: isMobile ? "0 10px" : "0 24px",
  boxSizing: "border-box"
}}>

        {/* Search */}
        <div style={{ position: "relative", marginBottom: 11 }}>
          <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#3a2a18", fontSize: 13 }}>&#128269;</span>
          <input
            value={searchQ} onChange={e => { setSearchQ(e.target.value); setCurrentPage(1); }}
            placeholder="Search by supplier name or texture..."
            style={{
              width: "100%", background: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 30, padding: isMobile ? "12px 14px 12px 36px" : "10px 12px 10px 32px",
              color: "#1a0f0a", fontSize: 13, outline: "none", fontFamily: "'DM Sans', sans-serif",
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
{/* Hair Texture Gallery */}
<div style={{ maxWidth: 600, margin: "0 auto 20px", padding: "0 13px" }}>
          <div style={{ color: "#2a6a2a", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>Browse by Hair Texture</div>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8, WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
            {[
              { name: "Body Wave", img: "/bodywave.jpg" },
              { name: "Deep Wave", img: "/deepwave.jpg" },
              { name: "Straight", img: "/straight.jpg" },
              { name: "Kinky Curly", img: "/kinkycurly.jpg" },
              { name: "Water Wave", img: "/waterwave.jpg" },
              { name: "Loose Wave", img: "/loosewave.jpg" },
              { name: "Tape-In", img: "/tapein.jpg" },
{ name: "Weft", img: "/weft.jpg" },

{ name: "Clip-In", img: "/clipin.jpg" },

{ name: "Weft Style 2", img: "/1weft.jpg" },
{ name: "Micro Bead", img: "/1microbead.jpg" },
{ name: "Sheitel Wig", img: "/sheitel.jpg" },
{ name: "European Wig", img: "/europeanwig.jpg" },
            ].map((texture) => (
              <div key={texture.name} onClick={() => { setSearchQ(texture.name); setCurrentPage(1); }} style={{
                flexShrink: 0, cursor: "pointer", textAlign: "center", width: isMobile ? 90 : 100,
              }}>
                <div style={{
                  width: isMobile ? 90 : 100, height: isMobile ? 90 : 100, borderRadius: 12,
                  overflow: "hidden", border: "2px solid #4a8a4a", marginBottom: 6,
                }}>
                  <img src={texture.img} alt={texture.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ fontSize: 10, color: "#2a6a2a", fontWeight: 600 }}>{texture.name}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Filter */}
        <div style={{
          overflowX: "scroll",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          marginBottom: 12,
          padding: "4px 0 8px",
          width: "100%",
          boxSizing: "border-box",
        }}>
          <div style={{
            display: "flex",
            gap: 8,
            padding: "0 8px",
            width: "max-content",
            justifyContent: "flex-start",
          }}>
            {filters.map(f => (
              <button key={f.id} onClick={() => { setFilter(f.id); setCurrentPage(1); }} style={{
                padding: isMobile ? "10px 16px" : "8px 14px",
fontSize: isMobile ? 12 : 14,
borderRadius: "999px",
                fontSize: 14,
                fontWeight: 600,
                border: "2px solid",
                borderColor: filter === f.id ? "#2a6a2a" : "#4a8a4a",
                background: filter === f.id
                  ? "linear-gradient(135deg, #4a8a4a, #2a6a2a)"
                  : "#ffffff",
                color: filter === f.id ? "#ffffff" : "#2a5a2a",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                boxShadow: filter === f.id ? "0 4px 12px rgba(42,106,42,0.3)" : "0 2px 6px rgba(0,0,0,0.08)",
              }}>{f.label}</button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#2a5a2a", fontSize: 10, letterSpacing: 1, textTransform: "uppercase" }}>Sort</span>
          {[["name","Name"],["rating","Top Rated"],["products","Most Products"]].map(([val, lab]) => (
            <button key={val} onClick={() => setSortBy(val)} style={{
              padding: isMobile ? "6px 8px" : "4px 11px", borderRadius: 20, border: "1px solid",
              borderColor: sortBy === val ? "#2a6a2a" : "#4a8a4a",
              background: sortBy === val ? "#2a6a2a" : "transparent",
              color: sortBy === val ? "#ffffff" : "#2a5a2a",
              fontSize: 11, cursor: "pointer", transition: "all 0.2s",
            }}>{lab}</button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div style={{ width: "100%", maxWidth: isMobile ? "100%" : 900, margin: "0 auto", padding: isMobile ? "8px 10px" : "8px 20px", boxSizing: "border-box" }}>
        <span style={{ color: "#251808", fontSize: 11 }}>
          {filtered.length} supplier{filtered.length !== 1 ? "s" : ""}
          {searchQ && <span> matching "<span style={{ color: "#4a3020" }}>{searchQ}</span>"</span>}
        </span>
      </div>

     {/* Cards */}
<div style={{ maxWidth: 600, margin: "0 auto", padding: isMobile ? "8px 10px" : "8px 13px" }}>
  {filtered.length === 0 ? (
    <div style={{ textAlign: "center", padding: "50px 0", color: "#2e2010" }}>
      <div style={{ fontSize: 32, marginBottom: 10 }}>&#128269;</div>
      <div style={{ fontSize: 14 }}>
        No exact match — try another keyword like “Body Wave” or “Straight.”
      </div>
  
            
          </div>
        ) : paginatedSuppliers.map(s => (
          <SupplierCard isMobile={isMobile}
            key={s.id} supplier={s}
            isExpanded={expandedId === s.id}
            onToggle={() => setExpandedId(expandedId === s.id ? null : s.id)}
            onReviewClick={sup => { console.log("clicked", sup); setReviewTarget(sup); }}
            userReviews={userReviews}
            favorites={favorites}
onFavorite={toggleFavorite}
compareList={compareList}
onCompare={toggleCompare}

          />
        ))}
      </div>
{/* Pagination */}
{totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, margin: "16px 0", flexWrap: "wrap" }}>
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} style={{
            padding: "10px 20px", borderRadius: 30, border: "2px solid #4a8a4a",
            background: currentPage === 1 ? "#f0f5f0" : "#2a6a2a",
            color: currentPage === 1 ? "#4a8a4a" : "#ffffff",
            fontSize: 14, fontWeight: 600, cursor: currentPage === 1 ? "default" : "pointer"
          }}>← Prev</button>
          <span style={{ color: "#2a6a2a", fontSize: 14, fontWeight: 600 }}>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} style={{
            padding: "10px 20px", borderRadius: 30, border: "2px solid #4a8a4a",
            background: currentPage === totalPages ? "#f0f5f0" : "#2a6a2a",
            color: currentPage === totalPages ? "#4a8a4a" : "#ffffff",
            fontSize: 14, fontWeight: 600, cursor: currentPage === totalPages ? "default" : "pointer"
          }}>Next →</button>
        </div>
      )}
     
      <div style={{ maxWidth: 600, margin: "4px auto 0", padding: "0 13px" }}>
        <div style={{ borderRadius: 12, background: "#f0f5f0", border: "1px solid #4a8a4a", padding: "14px" }}>
          {compareList.length >= 2 && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
          background: "#ffffff", borderTop: "3px solid #2a6a2a",
          padding: "16px", boxShadow: "0 -4px 20px rgba(0,0,0,0.15)"
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ color: "#2a6a2a", fontWeight: 700, fontSize: 14 }}>Comparing {compareList.length} Vendors</div>
              <button onClick={() => setCompareList([])} style={{ background: "transparent", border: "none", color: "#e8354a", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Clear All ✕</button>
            </div>
            <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
              {compareList.map(s => (
                <div key={s.id} style={{ flex: 1, minWidth: 140, background: "#f0f5f0", borderRadius: 12, padding: 12, border: "1px solid #4a8a4a" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 13, color: "#1a3a1a", marginBottom: 6 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: "#2a6a2a", marginBottom: 4 }}>⭐ {avgRating(s.products).toFixed(1)} rating</div>
                  <div style={{ fontSize: 11, color: "#4a7a4a", marginBottom: 4 }}>📍 {s.origin}</div>
                  <div style={{ fontSize: 11, color: "#4a7a4a", marginBottom: 8 }}>💰 {s.products[0].price}</div>
                  <a href={s.shopLink} target="_blank" rel="noreferrer" style={{
                    display: "block", textAlign: "center", padding: "6px", borderRadius: 8,
                    background: "#2a6a2a", color: "#ffffff", fontSize: 11, textDecoration: "none", fontWeight: 600
                  }}>Shop Now</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
          <div style={{ color: "#2a6a2a", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Hair Type Guide</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => (
              <div key={key} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: cfg.color, flexShrink: 0, marginTop: 4 }} />
                <div>
                  <span style={{ color: cfg.color, fontSize: 11, fontWeight: 600 }}>{cfg.label}</span>
                  <span style={{ color: "#2a5a2a", fontSize: 11, marginLeft: 6 }}>
                    {key === "human"     && "— Virgin or Remy from a single donor. Most natural feel, longest lasting, highest cost."}
                    {key === "synthetic" && "— Man-made fibers. Budget-friendly, less heat-versatile, great for protective styles."}
                    {key === "mixed"     && "— Human & synthetic combined. Mid-range price/quality, blends durability with a natural look."}
                  </span>
                </div>
                </div>
            ))}
      </div>
    </div>
    {reviewTarget && (
  <ReviewModal
    supplier={reviewTarget}
    onClose={() => setReviewTarget(null)}
    onSubmit={(review) => {
      setUserReviews((prev) => {
        const updated = [...prev, review];
        try { localStorage.setItem("jessyluxe_reviews", JSON.stringify(updated)); } catch {}
        return updated;
      });
      setTimeout(() => setReviewTarget(null), 2000);
    }}
  />
)}
    <div style={{
        textAlign: "center",
        padding: "30px 20px",
        marginTop: 40,
        borderTop: "1px solid #2a1a10",
        color: "#2a5a2a",
        fontSize: 12,
      }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 16, flexWrap: "wrap" }}>
  <a href="https://www.instagram.com/jessyluxebeautysupply" target="_blank" rel="noreferrer" style={{ color: "#2a6a2a", fontSize: 13, textDecoration: "none", fontWeight: 600 }}>Instagram</a>
  <a href="https://www.facebook.com/profile.php?id=61584991686166" target="_blank" rel="noreferrer" style={{ color: "#2a6a2a", fontSize: 13, textDecoration: "none", fontWeight: 600 }}>Facebook</a>
  <a href="https://www.tiktok.com/@vixen565" target="_blank" rel="noreferrer" style={{ color: "#2a6a2a", fontSize: 13, textDecoration: "none", fontWeight: 600 }}>TikTok</a>
  <a href="https://www.pinterest.com/jessyluxe303" target="_blank" rel="noreferrer" style={{ color: "#2a6a2a", fontSize: 13, textDecoration: "none", fontWeight: 600 }}>Pinterest</a>
  <a href="mailto:jessysupply@jessyluxebeauty.com" style={{ color: "#2a6a2a", fontSize: 13, textDecoration: "none", fontWeight: 600 }}>Email Us</a>
</div>
        <p>© 2026 Jessy Luxe Beauty. All rights reserved.</p>
        <p style={{ marginTop: 8 }}>
          Built for the community · Not affiliated with any brand
        </p>
      </div>
    </div>
    </div>
  );
    }
            

/* ============================================================
   DATA — LISTINGS
   Synced to Supabase CRM seed data (SEED_DATA.sql)
   IDs match property UUIDs in the database.
============================================================ */

window.LISTINGS_DATA = [

  // ── GRAND CAYMAN ─────────────────────────────────────────────

  {
    id: "a1000001-0000-0000-0000-000000000001",
    name: "Horizon Cove",
    subtitle: "Seven Mile Beach Beachfront Estate",
    location: "Seven Mile Beach, Grand Cayman",
    market: "cayman",
    price: "$12,500,000",
    priceRaw: 12500000,
    badge: "Off-Market",
    beds: 6, baths: 7, sqft: "8,400", lotSqft: "37,026", yearBuilt: 2008,
    type: "Estate", status: "active", mls: "AK-KY-2025-001",
    description: "The crown jewel of Seven Mile Beach. This landmark estate commands 120 feet of pristine white sand with uninterrupted turquoise views from every room. Six en-suite bedrooms, gourmet chef's kitchen, home cinema, private infinity pool with beach entry, and fully staffed quarters. One of the most coveted off-market opportunities in the Caribbean.",
    features: ["Infinity Pool","Home Cinema","Smart Home","Wine Cellar","Outdoor Kitchen","Helipad","Gym"],
    amenities: ["120ft Private Beach","Staff Quarters","Boat Dock","Generator","Security Gate","Concierge Service"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85"
    ],
    alt: "Horizon Cove beachfront estate, Seven Mile Beach, Grand Cayman",
    featured: true
  },

  {
    id: "a1000001-0000-0000-0000-000000000002",
    name: "Coral Ridge Penthouse",
    subtitle: "Camana Bay Luxury Penthouse",
    location: "Camana Bay, Grand Cayman",
    market: "cayman",
    price: "$4,200,000",
    priceRaw: 4200000,
    badge: "New Listing",
    beds: 3, baths: 4, sqft: "3,800", lotSqft: null, yearBuilt: 2019,
    type: "Penthouse", status: "active", mls: "AK-KY-2025-002",
    description: "An architectural statement at the heart of Camana Bay. Triple-level penthouse delivering 270-degree views across the North Sound and Caribbean Sea. Curated interiors by a Miami-based designer, rooftop plunge pool terrace, and private elevator from the secure garage lobby.",
    features: ["Rooftop Plunge Pool","Private Elevator","Smart Home","Floor-to-Ceiling Glass","Designer Interiors"],
    amenities: ["Concierge","Secure Parking","Building Gym","Marina Views","Town Centre Access"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=85",
      "https://images.unsplash.com/photo-1600210491892-03d54079b6ac?w=1200&q=85"
    ],
    alt: "Coral Ridge Penthouse, Camana Bay, Grand Cayman",
    featured: false
  },

  {
    id: "a1000001-0000-0000-0000-000000000003",
    name: "Rum Point Villa",
    subtitle: "North Sound Waterfront Retreat",
    location: "Rum Point, Grand Cayman",
    market: "cayman",
    price: "$3,750,000",
    priceRaw: 3750000,
    badge: null,
    beds: 5, baths: 5, sqft: "4,900", lotSqft: "21,780", yearBuilt: 2014,
    type: "Villa", status: "active", mls: "AK-KY-2025-003",
    description: "A serene escape on Cayman's untouched north coast. This villa occupies a generous waterfront lot on the calm North Sound — ideal for kayaking, paddleboarding, and offshore diving. Five bedrooms across two pavilions, large wraparound verandah, and a private dock.",
    features: ["Private Dock","Wraparound Verandah","Outdoor Kitchen","Pool","Kayak Storage"],
    amenities: ["Waterfront Access","North Sound Views","Private Beach","Generator","Gated"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85"
    ],
    alt: "Rum Point Villa waterfront retreat, North Sound, Grand Cayman",
    featured: false
  },

  {
    id: "a1000001-0000-0000-0000-000000000011",
    name: "Seven Palms Estate",
    subtitle: "West Bay Private Compound",
    location: "West Bay, Grand Cayman",
    market: "cayman",
    price: "$7,900,000",
    priceRaw: 7900000,
    badge: "Exclusive",
    beds: 7, baths: 8, sqft: "9,800", lotSqft: "52,272", yearBuilt: 2011,
    type: "Estate", status: "active", mls: "AK-KY-2025-011",
    description: "A walled private compound in prestigious West Bay, walking distance to Cayman Kai and the northern beaches. The main residence and two guest villas sit within 1.2 acres of landscaped tropical grounds. Multigenerational living at its finest — staff cottage, tennis court, and a 25-metre lap pool.",
    features: ["25m Lap Pool","Tennis Court","Staff Cottage","Two Guest Villas","Wine Cellar","Home Gym","Cinema Room"],
    amenities: ["1.2 Acre Grounds","Gated & Walled","Near Cayman Kai","Staff Accommodation","Solar Panels"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85"
    ],
    alt: "Seven Palms Estate private compound, West Bay, Grand Cayman",
    featured: true
  },

  // ── NASSAU & BAHAMAS ─────────────────────────────────────────

  {
    id: "a1000001-0000-0000-0000-000000000012",
    name: "Lyford Cay Ocean Manor",
    subtitle: "Nassau's Most Prestigious Address",
    location: "Lyford Cay, Nassau, Bahamas",
    market: "bahamas",
    price: "$9,800,000",
    priceRaw: 9800000,
    badge: "Off-Market",
    beds: 7, baths: 8, sqft: "10,200", lotSqft: "43,560", yearBuilt: 2006,
    type: "Estate", status: "active", mls: "AK-BS-2025-012",
    description: "Set within the exclusive gated community of Lyford Cay, this grand ocean manor represents the pinnacle of Bahamian luxury. Seven bedrooms, a chef's kitchen with twin islands, an art gallery corridor, and a 60-foot pool terrace facing Nassau Harbour. Full staff of seven included in the sale.",
    features: ["60ft Pool Terrace","Art Gallery Corridor","Chef's Kitchen","Wine Cellar","Staff of Seven","Home Cinema","Smart Home"],
    amenities: ["Lyford Cay Club Access","Gated Community","Harbour Views","Marina Access","Security","Concierge"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85"
    ],
    alt: "Lyford Cay Ocean Manor estate, Nassau, Bahamas",
    featured: true
  },

  {
    id: "a1000001-0000-0000-0000-000000000013",
    name: "Palmetto Point Estate",
    subtitle: "Nassau Beachfront Sanctuary",
    location: "Palmetto Point, Nassau, Bahamas",
    market: "bahamas",
    price: "$4,750,000",
    priceRaw: 4750000,
    badge: null,
    beds: 5, baths: 6, sqft: "6,200", lotSqft: "26,136", yearBuilt: 2012,
    type: "Villa", status: "active", mls: "AK-BS-2025-013",
    description: "A private beachfront sanctuary occupying one of the last undeveloped stretches of Nassau's northern coast. Five bedroom villa with direct beach access, a lagoon-style pool, and an outdoor entertainment pavilion. 90-day rental yield projections exceed $380,000 annually.",
    features: ["Lagoon Pool","Outdoor Pavilion","Beach Bar","Outdoor Shower","Dock Access"],
    amenities: ["Direct Beach Access","200ft Frontage","Generator","Staff Suite","Golf Cart Included"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85"
    ],
    alt: "Palmetto Point Estate beachfront villa, Nassau, Bahamas",
    featured: false
  },

  {
    id: "a1000001-0000-0000-0000-000000000014",
    name: "Harbour Island Cottage",
    subtitle: "Pink Sand Beach Retreat",
    location: "Harbour Island, Bahamas",
    market: "bahamas",
    price: "$2,200,000",
    priceRaw: 2200000,
    badge: "Price Reduced",
    beds: 3, baths: 3, sqft: "2,400", lotSqft: "8,712", yearBuilt: 1998,
    type: "Cottage", status: "active", mls: "AK-BS-2025-014",
    description: "A beautifully restored colonial cottage steps from Harbour Island's legendary pink sand beach. Whitewashed wooden interiors, wraparound porch, tropical garden with freshwater plunge pool. Accessible from Nassau in 35 minutes by charter — the quintessential Bahamian escape.",
    features: ["Plunge Pool","Wraparound Porch","Tropical Garden","Restored Colonial Architecture"],
    amenities: ["3 Min Walk to Pink Sand Beach","Golf Cart","Near Dunmore Town","Fully Furnished"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85",
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85"
    ],
    alt: "Harbour Island colonial cottage retreat, Bahamas",
    featured: false
  },

  {
    id: "a1000001-0000-0000-0000-000000000021",
    name: "Ocean Walk Residence",
    subtitle: "Exuma Private Waterfront",
    location: "Exuma, Bahamas",
    market: "bahamas",
    price: "$5,900,000",
    priceRaw: 5900000,
    badge: "Exclusive",
    beds: 6, baths: 7, sqft: "8,100", lotSqft: "34,848", yearBuilt: 2016,
    type: "Villa", status: "active", mls: "AK-BS-2025-021",
    description: "Positioned on a private peninsula in the Exuma Cays with 360-degree water views, this exceptional residence offers unrivalled seclusion. Private boat basin, bespoke interiors, and direct access to some of the clearest water in the world. A helicopter pad and full island caretaker complete the offering.",
    features: ["Private Boat Basin","Helipad","Infinity Pool","Outdoor Kitchen","Sundeck","Island Caretaker"],
    amenities: ["360° Water Views","Private Peninsula","Helicopter Pad","Boat Basin","Fully Staffed"],
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85"
    ],
    alt: "Ocean Walk Residence private peninsula, Exuma, Bahamas",
    featured: true
  },

  // ── JAMAICA ──────────────────────────────────────────────────

  {
    id: "a1000001-0000-0000-0000-000000000022",
    name: "Trident Point Manor",
    subtitle: "Port Antonio Clifftop Estate",
    location: "Port Antonio, Jamaica",
    market: "jamaica",
    price: "$8,500,000",
    priceRaw: 8500000,
    badge: "Off-Market",
    beds: 8, baths: 9, sqft: "11,200", lotSqft: "87,120", yearBuilt: 2003,
    type: "Estate", status: "active", mls: "AK-JM-2025-022",
    description: "A legendary private estate perched above the cobalt waters of the Blue Lagoon in Port Antonio — arguably the most beautiful location in all of Jamaica. Eight bedrooms across the main house and two guest pavilions. Preferred by visiting royalty, heads of state, and the world's most discerning travellers.",
    features: ["Main House + 2 Pavilions","Clifftop Infinity Pool","Private Dock","Home Cinema","Staff of Ten","Helipad","Tennis Court"],
    amenities: ["Blue Lagoon Access","2 Acres Tropical Grounds","Private Cove","Dive Equipment","Fully Staffed Year-Round"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85"
    ],
    alt: "Trident Point Manor clifftop estate, Port Antonio, Jamaica",
    featured: true
  },

  {
    id: "a1000001-0000-0000-0000-000000000023",
    name: "Blue Lagoon Retreat",
    subtitle: "Montego Bay Oceanfront Villa",
    location: "Sandy Bay, Montego Bay, Jamaica",
    market: "jamaica",
    price: "$3,100,000",
    priceRaw: 3100000,
    badge: null,
    beds: 4, baths: 5, sqft: "4,900", lotSqft: "17,424", yearBuilt: 2017,
    type: "Villa", status: "active", mls: "AK-JM-2025-023",
    description: "A contemporary oceanfront villa on Montego Bay's prestigious Sandy Bay corridor, offering immediate Tryall Club membership eligibility. Wide open-plan living spaces open to a vast covered terrace and beach-entry pool. Four en-suite bedrooms, gourmet kitchen, and a separate self-contained guest cottage.",
    features: ["Beach-Entry Pool","Guest Cottage","Covered Terrace","Chef's Kitchen","Smart Home"],
    amenities: ["Tryall Club Eligibility","Direct Beach Access","Staff Suite","Generator","Security Cameras"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85"
    ],
    alt: "Blue Lagoon Retreat oceanfront villa, Montego Bay, Jamaica",
    featured: false
  },

  {
    id: "a1000001-0000-0000-0000-000000000029",
    name: "Round Hill Villa",
    subtitle: "Round Hill Resort Residence",
    location: "Round Hill, Montego Bay, Jamaica",
    market: "jamaica",
    price: "$4,100,000",
    priceRaw: 4100000,
    badge: "Resort Managed",
    beds: 5, baths: 6, sqft: "5,600", lotSqft: "28,314", yearBuilt: 2009,
    type: "Villa", status: "active", mls: "AK-JM-2025-029",
    description: "An elegant hillside villa within the legendary Round Hill Hotel & Villas resort — Jamaica's most storied luxury address, once host to Noel Coward, Ralph Lauren, and the Kennedy family. Enrolled in Round Hill's fully-managed rental programme. Commanding panoramic bay views from every principal room.",
    features: ["Round Hill Rental Programme","Panoramic Bay Views","Pool","Covered Verandah","Tropical Gardens"],
    amenities: ["Round Hill Hotel Services","Beach Club Access","Spa Access","Restaurant","Concierge","Security"],
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=85",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85"
    ],
    alt: "Round Hill Villa resort residence, Montego Bay, Jamaica",
    featured: false
  }

];

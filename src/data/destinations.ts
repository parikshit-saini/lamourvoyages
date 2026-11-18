import { images, type Region } from "./site";

export type Destination = {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  image: string;
  intro: string[];
  highlights: { icon: string; title: string; text: string }[];
  facts: { label: string; value: string }[];
  tourRegions: Region[];
  /** Child destinations shown as cards (used by the Trending hub page) */
  children?: string[];
  parent?: { label: string; href: string };
};

export const destinations: Record<string, Destination> = {
  "north-america": {
    slug: "north-america",
    title: "North America",
    eyebrow: "USA East & West Coast",
    subtitle: "From Manhattan skylines to the Grand Canyon rim — the United States, tailored around you.",
    image: images.newYork,
    intro: [
      "Our North America desk designs private and group journeys across the United States, from the classic East Coast circuit of New York, Philadelphia, Washington D.C. and Niagara Falls to the West Coast's Los Angeles, Las Vegas, San Francisco and the Grand Canyon.",
      "With our own office in New Jersey, we handle hotels, transfers, guided sightseeing and on-ground support directly — so every connection runs on time.",
    ],
    highlights: [
      { icon: "location_city", title: "New York City", text: "Broadway, Fifth Avenue, Statue of Liberty and helicopter skyline flights." },
      { icon: "account_balance", title: "Washington D.C.", text: "Capitol, Smithsonian museums and the monuments with a private guide." },
      { icon: "water", title: "Niagara Falls", text: "Boat rides to the falls, observation towers and the Canadian side." },
      { icon: "casino", title: "Las Vegas", text: "The Strip, world-class shows and a launch point for the canyons." },
      { icon: "terrain", title: "Grand Canyon", text: "Rim viewpoints, helicopter flights and the Skywalk." },
      { icon: "movie", title: "Los Angeles", text: "Hollywood, Beverly Hills, Santa Monica and the studio tours." },
    ],
    facts: [
      { label: "Ideal duration", value: "7 – 14 nights" },
      { label: "Best time", value: "April – June, Sept – Oct" },
      { label: "Great for", value: "Families, groups, first-timers" },
    ],
    tourRegions: ["east", "west"],
  },
  "south-america": {
    slug: "south-america",
    title: "South America",
    eyebrow: "Brazil, Argentina & beyond",
    subtitle: "Samba, tango, rainforest and some of the world's most powerful waterfalls.",
    image: images.brazilArgentina,
    intro: [
      "South America rewards travellers who want colour and contrast. We build routes linking Rio de Janeiro's beaches and landmarks with the Iguazu Falls and the European elegance of Buenos Aires.",
      "Multi-country itineraries are where careful planning matters most — we handle internal flights, border crossings and hand-picked hotels so the journey stays effortless.",
    ],
    highlights: [
      { icon: "landscape", title: "Rio de Janeiro", text: "Christ the Redeemer, Sugarloaf Mountain, Copacabana and Ipanema." },
      { icon: "water", title: "Iguazu Falls", text: "Walkways on the Brazilian and Argentine sides, plus helicopter flights." },
      { icon: "music_note", title: "Buenos Aires", text: "Tango shows, La Boca, Recoleta and Argentine steakhouses." },
      { icon: "wine_bar", title: "Mendoza", text: "Malbec vineyards beneath the Andes." },
      { icon: "forest", title: "The Amazon", text: "River lodges and guided rainforest excursions from Manaus." },
      { icon: "celebration", title: "Carnival", text: "Sambadrome tickets and festival packages, planned well ahead." },
    ],
    facts: [
      { label: "Ideal duration", value: "8 – 12 nights" },
      { label: "Best time", value: "September – March" },
      { label: "Great for", value: "Couples, culture lovers" },
    ],
    tourRegions: ["south"],
  },
  canada: {
    slug: "canada",
    title: "Canada",
    eyebrow: "Cities, falls & the Rockies",
    subtitle: "Toronto, Niagara, Banff and Lake Louise — wilderness and cosmopolitan cities in one journey.",
    image: images.canada,
    intro: [
      "Canada combines lively, multicultural cities with some of the most dramatic mountain scenery on earth. Our Ontario team plans everything from Toronto city breaks to rail journeys through the Rockies.",
      "Pair the East (Toronto, Niagara, Montreal, Quebec City) with the West (Vancouver, Banff, Jasper) for a complete coast-to-coast experience.",
    ],
    highlights: [
      { icon: "location_city", title: "Toronto", text: "CN Tower, waterfront and a gateway to Niagara Falls." },
      { icon: "water", title: "Niagara Falls", text: "Boat cruises, Journey Behind the Falls and wine country." },
      { icon: "landscape", title: "Banff & Lake Louise", text: "Turquoise glacial lakes, gondolas and mountain lodges." },
      { icon: "train", title: "Rocky Mountaineer", text: "Scenic daylight rail journeys through the Rockies." },
      { icon: "sailing", title: "Vancouver", text: "Stanley Park, Granville Island and coastal mountains." },
      { icon: "castle", title: "Quebec City", text: "Old-world streets and French-Canadian cuisine." },
    ],
    facts: [
      { label: "Ideal duration", value: "7 – 12 nights" },
      { label: "Best time", value: "June – September" },
      { label: "Great for", value: "Nature lovers, families" },
    ],
    tourRegions: ["canada"],
  },
  "trending-destination": {
    slug: "trending-destination",
    title: "Trending Destinations",
    eyebrow: "The cities everyone is asking for",
    subtitle: "New York, Los Angeles, Miami, Orlando and Boston — our most-requested city escapes.",
    image: images.hero,
    intro: [
      "These are the American cities our clients book most often, either as stand-alone city breaks or as part of a wider USA itinerary.",
      "Choose a city below to see what we recommend, then let us tailor hotels, transfers and experiences to your dates and budget.",
    ],
    highlights: [],
    facts: [
      { label: "Cities", value: "5 signature metros" },
      { label: "Ideal duration", value: "3 – 5 nights each" },
      { label: "Combine with", value: "East or West Coast tours" },
    ],
    tourRegions: ["trending"],
    children: ["new-york", "los-angeles", "miami", "orlando", "boston"],
  },
  "new-york": {
    slug: "new-york",
    title: "New York",
    eyebrow: "Trending • East Coast",
    subtitle: "The city that never sleeps — Broadway, skyline views and world-class shopping.",
    image: images.newYork,
    intro: [
      "New York is the classic starting point for any USA journey. We arrange central Manhattan hotels, private city tours and the experiences that make a first visit unforgettable.",
    ],
    highlights: [
      { icon: "theater_comedy", title: "Broadway", text: "Premium seats for the season's biggest shows." },
      { icon: "flag", title: "Statue of Liberty", text: "Harbour cruises to Liberty and Ellis Islands." },
      { icon: "park", title: "Central Park", text: "Guided walks, bike tours or carriage rides." },
      { icon: "flight", title: "Helicopter flights", text: "Skyline views over Manhattan and the Hudson." },
      { icon: "shopping_bag", title: "Fifth Avenue", text: "Flagship stores and personal shopping." },
      { icon: "visibility", title: "Observation decks", text: "Top of the Rock, Empire State, Edge or Summit." },
    ],
    facts: [
      { label: "Ideal stay", value: "3 – 5 nights" },
      { label: "Best time", value: "April – June, Sept – Dec" },
      { label: "Airport", value: "JFK / Newark / LaGuardia" },
    ],
    tourRegions: ["east"],
    parent: { label: "Trending Destinations", href: "/trending-destination" },
  },
  "los-angeles": {
    slug: "los-angeles",
    title: "Los Angeles",
    eyebrow: "Trending • West Coast",
    subtitle: "Hollywood glamour, Pacific beaches and the gateway to the American West.",
    image: images.westCoast,
    intro: [
      "Los Angeles mixes film-industry history with beach life and great food. It's also the natural starting point for Las Vegas, the Grand Canyon and the Pacific Coast Highway.",
    ],
    highlights: [
      { icon: "star", title: "Hollywood", text: "Walk of Fame, TCL Chinese Theatre and the Hollywood sign." },
      { icon: "movie", title: "Studio tours", text: "Behind-the-scenes at Universal and Warner Bros." },
      { icon: "diamond", title: "Beverly Hills", text: "Rodeo Drive and celebrity neighbourhoods." },
      { icon: "beach_access", title: "Santa Monica", text: "The pier, Venice Beach and coastal cycling." },
      { icon: "museum", title: "Getty Center", text: "Art, architecture and city views." },
      { icon: "directions_car", title: "Pacific Coast Hwy", text: "Self-drive or chauffeured coastal road trips." },
    ],
    facts: [
      { label: "Ideal stay", value: "3 – 4 nights" },
      { label: "Best time", value: "Year-round" },
      { label: "Airport", value: "LAX" },
    ],
    tourRegions: ["west"],
    parent: { label: "Trending Destinations", href: "/trending-destination" },
  },
  miami: {
    slug: "miami",
    title: "Miami",
    eyebrow: "Trending • Florida",
    subtitle: "Art Deco, ocean breezes and South Beach nights.",
    image: images.miami,
    intro: [
      "Miami brings together beaches, Latin culture and vibrant nightlife. Pair it with Orlando or the Florida Keys for a complete sunshine escape.",
    ],
    highlights: [
      { icon: "beach_access", title: "South Beach", text: "Ocean Drive and the Art Deco Historic District." },
      { icon: "sailing", title: "Yacht charters", text: "Private cruises around Biscayne Bay." },
      { icon: "palette", title: "Wynwood", text: "Street art, galleries and cafés." },
      { icon: "eco", title: "Everglades", text: "Airboat rides and wildlife spotting." },
      { icon: "directions_car", title: "Key West", text: "A scenic drive across the Overseas Highway." },
      { icon: "nightlife", title: "Nightlife", text: "Rooftop bars, Little Havana and live music." },
    ],
    facts: [
      { label: "Ideal stay", value: "3 – 4 nights" },
      { label: "Best time", value: "November – April" },
      { label: "Airport", value: "MIA" },
    ],
    tourRegions: ["east"],
    parent: { label: "Trending Destinations", href: "/trending-destination" },
  },
  orlando: {
    slug: "orlando",
    title: "Orlando",
    eyebrow: "Trending • Florida",
    subtitle: "The theme park capital of the world — perfect for families.",
    image: images.miami,
    intro: [
      "Orlando is built for family holidays. We plan park tickets, resort stays and VIP guided experiences so you spend more time on rides and less time in queues.",
    ],
    highlights: [
      { icon: "attractions", title: "Walt Disney World", text: "Four theme parks plus two water parks." },
      { icon: "movie", title: "Universal Orlando", text: "Universal Studios, Islands of Adventure and Epic Universe." },
      { icon: "rocket_launch", title: "Kennedy Space Center", text: "Rockets, astronauts and launch viewing." },
      { icon: "pool", title: "Water parks", text: "Aquatica, Volcano Bay and more." },
      { icon: "star", title: "VIP tours", text: "Private guides with front-of-line access." },
      { icon: "villa", title: "Resort villas", text: "Spacious stays with pools for larger families." },
    ],
    facts: [
      { label: "Ideal stay", value: "4 – 6 nights" },
      { label: "Best time", value: "Jan – May, Sept – Nov" },
      { label: "Airport", value: "MCO" },
    ],
    tourRegions: ["east"],
    parent: { label: "Trending Destinations", href: "/trending-destination" },
  },
  boston: {
    slug: "boston",
    title: "Boston",
    eyebrow: "Trending • New England",
    subtitle: "Revolutionary history, world-famous universities and coastal charm.",
    image: images.boston,
    intro: [
      "Boston is one of America's most walkable cities, packed with history. It's a great addition to a New York or East Coast itinerary, especially in autumn.",
    ],
    highlights: [
      { icon: "route", title: "Freedom Trail", text: "16 historic sites with a private historian." },
      { icon: "school", title: "Harvard & MIT", text: "Guided campus walks in Cambridge." },
      { icon: "sports_baseball", title: "Fenway Park", text: "Ballpark tours or a Red Sox game." },
      { icon: "set_meal", title: "Seafood", text: "Lobster rolls and clam chowder by the harbour." },
      { icon: "beach_access", title: "Cape Cod", text: "Beaches, lighthouses and whale watching." },
      { icon: "forest", title: "Fall foliage", text: "New England's famous autumn colours." },
    ],
    facts: [
      { label: "Ideal stay", value: "2 – 4 nights" },
      { label: "Best time", value: "May – October" },
      { label: "Airport", value: "BOS" },
    ],
    tourRegions: ["east"],
    parent: { label: "Trending Destinations", href: "/trending-destination" },
  },
};

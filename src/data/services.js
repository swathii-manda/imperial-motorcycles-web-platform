export const SERVICES = [
  {
    id: "general-service",
    title: "GENERAL SERVICE",
    shortDescription: "Complete inspection and maintenance for smooth, reliable performance on every ride.",
    fullDescription: "Our comprehensive general service covers a 42-point safety inspection, oil and filter change, spark plug replacement, brake line checks, chain tensioning, fluid top-ups, and wheel alignment checks. Recommended every 5,000 km or annually.",
    startingPrice: 180,
    estimatedTime: "2 - 3 Hours",
    icon: "Wrench",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Complete 42-point safety & mechanical inspection",
      "Engine oil and filter change (Full Synthetic)",
      "Spark plug check or replacement",
      "Brake fluid level & pad wear check",
      "Chain cleaned, tensioned & lubricated",
      "Battery health & charging system diagnostic"
    ]
  },
  {
    id: "engine-repair",
    title: "ENGINE REPAIR",
    shortDescription: "Expert engine diagnostics, rebuilds, valve adjustments and repair for all makes and models.",
    fullDescription: "From top-end valve clearances and cylinder head rebuilds to complete crankcase overhauls, our master engine technicians bring precision engineering to restore full horsepower, torque, and engine smoothness.",
    startingPrice: 350,
    estimatedTime: "1 - 3 Days",
    icon: "Gauge",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Computerized ECU engine error diagnostics",
      "Valve clearance adjustment & shimming",
      "Cylinder compression & leak-down test",
      "Carburetor sync or FI throttle body balancing",
      "Gasket, seal, and piston ring replacement",
      "Dyno tuning & road test verification"
    ]
  },
  {
    id: "brake-service",
    title: "BRAKE SERVICE",
    shortDescription: "Brake inspection, high-performance pad replacement, rotor surfacing and full brake care.",
    fullDescription: "Your safety depends on maximum stopping power. We install sintered or ceramic performance brake pads, flush DOT4/DOT5.1 fluid, bleed air locks, service calipers, and replace braided stainless steel brake lines.",
    startingPrice: 120,
    estimatedTime: "1 - 2 Hours",
    icon: "Disc",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Front & rear brake pad condition inspection",
      "High-heat brake fluid flush & pressure bleeding",
      "Caliper piston cleaning & lube",
      "Brake rotor runout measurement & deglazing",
      "Braided brake line installation (optional upgrade)"
    ]
  },
  {
    id: "oil-change",
    title: "OIL CHANGE",
    shortDescription: "Premium synthetic oil change for improved engine protection, cooler running and longer life.",
    fullDescription: "Treat your motorcycle to Motul, Liqui Moly, or Shell Advance 100% synthetic lubricants. Includes a fresh OEM filter, new drain plug crush washer, and chain lube application.",
    startingPrice: 75,
    estimatedTime: "30 Mins",
    icon: "Droplet",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Motul 300V / 7100 100% Synthetic engine oil",
      "High-flow OEM grade oil filter replacement",
      "New drain plug crush washer installation",
      "Sump & engine case leak check",
      "Drive chain adjustment & spray lube"
    ]
  },
  {
    id: "electrical-repair",
    title: "ELECTRICAL REPAIR",
    shortDescription: "Electrical diagnostics, stator replacement, wiring repairs and auxiliary lighting installations.",
    fullDescription: "Modern motorcycles rely heavily on sensitive electronics. We diagnose stator short-circuits, faulty rectifier/regulators, battery drains, corrupt ECU codes, quickshifters, and LED lighting harness setups.",
    startingPrice: 140,
    estimatedTime: "2 - 4 Hours",
    icon: "Cpu",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Multimeter & oscilloscope harness inspection",
      "Stator coil resistance & output AC voltage test",
      "Regulator / Rectifier DC output charging test",
      "Custom wiring loom soldering & heat-shrink wrap",
      "Auxiliary LED light & USB charger installation"
    ]
  },
  {
    id: "custom-work",
    title: "CUSTOM WORK",
    shortDescription: "Tailored custom builds, frame modifications, cafe racer conversions and bespoke bodywork.",
    fullDescription: "Turn your vision into reality. We design and build one-of-a-kind Cafe Racers, Scramblers, Bobbers, and Track bikes with hand-crafted tail sections, custom handlebars, powder-coated frames, and custom paintwork.",
    startingPrice: 500,
    estimatedTime: "Custom Timeline",
    icon: "Settings",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1515777315835-281b94c9589f?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Initial 1-on-1 design consultation & 3D visualization",
      "Subframe fabrication & custom seat upholstery",
      "Custom exhaust fabrication & headers welding",
      "Powder coating, anodizing & custom airbrush paint",
      "Unique clip-ons, rearsets & vintage lighting kits"
    ]
  },
  {
    id: "performance",
    title: "PERFORMANCE UPGRADES",
    shortDescription: "Performance upgrades, slip-on & full exhaust systems, ECU remapping to boost power.",
    fullDescription: "Unlock the true potential of your engine. We install Akrapovič, SC-Project, and Vance & Hines exhausts, high-flow K&N air filters, flash ECU maps, upgrade quickshifters, and tune fueling for crisp throttle response.",
    startingPrice: 280,
    estimatedTime: "2 - 5 Hours",
    icon: "Flame",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Full system / slip-on exhaust installation",
      "ECU flashing & Woolich / Dynojet Power Commander tuning",
      "High-flow BMC / K&N air intake upgrade",
      "Slipper clutch & bi-directional quickshifter setup",
      "Dyno power output & air-fuel ratio validation"
    ]
  },
  {
    id: "chain-sprocket",
    title: "CHAIN & SPROCKET",
    shortDescription: "DID & RK X-Ring chain replacement with lightweight performance gearing ratios.",
    fullDescription: "Worn chains and hooked sprockets rob power and pose severe safety hazards. We install heavy-duty DID 520/525/530 X-ring gold chains with JT steel or Sunstar aluminum hard-anodized rear sprockets.",
    startingPrice: 160,
    estimatedTime: "1 - 2 Hours",
    icon: "Link",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Riveted DID Gold X-Ring chain fitting",
      "Front countershaft & rear lightweight sprocket kit",
      "Precision laser rear wheel alignment",
      "Chain slider & swingarm buffer check"
    ]
  },
  {
    id: "suspension",
    title: "SUSPENSION TUNING",
    shortDescription: "Öhlins & WP fork seal replacement, spring re-valving and rider SAG setup.",
    fullDescription: "Proper suspension setup transforms handling confidence. We replace fork seals and bushings with SKF seals, change fork oil viscosity, set rider SAG, and adjust rebound/compression damping to your body weight.",
    startingPrice: 220,
    estimatedTime: "3 - 5 Hours",
    icon: "Sliders",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Fork leg disassembly, ultrasonic cleaning & inspection",
      "SKF dual-compound fork oil seals & dust wipers",
      "Motul Factory Line fork fluid refill",
      "Custom rider SAG measurement & preload clicker setup"
    ]
  },
  {
    id: "battery-service",
    title: "BATTERY & CHARGING",
    shortDescription: "Lithium-ion battery upgrades, charging circuit tests and winter tender connections.",
    fullDescription: "Ensure immediate starter motor crank every morning. We stock lightweight BS-Battery Lithium-Ion batteries and Yuasa AGM maintenance-free batteries with SAE quick-connect tender pigtails.",
    startingPrice: 85,
    estimatedTime: "45 Mins",
    icon: "BatteryCharging",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Battery cold-cranking amps (CCA) load test",
      "Terminal corrosion cleaning & anti-oxidant grease",
      "Lithium-Ion / AGM battery replacement",
      "Quick-disconnect trickle charger lead installation"
    ]
  },
  {
    id: "detailing",
    title: "MOTORCYCLE DETAILING",
    shortDescription: "Deep steam cleaning, paint correction, engine degreasing and ceramic coating protection.",
    fullDescription: "Give your pride and joy showroom-level brilliance. Includes multi-stage foam wash, degreasing hidden engine fins, metal polishing on header pipes, paint swirl correction, and 3-year ceramic coating protection.",
    startingPrice: 195,
    estimatedTime: "3 - 6 Hours",
    icon: "Sparkles",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1515777315835-281b94c9589f?q=80&w=1200&auto=format&fit=crop",
    includedItems: [
      "Touchless warm snow foam pre-wash & hand wash",
      "Exhaust header pipe heat stain removal & metal polish",
      "Leather / vinyl seat conditioning & trim restoration",
      "Dual-action machine paint polish & 9H Ceramic Coating"
    ]
  }
];

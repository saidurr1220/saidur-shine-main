export interface Project3D {
  id: string;
  title: string;
  category: "Character Design" | "Environment Art" | "Product Visualization" | "Motion Graphics" | "Personal Projects";
  year: string;
  client?: string;
  roles: string[];
  software: { name: string; iconKey: string }[];
  polycount: string;
  textures: string;
  heroImage: string;
  heroVideo?: string;
  clayImage: string;
  wireframeImage: string;
  litImage: string;
  summary: string;
  description: string;
  conceptText: string;
  conceptImages: string[];
  wipShots: { title: string; type: "wireframe" | "clay" | "lighting" | "sculpt"; image: string; desc: string }[];
  finalRenders: { title: string; image: string; angle: string }[];
  turntableVideo?: string;
  breakdownVideo?: string;
  featured: boolean;
  highlightStat: string;
}

export const projects3d: Project3D[] = [
  {
    id: "cyber-samurai-2099",
    title: "Kage: Cybernetic Ronin 2099",
    category: "Character Design",
    year: "2025",
    client: "Apex Motion Studios (Cinematic Short)",
    roles: ["Concept Sculpting", "High Poly Modeling", "Retopology & UVs", "PBR Texturing", "Lookdev & Lighting"],
    software: [
      { name: "ZBrush", iconKey: "zbrush" },
      { name: "Maya", iconKey: "maya" },
      { name: "Substance 3D Painter", iconKey: "substance" },
      { name: "Marvelous Designer", iconKey: "marvelous" },
      { name: "Unreal Engine 5", iconKey: "ue5" },
      { name: "Marmoset Toolbag", iconKey: "marmoset" },
    ],
    polycount: "88,400 Tris (Game-Ready)",
    textures: "4x 4K UDIM PBR (Albedo, Roughness, Metallic, Normal, Emissive)",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    clayImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    wireframeImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
    litImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    summary: "Production-ready game and cinematic character blending feudal samurai aesthetics with dystopian cyber-augmentation.",
    description: "Designed from initial anatomical blockout in ZBrush through cloth simulation in Marvelous Designer and clean quad retopology in Maya. Features custom hard-surface carbon fiber plating, emission channels for neural telemetry, and multi-layered weather damage created in Substance Painter.",
    conceptText: "Drawing inspiration from Neo-Tokyo cyberpunk lore and traditional Sengoku-period kabuto helmets. The aesthetic contrasts organic hand-stitched leather against precision-machined titanium joints.",
    conceptImages: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    ],
    wipShots: [
      { title: "ZBrush High-Poly Digital Sculpt", type: "sculpt", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", desc: "45 million polygon organic sculpt and hard-surface booleans" },
      { title: "Retopology & Quad Edge Loops", type: "wireframe", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", desc: "Deformation-optimized edge loops for shoulder and knee articulation" },
      { title: "Clay Neutral Studio Lookdev", type: "clay", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", desc: "Evaluating silhouette readability and form balance under 5400K key light" },
      { title: "Three-Point Studio Lighting Test", type: "lighting", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", desc: "Rim light calibration for silhouette detachment in dark cinematic environments" },
    ],
    finalRenders: [
      { title: "Front Hero Portrait 4K", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85", angle: "Front 3/4 Eye Level" },
      { title: "Katana Sheath Hard Surface Macro", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1200&q=85", angle: "Macro Close-up" },
      { title: "Rear Exo-Spine & Cable Harness", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85", angle: "Rear Dynamic" },
    ],
    featured: true,
    highlightStat: "88k Tris ? 4K UDIMs",
  },
  {
    id: "neo-tokyo-cyberpunk-alley",
    title: "Sector 7: Neon District Environment",
    category: "Environment Art",
    year: "2025",
    client: "Personal Showcase / ArtStation Trending",
    roles: ["Environment Art", "Modular Kit Architecture", "Substance Designer Materials", "Lumen Lighting", "Lookdev"],
    software: [
      { name: "Unreal Engine 5.4", iconKey: "ue5" },
      { name: "Blender", iconKey: "blender" },
      { name: "Substance 3D Designer", iconKey: "designer" },
      { name: "Substance 3D Painter", iconKey: "substance" },
      { name: "DaVinci Resolve", iconKey: "davinci" },
    ],
    polycount: "340,000 Tris (Modular Scene)",
    textures: "12 Tileable 2K PBR Materials + Decal Atlas",
    heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85",
    clayImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    wireframeImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
    litImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85",
    summary: "Real-time rain-slicked cyberpunk alleyway with procedural neon signage, volumetric smog, and dynamic puddles.",
    description: "Built using a 4-piece modular wall kit and trim sheets in Blender. Procedural asphalt, wet concrete, and rusty corrugated iron created in Substance Designer. Scene assembled and lit in Unreal Engine 5 with Lumen real-time global illumination and Niagara particle rain droplets.",
    conceptText: "Atmospheric mood inspired by Blade Runner 2049 and Shinjuku backalleys. Visual rhythm relies on deep cyan shadows punctuated by warm magenta neon signage.",
    conceptImages: [
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
    ],
    wipShots: [
      { title: "Modular Architecture Kit Blockout", type: "wireframe", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", desc: "Grid-snapped modular architecture kit with zero light bleeding" },
      { title: "Clay Environment Assembly", type: "clay", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", desc: "Verifying focal lines, prop density, and visual clutter hierarchy" },
      { title: "Niagara Particle & Rain Volume Test", type: "lighting", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", desc: "Real-time screen-space water ripples and volumetric atmospheric fog" },
    ],
    finalRenders: [
      { title: "Central Alley Hero Shot", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85", angle: "Perspective Wide 24mm" },
      { title: "Noodle Stall Street Level", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85", angle: "Medium 50mm" },
      { title: "Rooftop Air Duct Overview", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85", angle: "High Angle 85mm" },
    ],
    featured: true,
    highlightStat: "Real-Time Lumen UE5",
  },
  {
    id: "aero-chrono-chronograph",
    title: "Aero Chrono: Luxury Timepiece Lookdev",
    category: "Product Visualization",
    year: "2025",
    client: "Horology Design Studio (Switzerland)",
    roles: ["Precision CAD / Sub-D Modeling", "Procedural Shaders", "Studio Lighting", "Octane / Redshift Rendering"],
    software: [
      { name: "Cinema 4D", iconKey: "c4d" },
      { name: "Redshift", iconKey: "redshift" },
      { name: "Octane Render", iconKey: "octane" },
      { name: "After Effects", iconKey: "ae" },
    ],
    polycount: "124,000 Polys (Clean Sub-D Quads)",
    textures: "8K Procedural Anisotropic Brushed Steel + Sapphire Crystal Shader",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=85",
    clayImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    wireframeImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
    litImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=85",
    summary: "Photorealistic luxury chronograph lookdev with micro-machined gears, anti-reflective sapphire glass, and brushed titanium bezel.",
    description: "Engineered with microscopic attention to mechanical precision. Featuring fully functioning gear escapement geometry, procedural anisotropic metal reflections that catch studio softbox highlights accurately, and optical dispersion on the multi-coated crystal.",
    conceptText: "Aviation-inspired chronograph balancing raw industrial titanium with minimalist Swiss typography and subtle orange luminescent indices.",
    conceptImages: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    ],
    wipShots: [
      { title: "Subdivision Surface Edge Flow", type: "wireframe", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", desc: "100% all-quad topology preserving crisp chamfers without pinching" },
      { title: "Clay Material Balance", type: "clay", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", desc: "Evaluating bezel bevel width and push-button ergonomics" },
      { title: "Studio Softbox Lighting Pass", type: "lighting", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", desc: "Dual curved diffusion panels with gradient falloff for luxury reflections" },
    ],
    finalRenders: [
      { title: "Direct Dial Face Macro 8K", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85", angle: "Direct 90? Macro" },
      { title: "Crown & Chronograph Pushers", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=85", angle: "45? Side Profile" },
      { title: "Exhibition Caseback Movement", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85", angle: "Rear Skeletal View" },
    ],
    featured: true,
    highlightStat: "8K Sub-D Precision",
  },
  {
    id: "quantum-kinetic-nexus",
    title: "Quantum Nexus: Procedural Kinetic System",
    category: "Motion Graphics",
    year: "2025",
    client: "Voxel Tech Summit (Keynote Title Sequence)",
    roles: ["Houdini FX", "Procedural Geometry Nodes", "Vellum Simulation", "Redshift Lighting & Render"],
    software: [
      { name: "Houdini", iconKey: "houdini" },
      { name: "Cinema 4D", iconKey: "c4d" },
      { name: "Redshift", iconKey: "redshift" },
      { name: "After Effects", iconKey: "ae" },
    ],
    polycount: "Procedural Particle Matrix (4.2M Points)",
    textures: "Subsurface Scattering & Iridescent Thin Film Shaders",
    heroImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    clayImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    wireframeImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
    litImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    summary: "Hypnotic procedural motion graphic system driven by mathematical curl noise, kinetic elasticity, and iridescent light scattering.",
    description: "Built completely in Houdini SOPs and VOPs with procedural audio-reactive falloffs. Rendered in Redshift with custom ray-marched volumetrics and depth-of-field chromatic aberration passes.",
    conceptText: "Visualizing quantum supercomputers and synaptic neural networks in a tangible, sculptural kinetic state.",
    conceptImages: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    ],
    wipShots: [
      { title: "Houdini Point Cloud Simulation", type: "wireframe", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", desc: "Curl noise vector field displacing 4 million point instances" },
      { title: "Subsurface Material Lookdev", type: "clay", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", desc: "Tuning optical thickness and interior refractive light bounce" },
    ],
    finalRenders: [
      { title: "Core Singularity Burst", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85", angle: "Kinetic Freeze Frame" },
      { title: "Orbital Particle Helix", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85", angle: "Macro Depth Slice" },
    ],
    featured: true,
    highlightStat: "Houdini VEX & VOPs",
  },
  {
    id: "bioluminescent-diorama",
    title: "Deep Abyss: Bioluminescent Flora Diorama",
    category: "Environment Art",
    year: "2024",
    client: "Personal Project / 3D Lookdev Study",
    roles: ["Concept Art", "ZBrush Organic Sculpting", "Micro-displacement", "Cycles Lookdev"],
    software: [
      { name: "Blender Cycles", iconKey: "blender" },
      { name: "ZBrush", iconKey: "zbrush" },
      { name: "Substance 3D Painter", iconKey: "substance" },
      { name: "Photoshop", iconKey: "photoshop" },
    ],
    polycount: "210,000 Tris",
    textures: "Custom SSS Shaders + 4K PBR Textures",
    heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
    clayImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    wireframeImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
    litImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
    summary: "Intricate underwater organism diorama featuring alien flora with dynamic subsurface scattering and gentle luminescence.",
    description: "Organic forms sculpted in ZBrush using Dynamesh and sculpt-riser brushes. Texturing emphasizes translucent fleshy membranes, bioluminescent veins, and micro-dew condensation droplets rendered with Blender Cycles adaptive sampling.",
    conceptText: "Exploring deep oceanic trench ecosystems where organisms communicate purely through phosphorescent light pulses.",
    conceptImages: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    ],
    wipShots: [
      { title: "ZBrush Organic Tentacle Sculpt", type: "sculpt", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", desc: "Hand-sculpted capillary details and suction textures" },
      { title: "Clay Shader Shape Validation", type: "clay", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", desc: "Checking curve rhythm and negative space composition" },
    ],
    finalRenders: [
      { title: "Full Diorama Overview", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85", angle: "Isometric Angle" },
      { title: "Luminescent Spore Close-Up", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85", angle: "Macro Depth of Field" },
    ],
    featured: false,
    highlightStat: "SSS & Micro-Displacement",
  },
  {
    id: "astronaut-deep-space-odyssey",
    title: "EVA-09: Deep Space Astronaut Suit",
    category: "Character Design",
    year: "2024",
    client: "Sci-Fi Game Franchise Prototype",
    roles: ["Hard Surface & Soft Goods", "Cloth Physics", "Texture Baking", "Marmoset Lookdev"],
    software: [
      { name: "Maya", iconKey: "maya" },
      { name: "Marvelous Designer", iconKey: "marvelous" },
      { name: "ZBrush", iconKey: "zbrush" },
      { name: "Substance 3D Painter", iconKey: "substance" },
      { name: "Arnold", iconKey: "arnold" },
    ],
    polycount: "115,000 Tris",
    textures: "5x 4K PBR UDIMs (Thermal Foil, Ceramic Composite, Gold Visor)",
    heroImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=85",
    clayImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85",
    wireframeImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
    litImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=85",
    summary: "NASA-inspired deep space exploration suit with gold reflective helmet visor, multi-layered pressurized fabric, and life support backpack.",
    description: "Detailed pattern construction in Marvelous Designer for realistic tension wrinkles and seam lines around shoulder joints. Backpack and helmet modeled with precision hard-surface booleans and subdivision creasing.",
    conceptText: "Functional near-future space suit combining realistic aerospace thermal insulation foils with sleek modular exoskeletal reinforcements.",
    conceptImages: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    ],
    wipShots: [
      { title: "Marvelous Designer Cloth Pattern", type: "wireframe", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", desc: "2D pattern cut simulation with pressure and internal padding" },
      { title: "Backpack Hard Surface Clay", type: "clay", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", desc: "Oxygen tank valves and cable connector ergonomics" },
    ],
    finalRenders: [
      { title: "Full Suit Standing Hero", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=85", angle: "Full Body Studio" },
      { title: "Gold Visor Reflection Macro", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85", angle: "Helmet Close-Up" },
    ],
    featured: false,
    highlightStat: "Marvelous Cloth + Hard Surface",
  },
];

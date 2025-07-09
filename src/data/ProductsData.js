// Bolt images
import hexbolt from '../img/bolts/hexbolt.png';
import Carriagebolt from '../img/bolts/Carriagebolt.png';
import flangebolt from '../img/bolts/flangebolts.png';
import hangerbolt from '../img/bolts/hangerbolt.png';
import plowbolt from '../img/bolts/plowbolts.png';
import squareheadbolt from '../img/bolts/squareheadbolt.png';
import stepbolt from '../img/bolts/stepbolt.png';
import stovebolt from '../img/bolts/stovebolt.png';
import structuralbolt from '../img/bolts/structuralbolts.png';
import timberbolt from '../img/bolts/timberbolt.png';
import ubolt from '../img/bolts/ubolt.jpg';
import jbolt from '../img/bolts/jbolt.jpg';
import togglebolt from '../img/bolts/togglebolt.jpg';
// ==================================================================
// Screw images
import drywallscrew from '../img/Screws/drywallscrew.png';
import selfdrillingscrew from '../img/Screws/selfdrillingscrew.png';
import selftappingscrew from '../img/Screws/selftappingscrew.png';
import sheetmetalscrew from '../img/Screws/sheetmetalscrew.png';
import woodscrew from '../img/Screws/woodscrew.png';
// ===================================================================

// Nuts
import acornnut from '../img/Nuts/Acorn_nut.png';
import allmetallocknut from '../img/Nuts/Allmetal _locknut.png';
import axlenut from '../img/Nuts/axlenuts.png';
import couplingnut from '../img/Nuts/couplingnuts.png';
import finishedhexnut from '../img/Nuts/finished_hexnut.jpg';
import machinescrewnut from '../img/Nuts/MachineScrew_nut.png';
import metricflangenut from '../img/Nuts/metricflange_nuts.png';
import nylocinsertlocknut from '../img/Nuts/Nylockinsert_locknut.png';
import slottedhexnut from '../img/Nuts/slottedhexnuts.png';
import speednut from '../img/Nuts/speednut.png';
import squarenut from '../img/Nuts/squarenuts.png';
import stainlesshexnut from '../img/Nuts/stainlesshexnut.png';
import stainlesslocknut from '../img/Nuts/stainlesslocknut.png';
import structuralheavynut from '../img/Nuts/structuralheavynut.jpg';
import teenut from '../img/Nuts/teenut.png';
import weldnut from '../img/Nuts/weldnut.png';
import wingnut from '../img/Nuts/wingnut.png';
// =====================================================================
// washers
import countersunkwasher from '../img/Washer/Countersunkfinishingwasher.jpg';
import flatwasher from '../img/Washer/Flatwasher.jpg';
import nylonwasher from '../img/Washer/Nylonwasher.jpg';
import roundmalleablewasher from '../img/Washer/roundmalleablewasher.png';
import shearplatewasher from '../img/Washer/shearplatewasher.png';
import splitlockwasher from '../img/Washer/Splitlockwasher.jpg';
import squarewasher from '../img/Washer/Squarewasher.jpg';
import structuralwasher from '../img/Washer/Structuralwasher 2.jpg';
// ============================================================================

// Rivets
import blindRivet from '../img/Rivet/blind_rivet_pop_rivet.png';
import semiTubularRivet from '../img/Rivet/semi_tubular_rivet.png';
import solidRivet from '../img/Rivet/solid_rivet.png';
// ===============================================================================

// Anchors
import eyeCouplings from '../img/Anchor/Eye_couplings.png';
import sleeveAnchors from '../img/Anchor/Sleeve_anchors.png';
import wedgeAnchors from '../img/Anchor/wedge_anchors.png';
// =================================================================================

// Rods
import singleEndRod from '../img/rods/Single_end_rod.jpeg';
import doubleEndRod from '../img/rods/Double_end_rod.jpeg';
import mirrorStud from '../img/rods/mirrorstud.jpg';
import tieRod from '../img/rods/tierod.jpg';





const allProducts = [

// bolts Data
  {
    id: 1,
    name: "Hex Bolts",
    category: "Bolts",
    image: hexbolt,
    description: "Hex bolts are six-sided fasteners designed for use with a wrench or spanner. Commonly used in construction, heavy machinery, and automotive sectors, they are available in full or partial threading. Manufactured from carbon steel, stainless steel, or alloy steel, they offer excellent strength and durability. Hex bolts are ideal for high-tension applications where reliability is key. They're often paired with hex nuts and washers for secure fastening. Available in metric and imperial sizes, and in grades like 8.8, 10.9, and A2-70."
  },
  {
    id: 2,
    name: "Carriage Bolts",
    category: "Bolts",
    image: Carriagebolt,
    description: "Carriage bolts have a rounded head and a square neck under the head that locks into wood. This prevents the bolt from turning when tightening the nut. They’re commonly used in wooden structures like fences, decks, and furniture. The smooth domed head offers a clean look and prevents tampering. Made from mild or stainless steel, they provide good corrosion resistance. These bolts are ideal for projects where the bolt head will be visible or flush with the surface."
  },
  {
    id: 3,
    name: "Structural Bolts",
    category: "Bolts",
    image: structuralbolt,
    description: "Structural bolts are high-strength fasteners used in steel-to-steel structural connections. They are designed to handle extreme loads and stresses in bridges, buildings, and towers. These bolts are manufactured to standards like ASTM A325 and A490. Typically used with heavy hex nuts and hardened washers, they provide excellent clamping force. Structural bolts are heat-treated for added strength and are available with black oxide or galvanized coatings. They’re engineered for safety-critical applications."
  },
  {
    id: 4,
    name: "Flange Bolts",
    category: "Bolts",
    image: flangebolt,
    description: "Flange bolts feature a wide flange under the head that acts as a built-in washer. This distributes pressure more evenly and reduces the risk of damage to the joined surfaces. Commonly used in automotive, machinery, and industrial applications, they help resist loosening due to vibration. Flange bolts are often serrated for better grip. Available in zinc-plated, hot-dip galvanized, or stainless steel versions. Their design allows quicker and more secure fastening without the need for separate washers."
  },
  {
    id: 5,
    name: "Plow Bolts",
    category: "Bolts",
    image: plowbolt,
    description: "Plow bolts have a flat, countersunk head that sits flush with the surface, making them perfect for machinery that scrapes or plows. The square neck prevents rotation during tightening. Typically used in heavy-duty equipment like bulldozers, snowplows, and road graders. These bolts are heat-treated for strength and abrasion resistance. Available in grades 5 and 8, and often used with locknuts. Their smooth head design helps reduce wear and tear during operation."
  },
  {
    id: 6,
    name: "Step Bolts",
    category: "Bolts",
    image: stepbolt,
    description: "Step bolts are designed for use on utility poles and communication towers where personnel need to climb safely. They feature a wide, round head and coarse threading for secure placement in wood or metal. Step bolts are hot-dip galvanized for corrosion resistance in outdoor conditions. The broad head provides a secure step for climbing technicians. These bolts are installed in a staggered pattern for safety. Designed to meet ANSI and utility industry specifications."
  },
  {
    id: 7,
    name: "Square Head Bolts",
    category: "Bolts",
    image: squareheadbolt,
    description: "Square head bolts offer a traditional look and large bearing surface, making them suitable for industrial, construction, and restoration projects. The square head provides excellent wrench grip and resists stripping. Often used in machinery and vintage equipment, these bolts are also ideal for timber connections. Available in plain steel, zinc-plated, or hot-dip galvanized finishes. The larger head allows for easy installation in tight or blind spaces."
  },
  {
    id: 8,
    name: "Hanger Bolts",
    category: "Bolts",
    image: hangerbolt,
    description: "Hanger bolts have wood screw threads on one end and machine threads on the other. They're designed to fasten metal parts to wood without the need for nuts on both sides. Common in furniture assembly, overhead piping, and electrical work. The wood-threaded end grips into timber, while the machine end allows for nut tightening. Typically made of zinc-coated or stainless steel for corrosion resistance. Installed using a driver or double-nut method."
  },
  {
    id: 9,
    name: "Stove Bolts",
    category: "Bolts",
    image: stovebolt,
    description: "Stove bolts have slotted or Phillips heads and machine screw threads, used in light-duty mechanical assemblies. Common in household appliances, machinery casings, and metal fabrication. Available with flat, round, or oval heads for different finishing needs. Stove bolts are usually paired with nuts and washers. Made from low-carbon steel and available in zinc-plated or black oxide finishes. Easy to install with a screwdriver, making them ideal for general-purpose fastening."
  },
  {
    id: 10,
    name: "Timber Bolts",
    category: "Bolts",
    image: timberbolt,
    description: "Timber bolts, also known as dome head or mushroom head bolts, are used for heavy wood connections. They feature a large, rounded head with fin-like nubs under the head to prevent rotation. Common in boardwalks, bridges, retaining walls, and marine structures. Made from galvanized or stainless steel for long-term durability. They offer a clean finish and strong holding power. Installed by driving into pre-drilled holes with washers and nuts."
  },
  {
    id: 11,
    name: "Toggle Bolts",
    category: "Bolts",
    image: togglebolt,
    description: "Toggle bolts are specialty fasteners used to anchor objects to hollow walls like drywall or plaster. They include spring-loaded metal wings that open behind the wall after insertion. Excellent for supporting heavy items such as shelves, TV brackets, or cabinets. The wings expand and grip the backside of the wall, spreading the load. Available in different lengths and sizes for various wall thicknesses. Toggle bolts are a reliable solution for non-structural wall anchoring."
  },
  {
  id: 12,
  name: "U-Bolts",
  category: "Bolts",
  image: ubolt,
  description: "U-bolts are U-shaped fasteners with threaded ends, used to support and secure pipes, tubes, or round objects to surfaces. Commonly found in plumbing, automotive, and construction applications. They wrap around the object and fasten it with nuts on both ends. U-bolts are available in various diameters and materials like stainless steel, galvanized steel, or zinc-plated finishes to resist corrosion and handle heavy loads."
},
{
  id: 13,
  name: "J-Bolts",
  category: "Bolts",
  image: jbolt,
  description: "J-bolts are J-shaped anchor bolts used to secure structures to concrete. One end is embedded into the concrete foundation, while the threaded end is used to attach metal frameworks, poles, or equipment. They are commonly used in construction, especially for securing structural steel columns and machinery bases. J-bolts are strong, durable, and come in various lengths, diameters, and materials depending on the load and environment."
},

// ====================================================================================================================

// Screw Data
  {
  id: 14,
  name: "Drywall Screws",
  category: "Screws",
  image: drywallscrew,
  description: "Drywall screws are designed specifically for securing drywall sheets to wood or metal studs. They have a bugle-shaped head and sharp point for easy penetration. Typically made of hardened steel and coated to resist rust. The fine or coarse threads vary depending on the type of stud used. They provide a flush finish without damaging the drywall surface. Used extensively in interior construction and renovation projects."
},
{
  id: 15,
  name: "Self Drilling Screws",
  category: "Screws",
  image: selfdrillingscrew,
  description: "Self-drilling screws feature a drill-like tip, eliminating the need for pre-drilling. Ideal for fastening metal to metal or metal to wood in roofing, HVAC, and light steel framing. These screws save time and reduce tool wear. They’re often made of case-hardened steel with corrosion-resistant coatings like zinc or stainless. Available in hex, pan, or wafer head styles. Common in both industrial and home improvement applications."
},
{
  id: 16,
  name: "Self Tapping Screws",
  category: "Screws",
  image: selftappingscrew,
  description: "Self-tapping screws cut their own threads into materials like plastic, metal, or wood during installation. Perfect for sheet metal work, ducting, and electrical applications. They offer a tight, secure hold without nuts or pre-threaded holes. Available in pointed or blunt tips depending on use case. These screws reduce vibration loosening and offer long-term fastening strength. Offered in Phillips, slotted, and hex head varieties."
},
{
  id: 17,
  name: "Sheet Metal Screws",
  category: "Screws",
  image: sheetmetalscrew,
  description: "Sheet metal screws are sharp-threaded fasteners designed for joining metal sheets to other materials. Their fully threaded shank provides maximum grip and holding power. Often used in HVAC systems, automotive panels, and metal enclosures. Made from stainless steel or carbon steel with coatings like zinc plating. Available in various head styles: pan, flat, or hex. Suitable for thin materials where thread engagement is essential."
},
{
  id: 18,
  name: "Wood Screws",
  category: "Screws",
  image: woodscrew,
  description: "Wood screws are specially designed for use in timber and wood-based materials. They feature a tapered shank and coarse threads for solid grip and reduced splitting. Typically used in cabinetry, furniture, flooring, and framing. They often come with flat, oval, or round heads for different finishes. Available in brass, steel, and stainless options. Pre-drilling is recommended for hardwoods to avoid cracks and ensure proper fit."
},
// =====================================================================================

// Nuts Data
{
  id: 19,
  name: "Acorn Nut",
  category: "Nuts",
  image: acornnut,
  description: "Acorn nuts, also known as cap nuts, have a domed top that covers exposed bolt threads for a finished look. They are commonly used in automotive and furniture applications to protect against injury or corrosion. Made from brass, steel, or stainless steel. Ideal for applications where aesthetics and safety matter. Available in standard and high-profile designs. Prevent thread damage and improve appearance."
},
{
  id: 20,
  name: "All Metal Locknut",
  category: "Nuts",
  image: allmetallocknut,
  description: "All-metal locknuts are one-piece, high-strength nuts that resist loosening from vibration or torque. They contain no plastic inserts and are ideal for high-heat environments. Common in automotive, aerospace, and heavy machinery. Made from stainless or carbon steel. These nuts maintain clamping force under harsh conditions. Reusable and available in prevailing torque or elliptical styles."
},
{
  id: 21,
  name: "Axle Nut",
  category: "Nuts",
  image: axlenut,
  description: "Axle nuts secure wheels and hubs to axles in vehicles and machinery. Designed to withstand heavy loads and rotational stress. Often used with washers, cotter pins, or locking clips. Available in slotted or castellated styles for safety locking. Made from high-grade steel for strength and durability. Common in automotive repair and industrial equipment."
},
{
  id: 22,
  name: "Coupling Nut",
  category: "Nuts",
  image: couplingnut,
  description: "Coupling nuts are elongated hex nuts used to join two male-threaded rods. Ideal for extending threaded rods in construction and HVAC systems. Available in plain, zinc-plated, and stainless finishes. Common in suspension systems and bracing. Provides a secure, long connection without welding. Sizes range from M6 to M24 and more."
},
{
  id: 23,
  name: "Finished Hex Nut",
  category: "Nuts",
  image: finishedhexnut,
  description: "Finished hex nuts are standard nuts with chamfered corners and a clean finish. Used in general-purpose fastening with bolts, screws, and studs. Available in metric and imperial sizes. Manufactured from steel, brass, or stainless steel. Provides reliable clamping force in construction, machinery, and household applications. Often paired with flat or lock washers."
},
{
  id: 24,
  name: "Machine Screw Nut",
  category: "Nuts",
  image: machinescrewnut,
  description: "Machine screw nuts are small, low-profile nuts designed for machine screws. Common in electronics, enclosures, and household devices. Usually square or hex-shaped, made from brass or steel. Provides reliable grip in thin or soft materials. Used in light-duty fastening where precision is required. Compatible with #4 to #10 screw sizes."
},
{
  id: 25,
  name: "Metric Flange Nut",
  category: "Nuts",
  image: metricflangenut,
  description: "Metric flange nuts have a wide flange base that distributes pressure, reducing the need for washers. Prevents loosening due to vibration. Common in automotive, machinery, and structural assembly. Typically serrated underneath for better grip. Made from zinc-plated or stainless steel. Available in M5–M20 sizes."
},
{
  id: 26,
  name: "Nyloc Insert Locknut",
  category: "Nuts",
  image: nylocinsertlocknut,
  description: "Nyloc nuts feature a nylon insert that grips bolt threads to prevent loosening. Ideal for applications subject to movement or vibration. Not suitable for high heat as the nylon may degrade. Common in mechanical, aerospace, and automotive industries. Single-use recommended for best performance. Available in metric and inch sizes."
},
{
  id: 27,
  name: "Slotted Hex Nut",
  category: "Nuts",
  image: slottedhexnut,
  description: "Slotted hex nuts are used with cotter pins to prevent loosening. Common in automotive axles, machinery, and agricultural equipment. Slots align with the bolt hole to secure with a pin. Typically made from carbon steel or stainless steel. Allows for mechanical locking in safety-critical joints. Available in UNC/UNF or metric standards."
},
{
  id: 28,
  name: "Speed Nut",
  category: "Nuts",
  image: speednut,
  description: "Speed nuts are spring steel fasteners that grip without requiring a tapped hole or tool. Common in dashboards, electronics, and trim panels. Snap onto a stud or panel and hold securely with tension. No separate washer or lock required. Lightweight, quick to install, and reusable. Excellent for low-torque applications."
},
{
  id: 29,
  name: "Square Nut",
  category: "Nuts",
  image: squarenut,
  description: "Square nuts have four sides for improved grip and a vintage appearance. Often used in furniture restoration, railway, and heavy equipment. Provide more surface contact than hex nuts. Best used with flat washers. Typically zinc-plated or plain finish. Easy to install with adjustable or open-end wrenches."
},
{
  id: 30,
  name: "Stainless Hex Nut",
  category: "Nuts",
  image: stainlesshexnut,
  description: "Stainless hex nuts resist rust and corrosion, ideal for outdoor and marine environments. Used in plumbing, construction, and food processing. Compatible with stainless bolts and threaded rods. Provides long-term fastening without degradation. Available in A2 and A4 grades. Suitable for metric and inch thread systems."
},
{
  id: 31,
  name: "Stainless Locknut",
  category: "Nuts",
  image: stainlesslocknut,
  description: "Stainless locknuts are corrosion-resistant nuts designed to resist loosening from vibration. Suitable for outdoor and corrosive environments. Available with nylon insert or all-metal locking styles. Common in offshore, food-grade, and chemical applications. Provides strong, maintenance-free connections. Reusable depending on type."
},
{
  id: 32,
  name: "Structural Heavy Hex Nut",
  category: "Nuts",
  image: structuralheavynut,
  description: "Structural heavy hex nuts are larger and thicker than standard hex nuts. Designed for high-strength structural connections in bridges, buildings, and towers. Meet ASTM A563 or A194 standards. Used with structural bolts and hardened washers. Typically black oxide or hot-dip galvanized. Offers maximum durability and clamping force."
},
{
  id: 33,
  name: "Tee Nut",
  category: "Nuts",
  image: teenut,
  description: "Tee nuts are inserted into wood and hammered in to provide a strong threaded anchor. Used in furniture, climbing walls, and wood fixtures. Flanged base with prongs prevents rotation. Provides a flush, embedded finish. Available in zinc-plated or stainless. Compatible with machine bolts or threaded rods."
},
{
  id: 34,
  name: "Weld Nut",
  category: "Nuts",
  image: weldnut,
  description: "Weld nuts are designed to be permanently welded onto another metal surface. Ideal for creating captive threaded holes. Common in automotive frames, appliances, and heavy machinery. Available in round or hex base. Ensures long-term, vibration-resistant connections. Made from weldable steel with smooth or projection weld faces."
},
{
  id: 35,
  name: "Wing Nut",
  category: "Nuts",
  image: wingnut,
  description: "Wing nuts feature two large 'wings' for easy hand tightening and removal. Ideal for tool-free adjustments or temporary assemblies. Common in DIY projects, light fixtures, and furniture. Made from brass, steel, or stainless. Allows quick tightening without tools. Not recommended for high-vibration or heavy-load applications."
},
// =======================================================================

// washers data
{
  id: 36,
  name: "Countersunk Finishing Washer",
  category: "Washers",
  image: countersunkwasher,
  description: "Countersunk finishing washers are designed to work with flat or oval head screws. They create a flush, clean finish while distributing load evenly. Commonly used in decorative applications like cabinetry and woodwork. Made from brass, stainless steel, or zinc-plated steel. Prevents screw pull-through on soft materials. Enhances appearance while adding structural support."
},
{
  id: 37,
  name: "Flat Washer",
  category: "Washers",
  image: flatwasher,
  description: "Flat washers are the most common type, used to distribute load and reduce surface wear. Placed under nuts or bolt heads to prevent damage to surfaces. Available in various diameters and thicknesses. Made from steel, stainless steel, brass, or nylon. Ideal for use in plumbing, machinery, and automotive applications. Helps prevent fastener loosening due to vibration."
},
{
  id: 38,
  name: "Nylon Washer",
  category: "Washers",
  image: nylonwasher,
  description: "Nylon washers are non-metallic, corrosion-resistant components used in electrical and plumbing applications. They offer insulation, reduce noise, and dampen vibration. Lightweight and chemically resistant, ideal for moisture-prone or sensitive environments. Not recommended for high-load applications. Used in electronics, aerospace, and home appliances."
},
{
  id: 39,
  name: "Round Malleable Washer",
  category: "Washers",
  image: roundmalleablewasher,
  description: "Round malleable washers are heavy-duty washers used in timber construction and pole-line hardware. Made from malleable cast iron for extra strength. They provide a broad bearing surface, reducing embedment into wood. Commonly used with anchor bolts in utility structures. Galvanized versions are available for outdoor durability."
},
{
  id: 40,
  name: "Shear Plate Washer",
  category: "Washers",
  image: shearplatewasher,
  description: "Shear plate washers are embedded in wood and used in timber-to-steel connections. They provide high resistance to shear forces in structural assemblies. Often seen in bridges, utility poles, and timber construction. Made from heat-treated steel and hot-dip galvanized. Installed into pre-cut holes with hydraulic presses or mallets. Improves joint performance significantly."
},
{
  id: 41,
  name: "Split Lock Washer",
  category: "Washers",
  image: splitlockwasher,
  description: "Split lock washers are helical-shaped washers that apply spring tension to prevent loosening under vibration. Used under bolt heads or nuts in machinery and automotive assemblies. They provide moderate locking action and are reusable. Made from hardened carbon steel, stainless steel, or spring steel. Ideal for dynamic loads and rotating equipment."
},
{
  id: 42,
  name: "Square Washer",
  category: "Washers",
  image: squarewasher,
  description: "Square washers have a larger surface area than round ones and prevent pull-through in soft materials like wood. Commonly used in construction, concrete forms, and utility pole installations. Provides extra hold with a flat, wide face. Available in hot-dip galvanized or stainless steel. Also used as spacers or shims in heavy machinery."
},
{
  id: 43,
  name: "Structural Washer",
  category: "Washers",
  image: structuralwasher,
  description: "Structural washers are thick, heavy-duty washers used in steel structures and high-load bolted connections. They meet ASTM F436 standards and are typically paired with structural bolts. Made from hardened steel and often hot-dip galvanized for corrosion resistance. Ensures uniform load distribution in critical joints. Used in bridges, towers, and industrial buildings."
},
// =========================================================================

// rivets data
{
  id: 44,
  name: "Blind Rivet (Pop Rivet)",
  category: "Rivets",
  image: blindRivet,
  description: "Blind rivets, also known as pop rivets, are designed for situations where only one side of the material is accessible. They consist of a rivet body and a mandrel. When installed, the mandrel is pulled through the body to expand and clamp the materials. These rivets are widely used in sheet metal work, automotive manufacturing, and electronic enclosures. They provide fast and efficient installation with minimal tools. Ideal for joining thin materials like aluminum, steel, or plastic. Blind rivets offer consistent, vibration-resistant connections without the need for welding."
},
{
  id: 45,
  name: "Semi-Tubular Rivet",
  category: "Rivets",
  image: semiTubularRivet,
  description: "Semi-tubular rivets have a partial hole at the end of the shank, requiring less force to install compared to solid rivets. This makes them suitable for high-volume assembly operations. When set, the tubular end rolls over and expands to hold materials together. Commonly used in brakes, lighting, electronics, and HVAC systems. They offer strong, semi-permanent fastening with smooth finishes on both sides. These rivets are often used where mechanical performance and appearance are both important. Available in various materials like brass, steel, and aluminum."
},
{
  id: 46,
  name: "Solid Rivet",
  category: "Rivets",
  image: solidRivet,
  description: "Solid rivets are one of the strongest and most reliable types of permanent fasteners. They consist of a single solid piece of metal and require hammering or a rivet gun to deform the tail and form a head. These rivets are extensively used in structural applications like bridges, aircraft, railways, and heavy machinery. They provide exceptional shear and tensile strength. Installation typically requires access to both sides of the material. Solid rivets offer excellent durability, vibration resistance, and long-term performance in high-stress environments."
},
// =================================================================================

// Anchors data
{
  id: 47,
  name: "Eye Couplings",
  category: "Anchors",
  image: eyeCouplings,
  description: "Eye couplings are anchor fasteners with a looped head used for tying, hanging, or supporting loads. They are commonly installed in concrete, brick, or masonry to suspend fixtures such as cables, chains, or signage. The eye shape allows for easy attachment of ropes or wires. Made from heavy-duty materials like stainless steel or zinc-plated steel for corrosion resistance. Eye couplings are widely used in electrical, plumbing, and industrial hanging systems. Installation requires a pre-drilled hole and a compatible anchor insert for secure mounting."
},
{
  id: 48,
  name: "Sleeve Anchors",
  category: "Anchors",
  image: sleeveAnchors,
  description: "Sleeve anchors are versatile expansion anchors used to fasten objects into concrete, brick, or block. They consist of a threaded bolt and an expansion sleeve that grips the base material when tightened. Suitable for medium-duty loads like frames, brackets, shelves, and machinery. Installation is quick using a drill and wrench, making them ideal for both temporary and permanent applications. Available in various diameters and lengths to match load requirements. Sleeve anchors offer excellent holding power and are a preferred choice in construction and renovation work."
},
{
  id: 49,
  name: "Wedge Anchors",
  category: "Anchors",
  image: wedgeAnchors,
  description: "Wedge anchors are heavy-duty mechanical anchors used for securing structural and non-structural elements to concrete. They consist of a steel bolt with a wedge-shaped clip that expands once inserted into a drilled hole. Known for their high load-bearing capacity and vibration resistance, wedge anchors are widely used in industrial installations, safety barriers, racking systems, and machinery bases. Once installed, they create a permanent and extremely secure hold. Available in stainless or zinc-coated steel for enhanced durability in harsh environments."
},

// Rods data
{
  id: 50,
  name: "Single-End Rod",
  category: "Stud & Rods",
  image: singleEndRod,
  description: "Single-end rods feature threading on one end and a plain shank on the other. Commonly used for embedment into concrete or anchoring into walls or structures, these rods provide reliable support where only one side of the connection is accessible. They are essential in construction, foundation supports, and anchoring machinery. The plain end can be bent or welded based on custom requirements. Manufactured from carbon steel, stainless steel, or galvanized materials for enhanced strength and corrosion resistance in demanding environments."
},
{
  id: 51,
  name: "Double-End Rod",
  category: "Stud & Rods",
  image: doubleEndRod,
  description: "Double-end rods, also known as stud bolts, are threaded rods with threads on both ends and an unthreaded shank in the middle. They are primarily used for bolting flanges or equipment where full-threaded rods aren't required. These rods provide strong clamping force and precise alignment in mechanical and structural assemblies. Double-end rods are ideal for high-temperature and high-pressure applications in industries like petrochemical, power generation, and heavy equipment. Available in stainless steel, carbon steel, and alloy grades with custom lengths and threading options."
},
{
  id: 52,
  name: "Tie Rod",
  category: "Stud & Rods",
  image: tieRod,
  description: "Tie rods are structural tension components used to reinforce and stabilize frameworks, facades, and heavy-duty equipment. Designed to carry tensile loads, they connect opposite ends of a structure and prevent deformation or separation. Tie rods are widely used in bridges, steel structures, pre-engineered buildings, and marine applications. Available in various diameters and thread configurations, they are manufactured using high-tensile steel, stainless steel, or hot-dip galvanized finishes for superior load performance and weather resistance."
},
{
  id: 53,
  name: "Mirror Stud",
  "category": "Stud & Rods",
  image: mirrorStud,
  description: "Mirror studs are precision-engineered mounting fasteners used to fix mirrors, glass panels, signage, and decorative elements to walls in a secure and visually appealing manner. Manufactured from high-quality stainless steel with a brushed or polished finish, they offer excellent corrosion resistance and long-term durability in both indoor and outdoor environments. Each stud typically consists of a cylindrical barrel, a threaded cap, and rubber or silicone gaskets that protect the glass from damage and absorb vibrations. Mirror studs are widely used in commercial interiors, washrooms, hotels, retail showrooms, elevators, and architectural applications where clean aesthetics and reliable performance are essential. Easy to install and maintain, they provide a modern floating appearance while ensuring the mirror remains firmly anchored."
}

];

export default allProducts;
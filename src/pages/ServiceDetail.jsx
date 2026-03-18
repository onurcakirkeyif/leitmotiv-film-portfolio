import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const RED = "#B85040";
const BLUE = "#5B7FA6";

const serviceData = {
  "commercial-films": {
    category: "Production", categoryColor: RED,
    title: "Commercial Films",
    intro: "High-impact commercials that make your brand unforgettable.",
    body: `Whether you're launching a new product, building brand awareness, or reaching a global audience, our commercial film production services deliver visually stunning and strategically crafted content that truly resonates with viewers.

Based in Istanbul, we combine Turkey's incredible diversity of landscapes — from ancient ruins to cosmopolitan cityscapes, turquoise coastlines to dramatic mountain terrain — with a seasoned production team that is fully fluent in international broadcast standards.

We handle every aspect of your commercial, from pre-production planning, location scouting, casting, and crew assembly through to full on-set management and post-production coordination. Our team has produced commercials for global brands including Mango, Citroën, Hyundai, Coca-Cola, and Decathlon, consistently delivering broadcast-quality results on time and within budget.

Whether you need a single 30-second spot or a complete multi-platform campaign, we bring the same level of professionalism and creative passion to every single frame.`,
    highlights: ["Full-service production management", "Global broadcast standards", "Diverse Turkish locations", "International brand experience"],
  },
  "feature-films-short-films": {
    category: "Production", categoryColor: RED,
    title: "Feature Films & Short Films",
    intro: "Bringing cinematic visions to life in one of the world's most compelling filming destinations.",
    body: `Turkey's rich history, breathtaking geography, and vibrant culture make it one of cinema's most coveted filming destinations. From Ottoman palaces and ancient amphitheatres to the modern streets of Istanbul and remote Anatolian landscapes, the creative possibilities are truly limitless.

Our team provides comprehensive production services for both feature-length and short film projects, supporting international directors and producers at every stage of the process. We manage everything from the initial location recce and permitting through to final day-of-shoot logistics, so your creative team can stay fully focused on the story.

We have supported documentary features, drama productions, and artistic short films for broadcasters and independent filmmakers from across Europe, the United States, and beyond. Our deep knowledge of Turkish locations, regulations, and local talent pools ensures that your production runs smoothly from the first to the last day of principal photography.`,
    highlights: ["Location recce & permitting", "Drama & documentary experience", "Local & international crew", "Full logistical support"],
  },
  "tv-programs": {
    category: "Production", categoryColor: RED,
    title: "TV Programs",
    intro: "End-to-end production support for television content shot in Turkey.",
    body: `From prime-time travel shows and news magazine programmes to reality series and lifestyle content, our team has the experience and infrastructure to support TV productions of any scale shooting in Turkey.

We work closely with international broadcasters and production companies to ensure their programmes meet the highest technical and editorial standards. Our services include full fixing and production management, coordinating with local authorities for permissions, sourcing contributors and on-screen talent, arranging facilities, and managing all crews and logistics throughout the shoot.

Past television clients include Arte, BBC, NPO3, Canal+, Deutsche Welle, and Channel 9, with programmes ranging from cultural documentaries and investigative journalism to travel entertainment and reality formats. We understand the pace and pressures of television production, and we are built to deliver reliably under deadline.`,
    highlights: ["Broadcaster-grade standards", "Fixing & journalism support", "Reality & entertainment formats", "Nationwide shoot coverage"],
  },
  "documentaries": {
    category: "Production", categoryColor: RED,
    title: "Documentaries",
    intro: "Compelling documentary production rooted in authentic storytelling.",
    body: `Turkey is a country of extraordinary stories — sitting at the crossroads of Europe and Asia, ancient and modern, secular and spiritual. It is a place that documentary filmmakers return to time and again, and our team is uniquely positioned to help you find those stories and bring them to the screen.

We provide full production support for documentary projects, from initial research and contributor coordination through to shoot logistics, on-camera interviews, and b-roll acquisition. Our fixers and producers have deep knowledge of Turkish society, politics, culture, and geography, enabling a level of access that many international teams would find very difficult to achieve on their own.

We have worked on documentaries for BBC, Arte, Vice, Financial Times, CNN, and the Wall Street Journal, covering topics ranging from medicine and migration to history, food culture, and environmental issues. We are passionate about documentary storytelling and committed to giving every project the depth and authenticity it deserves.`,
    highlights: ["Research & contributor access", "Sensitive topic experience", "Nationwide documentary coverage", "Bilingual production team"],
  },
  "reality-shows": {
    category: "Production", categoryColor: RED,
    title: "Reality Shows",
    intro: "Fast-paced, high-energy reality production in Turkey's most dynamic settings.",
    body: `Reality television demands speed, flexibility, and a production team that can handle the unexpected at every turn. Our crew thrives in this fast-moving environment, delivering high-quality content even under the most demanding shooting conditions.

Turkey offers an incredible variety of environments for reality formats — from bustling bazaars and dramatic landscapes to luxury resorts, historic cultural landmarks, and vibrant city life. Whether you're producing an adventure series, a dating show, a cooking competition, or an elimination format, we have the logistical expertise and local knowledge to make it work.

We have supported major international reality productions including Endemol Shine's Rush series, and our team is highly experienced in managing large multi-camera shoots, coordinating cast transportation, and maintaining production momentum across complex locations and tight schedules.`,
    highlights: ["Multi-camera production", "Large-scale logistics", "Fast-turnaround capability", "Diverse location formats"],
  },
  "corporate-films": {
    category: "Production", categoryColor: RED,
    title: "Corporate Films",
    intro: "Professional corporate video that communicates your brand story with clarity and impact.",
    body: `A well-crafted corporate film can transform the way clients, investors, and employees perceive your organisation. Whether you need an internal communications video, an investor presentation film, a brand story documentary, or a product showcase, we produce corporate content that is polished, purposeful, and highly persuasive.

Our team understands the specific demands of corporate video — clear and direct messaging, tight timelines, professional execution, and content that works seamlessly across multiple platforms. We work with multinational corporations, Turkish businesses, and international organisations operating in Turkey to create content that consistently meets global standards.

We handle every stage of corporate production in-house, from scripting and storyboarding through to casting, filming, and post-production coordination. Our work with leading clients including Microsoft and Shopify demonstrates our ability to deliver world-class corporate content on every project.`,
    highlights: ["Brand & investor films", "Internal communications", "Product showcases", "Multi-platform content"],
  },
  "music-videos": {
    category: "Production", categoryColor: RED,
    title: "Music Videos",
    intro: "Visually arresting music videos produced with cinematic precision.",
    body: `Music videos demand creative ambition, technical skill, and the ability to execute a distinctive visual concept within tight budgets and demanding schedules. Our team delivers on all fronts, producing music videos that stand out in an increasingly crowded and competitive landscape.

Istanbul and Turkey's diverse locations provide music video directors with an extraordinary visual palette — from rooftop views of the Bosphorus and labyrinthine old-city streets to vast natural landscapes and striking modernist architecture. We know these locations intimately and can facilitate access and secure permits quickly and efficiently.

We have produced music videos for international and Turkish artists alike, working closely with directors to realise ambitious concepts with great precision. Our credits include work for Coca-Cola / Coke Studio and Stone Music, among others. Whether you are producing an intimate performance piece or a large-scale narrative video, we have the experienced crew and the know-how to make it happen.`,
    highlights: ["Location & permit expertise", "Narrative & performance formats", "International artist experience", "Creative crew collaboration"],
  },
  "social-media-video-production": {
    category: "Production", categoryColor: RED,
    title: "Social Media Video Production",
    intro: "Platform-native video content engineered for engagement.",
    body: `Social media has fundamentally transformed the way brands communicate, and video sits at the heart of every successful digital strategy. Our social media video production service is designed for brands, agencies, and content creators who need high-quality, platform-optimised video content produced both efficiently and consistently.

We produce content for Instagram, TikTok, YouTube, LinkedIn, and beyond — from short-form reels and stories through to longer branded content series. Our team understands the nuances of each platform, from aspect ratios and pacing to tone and cultural resonance, ensuring your content performs as well as it looks.

Based in Istanbul, we can leverage Turkey's visually rich environment to create content that is distinctive, aspirational, and authentically compelling. We work quickly and collaboratively, making us the ideal long-term partner for campaigns that require regular, high-quality video output.`,
    highlights: ["Multi-platform optimisation", "Short & long-form content", "Fast turnaround production", "Brand & agency partnerships"],
  },
  "photography": {
    category: "Production", categoryColor: RED,
    title: "Photography",
    intro: "Compelling still photography from Turkey's most extraordinary locations.",
    body: `Alongside our video production work, we offer professional photography services for commercial, editorial, and documentary projects throughout Turkey. Whether you need campaign imagery for a fashion brand, editorial photographs for a magazine feature, or documentary stills to complement a film project, our photography team delivers images of the very highest quality.

Turkey's visual richness — its ancient architecture, diverse landscapes, and vibrant street life — provides a remarkable and endlessly varied backdrop for photography of all kinds. We have produced photography for international fashion and lifestyle brands including Mango and Alo Yoga, as well as editorial shoots for a range of international publications.

Our photography services come with full production support as standard: location scouting, permitting, local talent sourcing, styling coordination, and equipment provision, ensuring that every shoot runs smoothly from the very first test shot through to the final delivery.`,
    highlights: ["Commercial & editorial photography", "Fashion & lifestyle shoots", "Documentary still photography", "Full production support"],
  },
  "drone-filming": {
    category: "Production", categoryColor: RED,
    title: "Drone Filming",
    intro: "Breathtaking aerial cinematography over Turkey's most spectacular landscapes.",
    body: `Drone footage has the power to transform a production — providing scale, context, and visual drama that is simply impossible to achieve from the ground. Our licensed drone operators and state-of-the-art aerial equipment deliver cinematic aerial content that elevates the quality of every project we work on.

Turkey is one of the world's most rewarding destinations for aerial filming, offering everything from the iconic skyline of Istanbul to the otherworldly landscapes of Cappadocia, the turquoise waters of the Aegean and Mediterranean coasts, and the vast open steppes of Central Anatolia. Our team has extensive experience obtaining the necessary permits and coordinating with Turkish aviation authorities to ensure fully legal, safe, and highly efficient aerial operations.

We operate professional-grade drone systems capable of capturing ultra-high-definition footage for broadcast, commercial, and cinematic applications. Our drone operators work in close collaboration with directors of photography to integrate aerial sequences naturally and seamlessly into the wider production.`,
    highlights: ["Licensed & fully permitted operations", "Ultra-HD aerial footage", "Broadcast & commercial grade", "Nationwide aerial coverage"],
  },
  "location-scouting-permits": {
    category: "Production Support", categoryColor: BLUE,
    title: "Location Scouting & Permits",
    intro: "We find the perfect filming locations and handle all necessary permits so you can focus on the creative process.",
    body: `Finding the right location can define the entire look and feel of a production. Our location scouting team has extensive knowledge of Turkey's most photogenic settings — from the ancient streets of Istanbul's historic peninsula and the surreal landscapes of Cappadocia to the dramatic coastlines of the Aegean and the remote wilderness of Eastern Anatolia.

We work closely with directors and cinematographers to identify locations that genuinely serve the creative vision, conducting thorough recces and providing comprehensive location reports complete with photography, logistical assessments, and full permit information.

Beyond scouting, we handle the entire permitting process on your behalf — liaising directly with municipal authorities, heritage bodies, national parks, and private landowners to secure every permission your production requires.`,
    highlights: ["Nationwide location database", "Comprehensive location reports", "Full permit management", "Authority liaison & negotiation"],
  },
  "casting-crew": {
    category: "Production Support", categoryColor: BLUE,
    title: "Casting & Crew",
    intro: "From local talent to experienced film crews, we connect you with the right professionals.",
    body: `A production is only ever as strong as the people behind it. Our extensive network of Turkish and internationally experienced crew members ensures that we can assemble exactly the right team for any project, in any genre, and at any scale.

Our crew roster includes directors of photography, camera operators, sound recordists, gaffers, grips, art directors, stylists, make-up artists, and production assistants — all carefully vetted for their professionalism and their hands-on experience working with international productions.

For casting, we work alongside experienced local casting directors and maintain strong, established relationships with Turkey's wider acting community, enabling us to source the right on-screen talent quickly and very efficiently.`,
    highlights: ["Vetted professional crew network", "Local & international talent", "All genres & scales", "Full casting management"],
  },
  "transportation-accommodation": {
    category: "Production Support", categoryColor: BLUE,
    title: "Transportation & Accommodation",
    intro: "We organise transportation and comfortable accommodation to ensure a smooth and efficient production.",
    body: `Logistics can make or break any production. Our transportation and accommodation management service ensures that your entire team travels safely, efficiently, and comfortably throughout their time in Turkey.

We coordinate all ground transportation — from airport transfers and unit base vehicles to equipment trucks and multi-vehicle convoys for complex location shoots across the country. Our driver network is highly experienced in production work and understands the demands of early call times, long shooting days, and rapid location changes.

For accommodation, we source and negotiate the best available options for your team — whether that is a centrally located Istanbul hotel for a city-based shoot or a carefully selected collection of boutique properties near a more remote location.`,
    highlights: ["Airport & unit base transfers", "Multi-vehicle convoy coordination", "Budget & boutique accommodation", "Nationwide coverage"],
  },
  "production-office-setup": {
    category: "Production Support", categoryColor: BLUE,
    title: "Production Office Setup",
    intro: "We provide fully equipped production offices with everything your team needs.",
    body: `An efficient production office is the nerve centre of any major project. We source, set up, and fully manage equipped production office facilities tailored precisely to the scale and duration of your production.

Our production office setups include high-speed internet connectivity, printing and scanning facilities, production desks and editing workstations, secure equipment storage, and dedicated catering and kitchen facilities. We can establish offices in Istanbul or in regional locations across Turkey, depending on the needs of your shooting schedule.

For productions requiring a longer-term presence in Turkey, we can also assist with the establishment of a local production entity, ensuring full compliance with all Turkish business and broadcasting regulations.`,
    highlights: ["High-speed connectivity", "Equipped workstations", "Istanbul & regional locations", "Local entity setup assistance"],
  },
  "post-production-coordination": {
    category: "Production Support", categoryColor: BLUE,
    title: "Post-Production Coordination",
    intro: "From editing to visual effects, we help coordinate every stage of the post-production process.",
    body: `A great shoot is only ever the beginning. Our post-production coordination service ensures that the transition from set to final delivery is as smooth and efficient as possible, whether your post work is being completed in Turkey or at a facility abroad.

We manage the organisation and delivery of camera and audio dailies, coordinate directly with your post-production supervisor and editor, liaise with local post-production facilities where required, and assist with the management of VFX, colour grading, and sound design briefs throughout the process.

For productions completing post in Turkey, we have well-established relationships with Istanbul's leading post-production houses, offering a full range of services including offline and online editing, colour grading, visual effects, and audio post.`,
    highlights: ["Dailies management & delivery", "Post facility liaison", "VFX & colour coordination", "Delivery deadline management"],
  },
  "local-vendors-catering": {
    category: "Production Support", categoryColor: BLUE,
    title: "Local Vendors & Catering",
    intro: "Whether you need props, equipment, or catering, we connect you with the best local suppliers.",
    body: `The quality of your on-set vendors can have a very significant impact on both the production experience and the quality of the final product. We maintain a carefully curated network of trusted local suppliers across Turkey, covering virtually everything your production could need.

For props and set dressing, we work with experienced art directors and prop houses to source authentic Turkish and international items that best serve your production design. For specialist equipment, we have long-established relationships with Turkey's leading rental houses.

Our catering partnerships ensure your crew is fed well throughout every single shooting day, with options ranging from local Turkish cuisine to international menus, all adapted to dietary requirements and to crew sizes from intimate shoots through to large-scale multi-unit productions.`,
    highlights: ["Props & art department sourcing", "Equipment rental coordination", "Professional crew catering", "Dietary requirement management"],
  },
  "health-safety": {
    category: "Production Support", categoryColor: BLUE,
    title: "Health & Safety",
    intro: "We ensure a safe working environment with on-set medics and comprehensive safety protocols.",
    body: `The safety of your cast and crew is our absolute top priority. We implement comprehensive health and safety protocols on every single production we support, carefully adapted to the specific risks and requirements of each individual project.

Our health and safety services include the provision of qualified on-set medics and first aiders, detailed risk assessments for all locations and activities, coordination of safety equipment and procedures for stunts and aerial work, and full compliance with Turkish workplace safety legislation.

For international productions, we translate and implement the health and safety standards of the commissioning broadcaster or studio, ensuring that your production fully meets the requirements of your insurance provider and your organisation's duty of care obligations.`,
    highlights: ["On-set medics & first aiders", "Full risk assessments", "Stunt & aerial safety protocols", "International safety standard compliance"],
  },
  "subsidies-grants": {
    category: "Production Support", categoryColor: BLUE,
    title: "Subsidies & Grants",
    intro: "We assist productions in accessing local incentives to maximise your production budget.",
    body: `Turkey offers a wide range of financial incentives for international productions, and navigating these opportunities successfully requires specialist knowledge and well-established relationships with the relevant authorities. Our team has the expertise to help you identify and access the subsidies and grants that your production may be eligible for.

We assist with applications to the Turkish Ministry of Culture and Tourism's international co-production and incentive schemes, as well as regional filming incentives offered by local municipalities across the country. We advise on the structural and budgetary requirements for eligibility and manage the entire application process on your behalf.

Maximising your production's access to available local incentives can make a very significant difference to your overall budget, and our expert guidance ensures that you don't leave any money on the table.`,
    highlights: ["Ministry incentive applications", "Regional filming subsidies", "Co-production scheme guidance", "Budget maximisation strategy"],
  },
  "equipment-technical-support": {
    category: "Production Support", categoryColor: BLUE,
    title: "Top-Tier Equipment & Technical Support",
    intro: "Access the latest professional equipment and experienced technical teams for a seamless production.",
    body: `Access to the right equipment is absolutely fundamental to achieving your creative vision. We source and supply professional-grade cameras, lenses, lighting, grip, and sound equipment from Turkey's leading rental houses, with our technical team ensuring everything is in perfect working order well before it reaches your set.

We work with all major camera systems including ARRI, RED, Sony Venice, and Blackmagic, and can supply fully tailored supporting equipment packages matched to the specific requirements of your project and your director of photography.

In addition to equipment sourcing, we provide comprehensive on-set technical support through experienced data managers, DIT operators, and technical coordinators who ensure your footage is properly captured, securely backed up, and fully prepared for post-production.`,
    highlights: ["ARRI, RED, Sony Venice systems", "Full lighting & grip packages", "DIT & data management", "Short-notice equipment sourcing"],
  },
  "customs-shipping": {
    category: "Production Support", categoryColor: BLUE,
    title: "Customs & Shipping",
    intro: "We handle equipment imports, exports, and customs clearance to ensure your production runs without delays.",
    body: `Importing professional production equipment into Turkey and exporting it again after your shoot involves a complex series of documentation steps, customs declarations, and ongoing liaison with Turkish customs authorities. Without expert management, this process can easily cause significant delays and unexpected additional costs.

Our customs and shipping team handles the entire process on your behalf — from preparing the necessary documentation and managing ATA Carnets through to coordinating with freight forwarders, customs brokers, and airport cargo handlers. We ensure your equipment arrives on time, fully cleared, and ready for immediate use on set.

For productions shipping equipment into Turkey from multiple countries, or requiring equipment to be moved between various locations across the country, we manage all logistics with precision and complete transparency.`,
    highlights: ["ATA Carnet management", "Customs documentation & clearance", "Airport cargo coordination", "Multi-country equipment logistics"],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4" style={{ color: "rgba(0,0,0,0.4)" }}>Service not found.</p>
          <Link to="/Services" style={{ color: "#111" }} className="underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Back nav */}
      <div className="px-8 pt-8">
        <Link
          to="/Services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
          style={{ color: "rgba(0,0,0,0.4)" }}
        >
          <ArrowLeft className="w-3 h-3" /> Services
        </Link>
      </div>

      {/* Header */}
      <div className="px-8 pt-8 pb-12 border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: service.categoryColor }}>
          {service.category}
        </p>
        <h1
          className="font-bold uppercase mb-6 max-w-3xl"
          style={{ fontSize: "clamp(0.8rem, 2vw, 1.1rem)", letterSpacing: "0.25em", color: "#111" }}
        >
          {service.title}
        </h1>
        <p className="text-[13px] max-w-2xl leading-relaxed text-justify hyphens-auto" style={{ color: "rgba(0,0,0,0.5)" }}>{service.intro}</p>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Main text */}
        <div className="md:col-span-2 p-12 border-r" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
          {service.body.split("\n\n").map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="leading-relaxed mb-6 text-[13px] text-justify hyphens-auto"
              style={{ color: "rgba(0,0,0,0.55)" }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Highlights sidebar */}
        <div className="p-12">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-8" style={{ color: service.categoryColor }}>
            Key Features
          </p>
          <div className="space-y-4">
            {service.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.categoryColor }} />
                <span className="text-sm" style={{ color: "rgba(0,0,0,0.6)" }}>{h}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: "rgba(0,0,0,0.3)" }}>Interested?</p>
            <Link
              to="/Contact"
              className="inline-block text-sm font-bold uppercase tracking-[0.15em] px-6 py-3 transition-all"
              style={{ backgroundColor: RED, color: "white" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#9a3e30"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = RED}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
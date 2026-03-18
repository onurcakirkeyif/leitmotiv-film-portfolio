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
    body: `Whether you're launching a new product, building brand awareness, or reaching a global audience, our commercial film production services deliver visually stunning, strategically crafted content that resonates.

Based in Istanbul, we combine Turkey's incredible diversity of landscapes — from ancient ruins to cosmopolitan cityscapes, turquoise coastlines to dramatic mountain terrain — with a seasoned production team fluent in international broadcast standards.

We handle every aspect of your commercial from pre-production planning, location scouting, casting, and crew assembly to full on-set management and post-production coordination. Our team has produced commercials for global brands including Mango, Citroën, Hyundai, Coca-Cola, and Decathlon, consistently delivering broadcast-quality results on time and on budget.

Whether you need a single 30-second spot or a full multi-platform campaign, we bring the same level of professionalism and creative passion to every frame.`,
    highlights: ["Full-service production management", "Global broadcast standards", "Diverse Turkish locations", "International brand experience"],
  },
  "feature-films-short-films": {
    category: "Production", categoryColor: RED,
    title: "Feature Films & Short Films",
    intro: "Bringing cinematic visions to life in one of the world's most compelling filming destinations.",
    body: `Turkey's rich history, breathtaking geography, and vibrant culture make it one of cinema's most coveted destinations. From Ottoman palaces and ancient amphitheatres to modern Istanbul streets and remote Anatolian landscapes, the possibilities are limitless.

Our team provides comprehensive production services for both feature-length and short film projects, supporting international directors and producers at every stage. We manage everything from the initial location recce and permitting through to final day-of-shoot logistics, so your creative team can stay focused on the story.

We have supported documentary features, drama productions, and artistic short films for broadcasters and independent filmmakers from across Europe, the US, and beyond. Our deep knowledge of Turkish locations, regulations, and local talent pools ensures your production runs smoothly from first to last day of principal photography.`,
    highlights: ["Location recce & permitting", "Drama & documentary experience", "Local & international crew", "Full logistical support"],
  },
  "tv-programs": {
    category: "Production", categoryColor: RED,
    title: "TV Programs",
    intro: "End-to-end production support for television content shot in Turkey.",
    body: `From prime-time travel shows and news magazine programs to reality series and lifestyle content, our team has the experience and infrastructure to support TV productions of any scale shooting in Turkey.

We work closely with international broadcasters and production companies to ensure their programs meet the highest technical and editorial standards. Our services include full fixing and production management, coordinating with local authorities for permissions, sourcing contributors and talent, arranging facilities, and managing crews and logistics throughout the shoot.

Past television clients include Arte, BBC, NPO3, Canal+, Deutsche Welle, and Channel 9, with programs ranging from cultural documentaries and investigative journalism to travel entertainment and reality formats. We understand the pace and pressures of television production, and we're built to deliver under deadline.`,
    highlights: ["Broadcaster-grade standards", "Fixing & journalism support", "Reality & entertainment formats", "Nationwide shoot coverage"],
  },
  "documentaries": {
    category: "Production", categoryColor: RED,
    title: "Documentaries",
    intro: "Compelling documentary production rooted in authentic storytelling.",
    body: `Turkey is a country of extraordinary stories — at the crossroads of Europe and Asia, ancient and modern, secular and spiritual. It is a place that documentary filmmakers return to again and again. Our team is uniquely positioned to help you find those stories and bring them to the screen.

We provide full production support for documentary projects, from initial research and contributor coordination through to shoot logistics, interviews, and b-roll acquisition. Our fixers and producers have deep knowledge of Turkish society, politics, culture, and geography, enabling access that many international teams would find impossible to achieve alone.

We have worked on documentaries for BBC, Arte, Vice, Financial Times, CNN, and Wall Street Journal, covering topics from medicine and migration to history, food culture, and environmental issues. We are passionate about documentary storytelling and committed to giving your project the depth and authenticity it deserves.`,
    highlights: ["Research & contributor access", "Sensitive topic experience", "Nationwide documentary coverage", "Bilingual production team"],
  },
  "reality-shows": {
    category: "Production", categoryColor: RED,
    title: "Reality Shows",
    intro: "Fast-paced, high-energy reality production in Turkey's most dynamic settings.",
    body: `Reality television demands speed, flexibility, and a production team that can handle the unexpected. Our crew thrives in this environment, delivering quality content even under the most demanding shooting conditions.

Turkey offers an incredible array of environments for reality formats — bustling bazaars, dramatic landscapes, luxury resorts, cultural landmarks, and vibrant city life. Whether you're producing an adventure series, a dating show, a cooking competition, or an elimination format, we have the logistical expertise to make it work.

We have supported major international reality productions including Endemol Shine's Rush series, and our team is experienced in managing large multi-camera shoots, coordinating cast transportation, and maintaining production momentum across complex locations and schedules.`,
    highlights: ["Multi-camera production", "Large-scale logistics", "Fast-turnaround capability", "Diverse location formats"],
  },
  "corporate-films": {
    category: "Production", categoryColor: RED,
    title: "Corporate Films",
    intro: "Professional corporate video that communicates your brand story with clarity and impact.",
    body: `A well-crafted corporate film can transform how clients, investors, and employees perceive your organisation. Whether you need an internal communications video, an investor presentation film, a brand story documentary, or a product showcase, we produce corporate content that is polished, purposeful, and persuasive.

Our team understands the specific demands of corporate video — clear messaging, tight timelines, professional execution, and content that works across multiple platforms. We work with multinational corporations, Turkish businesses, and international organisations operating in Turkey to create content that meets global standards.

We handle every stage of corporate production in-house, from scripting and storyboarding to casting, shooting, and post-production coordination. Our work with clients including Microsoft and Shopify demonstrates our ability to deliver world-class corporate content.`,
    highlights: ["Brand & investor films", "Internal communications", "Product showcases", "Multi-platform content"],
  },
  "music-videos": {
    category: "Production", categoryColor: RED,
    title: "Music Videos",
    intro: "Visually arresting music videos produced with cinematic precision.",
    body: `Music videos demand creative ambition, technical skill, and the ability to execute a distinctive visual concept within tight budgets and schedules. Our team delivers on all fronts, producing music videos that stand out in an increasingly crowded landscape.

Istanbul and Turkey's diverse locations provide music video directors with an extraordinary visual palette — from rooftop views of the Bosphorus and labyrinthine old-city streets to vast natural landscapes and striking modernist architecture. We know these locations intimately and can facilitate access and permits quickly and efficiently.

We have produced music videos for international and Turkish artists, working with directors to realise ambitious concepts with precision. Our credits include work for Coca-Cola / Coke Studio and Stone Music, among others. Whether you're producing an intimate performance piece or a large-scale narrative video, we have the crew and the know-how to make it happen.`,
    highlights: ["Location & permit expertise", "Narrative & performance formats", "International artist experience", "Creative crew collaboration"],
  },
  "social-media-video-production": {
    category: "Production", categoryColor: RED,
    title: "Social Media Video Production",
    intro: "Platform-native video content engineered for engagement.",
    body: `Social media has transformed the way brands communicate, and video sits at the heart of every successful digital strategy. Our social media video production service is designed for brands, agencies, and content creators who need high-quality, platform-optimised video content produced efficiently and consistently.

We produce content for Instagram, TikTok, YouTube, LinkedIn, and beyond — from short-form reels and stories to longer branded content series. Our team understands the nuances of each platform, from aspect ratios and pacing to tone and cultural resonance, ensuring your content performs as well as it looks.

Based in Istanbul, we can leverage Turkey's rich visual environment to create content that is distinctive, aspirational, and authentic. We work quickly and collaboratively, making us the ideal partner for campaigns that require regular, high-quality video output.`,
    highlights: ["Multi-platform optimisation", "Short & long-form content", "Fast turnaround production", "Brand & agency partnerships"],
  },
  "photography": {
    category: "Production", categoryColor: RED,
    title: "Photography",
    intro: "Compelling still photography from Turkey's most extraordinary locations.",
    body: `Alongside our video production work, we offer professional photography services for commercial, editorial, and documentary projects in Turkey. Whether you need campaign imagery for a fashion brand, editorial photographs for a magazine feature, or documentary stills to complement a film project, our photography team delivers images of the highest quality.

Turkey's visual richness — its ancient architecture, diverse landscapes, and vibrant street life — provides a remarkable backdrop for photography of all kinds. We have produced photography for international fashion and lifestyle brands including Mango and Alo Yoga, as well as editorial shoots for international publications.

Our photography services include full production support: location scouting, permitting, local talent sourcing, styling coordination, and equipment provision, ensuring every shoot runs smoothly from the first test shot to the final delivery.`,
    highlights: ["Commercial & editorial photography", "Fashion & lifestyle shoots", "Documentary still photography", "Full production support"],
  },
  "drone-filming": {
    category: "Production", categoryColor: RED,
    title: "Drone Filming",
    intro: "Breathtaking aerial cinematography over Turkey's most spectacular landscapes.",
    body: `Drone footage has the power to transform a production — providing scale, context, and visual drama that is simply impossible to achieve from the ground. Our licensed drone operators and state-of-the-art aerial equipment deliver cinematic aerial content that elevates every project.

Turkey is one of the world's most rewarding destinations for aerial filming, offering everything from the iconic skylines of Istanbul to the otherworldly landscapes of Cappadocia, the turquoise waters of the Aegean and Mediterranean coasts, and the vast steppes of Central Anatolia. Our team has extensive experience obtaining the necessary permits and coordinating with Turkish aviation authorities to ensure fully legal, safe, and efficient aerial operations.

We operate professional-grade drone systems capable of capturing ultra-high-definition footage for broadcast, commercial, and cinematic applications, and our drone operators work in close collaboration with directors of photography to integrate aerial sequences seamlessly into the wider production.`,
    highlights: ["Licensed & fully permitted operations", "Ultra-HD aerial footage", "Broadcast & commercial grade", "Nationwide aerial coverage"],
  },
  "location-scouting-permits": {
    category: "Production Support", categoryColor: BLUE,
    title: "Location Scouting & Permits",
    intro: "We find the perfect filming locations and handle all necessary permits so you can focus on the creative process.",
    body: `Finding the right location can define the look and feel of an entire production. Our location scouting team has an extensive knowledge of Turkey's most photogenic settings — from the ancient streets of Istanbul's historic peninsula and the surreal landscapes of Cappadocia to the dramatic coastlines of the Aegean and the remote wilderness of Eastern Anatolia.

We work closely with directors and cinematographers to identify locations that serve the creative vision, conducting thorough recces and providing comprehensive location reports with photography, logistical assessments, and permit information.

Beyond scouting, we handle the entire permitting process on your behalf — liaising with municipal authorities, heritage bodies, national parks, and private landowners to secure the permissions your production requires.`,
    highlights: ["Nationwide location database", "Comprehensive location reports", "Full permit management", "Authority liaison & negotiation"],
  },
  "casting-crew": {
    category: "Production Support", categoryColor: BLUE,
    title: "Casting & Crew",
    intro: "From local talent to experienced film crews, we connect you with the right professionals.",
    body: `A production is only as strong as the people behind it. Our extensive network of Turkish and internationally experienced crew members ensures that we can assemble the right team for any project, in any genre, at any scale.

Our crew roster includes directors of photography, camera operators, sound recordists, gaffers, grips, art directors, stylists, make-up artists, and production assistants, all vetted for their professionalism and experience working with international productions.

For casting, we work with experienced local casting directors and maintain strong relationships with Turkey's acting community, enabling us to source the right on-screen talent quickly and efficiently.`,
    highlights: ["Vetted professional crew network", "Local & international talent", "All genres & scales", "Full casting management"],
  },
  "transportation-accommodation": {
    category: "Production Support", categoryColor: BLUE,
    title: "Transportation & Accommodation",
    intro: "We organise transportation and comfortable accommodation to ensure a smooth and efficient production.",
    body: `Logistics can make or break a production. Our transportation and accommodation management service ensures that your team travels safely, efficiently, and comfortably throughout their time in Turkey.

We coordinate all ground transportation — from airport transfers and unit base vehicles to equipment trucks and multi-vehicle convoys for complex location shoots across the country. Our driver network is experienced in production work and understands the demands of early call times, long shooting days, and rapid location changes.

For accommodation, we source and negotiate the best available options for your team, whether that's a centrally located Istanbul hotel for a city-based shoot or a collection of boutique properties near a remote location.`,
    highlights: ["Airport & unit base transfers", "Multi-vehicle convoy coordination", "Budget & boutique accommodation", "Nationwide coverage"],
  },
  "production-office-setup": {
    category: "Production Support", categoryColor: BLUE,
    title: "Production Office Setup",
    intro: "We provide fully equipped production offices with everything your team needs.",
    body: `An efficient production office is the nerve centre of any major project. We source, set up, and manage fully equipped production office facilities tailored to the scale and duration of your production.

Our production office setups include high-speed internet connectivity, printing and scanning facilities, production desks and editing workstations, secure storage, and catering and kitchen facilities. We can establish offices in Istanbul or in regional locations across Turkey, depending on your shooting schedule.

For productions requiring a longer-term presence in Turkey, we can also assist with the establishment of a local production entity, ensuring full compliance with Turkish business and broadcasting regulations.`,
    highlights: ["High-speed connectivity", "Equipped workstations", "Istanbul & regional locations", "Local entity setup assistance"],
  },
  "post-production-coordination": {
    category: "Production Support", categoryColor: BLUE,
    title: "Post-Production Coordination",
    intro: "From editing to visual effects, we help coordinate every stage of the post-production process.",
    body: `A great shoot is only the beginning. Our post-production coordination service ensures that the transition from set to final delivery is as smooth and efficient as possible, whether your post work is being completed in Turkey or abroad.

We manage the organisation and delivery of camera and audio dailies, coordinate with your post-production supervisor and editor, liaise with local post-production facilities where required, and assist with the management of VFX, colour grading, and sound design briefs.

For productions completing post in Turkey, we have established relationships with Istanbul's leading post-production houses, offering services including offline and online editing, colour grading, visual effects, and audio post.`,
    highlights: ["Dailies management & delivery", "Post facility liaison", "VFX & colour coordination", "Delivery deadline management"],
  },
  "local-vendors-catering": {
    category: "Production Support", categoryColor: BLUE,
    title: "Local Vendors & Catering",
    intro: "Whether you need props, equipment, or catering, we connect you with the best local suppliers.",
    body: `The quality of your on-set vendors can have a significant impact on both the production experience and the final product. We maintain a carefully curated network of trusted local suppliers across Turkey, covering everything your production might need.

For props and set dressing, we work with experienced art directors and prop houses to source authentic Turkish and international items that serve your production design. For specialist equipment, we have established relationships with Turkey's leading rental houses.

Our catering partnerships ensure your crew is fed well throughout every shooting day, with options ranging from local Turkish cuisine to international menus, adapted to dietary requirements and serving scales from intimate crew sizes to large-scale multi-unit productions.`,
    highlights: ["Props & art department sourcing", "Equipment rental coordination", "Professional crew catering", "Dietary requirement management"],
  },
  "health-safety": {
    category: "Production Support", categoryColor: BLUE,
    title: "Health & Safety",
    intro: "We ensure a safe working environment with on-set medics and comprehensive safety protocols.",
    body: `The safety of your cast and crew is our absolute priority. We implement comprehensive health and safety protocols on every production we support, adapted to the specific risks and requirements of each project.

Our health and safety services include the provision of qualified on-set medics and first aiders, risk assessments for all locations and activities, coordination of safety equipment and procedures for stunts and aerial work, and full compliance with Turkish workplace safety legislation.

For international productions, we translate and implement the health and safety standards of the commissioning broadcaster or studio, ensuring that your production meets the requirements of your insurance provider and your organisation's duty of care obligations.`,
    highlights: ["On-set medics & first aiders", "Full risk assessments", "Stunt & aerial safety protocols", "International safety standard compliance"],
  },
  "subsidies-grants": {
    category: "Production Support", categoryColor: BLUE,
    title: "Subsidies & Grants",
    intro: "We assist productions in accessing local incentives to maximise your production budget.",
    body: `Turkey offers a range of financial incentives for international productions, and navigating these opportunities requires specialist knowledge and established relationships with the relevant authorities. Our team has the expertise to help you identify and access the subsidies and grants your production may be eligible for.

We assist with applications to the Turkish Ministry of Culture and Tourism's international co-production and incentive schemes, as well as regional filming incentives offered by local municipalities. We advise on the structural and budgetary requirements for eligibility and manage the application process on your behalf.

Maximising your production's access to local incentives can make a significant difference to your overall budget, and our guidance ensures that you don't leave money on the table.`,
    highlights: ["Ministry incentive applications", "Regional filming subsidies", "Co-production scheme guidance", "Budget maximisation strategy"],
  },
  "equipment-technical-support": {
    category: "Production Support", categoryColor: BLUE,
    title: "Top-Tier Equipment & Technical Support",
    intro: "Access the latest professional equipment and experienced technical teams for a seamless production.",
    body: `Access to the right equipment is fundamental to achieving your creative vision. We source and supply professional-grade cameras, lenses, lighting, grip, and sound equipment from Turkey's leading rental houses, with our technical team ensuring everything is in perfect working order before it reaches your set.

We work with all major camera systems including ARRI, RED, Sony Venice, and Blackmagic, and can supply supporting equipment packages tailored to the specific requirements of your project and director of photography.

In addition to equipment sourcing, we provide on-set technical support through experienced data managers, DIT operators, and technical coordinators who ensure your footage is properly captured, backed up, and prepared for post-production.`,
    highlights: ["ARRI, RED, Sony Venice systems", "Full lighting & grip packages", "DIT & data management", "Short-notice equipment sourcing"],
  },
  "customs-shipping": {
    category: "Production Support", categoryColor: BLUE,
    title: "Customs & Shipping",
    intro: "We handle equipment imports, exports, and customs clearance to ensure your production runs without delays.",
    body: `Importing professional production equipment into Turkey and exporting it again after your shoot involves a complex process of documentation, customs declarations, and liaison with Turkish customs authorities. Without expert management, this process can cause significant delays and unexpected costs.

Our customs and shipping team handles the entire process on your behalf — from preparing the necessary documentation and ATA Carnet management to coordinating with freight forwarders, customs brokers, and airport cargo handlers. We ensure your equipment arrives on time, fully cleared, and ready for use.

For productions shipping equipment into Turkey from multiple countries, or requiring equipment to be moved between locations across the country, we manage all logistics with precision and transparency.`,
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
          style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)", letterSpacing: "0.25em", color: "#111" }}
        >
          {service.title}
        </h1>
        <p className="text-[13px] max-w-2xl leading-relaxed text-justify" style={{ color: "rgba(0,0,0,0.5)" }}>{service.intro}</p>
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
              className="leading-relaxed mb-6 text-[13px] text-justify"
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
import React from "react";
import { motion } from "framer-motion";

// Color logos via Clearbit Logo API + known CDN sources
const clients = [
  { name: "BBC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/BBC_logo_%282021%29.svg/320px-BBC_logo_%282021%29.svg.png" },
  { name: "CNN", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/320px-CNN.svg.png" },
  { name: "Arte", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Arte_Logo_2019.svg/320px-Arte_Logo_2019.svg.png" },
  { name: "Deutsche Welle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Deutsche_Welle_symbol_2012.svg/320px-Deutsche_Welle_symbol_2012.svg.png" },
  { name: "Canal+", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Canal%2B.svg/320px-Canal%2B.svg.png" },
  { name: "Vice", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/VICE_logo.svg/320px-VICE_logo.svg.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png" },
  { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/320px-Coca-Cola_logo.svg.png" },
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/320px-Shopify_logo_2018.svg.png" },
  { name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Hyundai_Motor_Company_logo.svg/320px-Hyundai_Motor_Company_logo.svg.png" },
  { name: "Mango", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Mango_%28clothing%29_logo.svg/320px-Mango_%28clothing%29_logo.svg.png" },
  { name: "Citroën", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Citro%C3%ABn_2009_logo.svg/320px-Citro%C3%ABn_2009_logo.svg.png" },
  { name: "Decathlon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Decathlon_Logo.svg/320px-Decathlon_Logo.svg.png" },
  { name: "Financial Times", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Financial_Times_corporate_logo.svg/320px-Financial_Times_corporate_logo.svg.png" },
  { name: "Associated Press", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Associated_Press_logo_2012.svg/320px-Associated_Press_logo_2012.svg.png" },
];

export default function ClientsMarquee() {
  return (
    <div className="overflow-hidden py-8 border-t border-b" style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "#0d0d0d" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12 whitespace-nowrap"
      >
        {[...clients, ...clients].map((client, i) => (
          <div key={i} className="flex-shrink-0 h-8 flex items-center opacity-40 hover:opacity-80 transition-opacity">
            <img
              src={client.logo}
              alt={client.name}
              className="h-full w-auto object-contain"
              style={{ filter: "brightness(0) invert(0.7)" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
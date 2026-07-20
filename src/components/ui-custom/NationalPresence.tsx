import { motion } from 'framer-motion';

export default function NationalPresence() {
  return (
    <section className="w-full flex flex-col lg:flex-row border-y border-slate-200 overflow-hidden">
      {/* ── Left dark-green panel ── */}
      <div className="w-full lg:w-[28%] bg-[#1B5E50] flex flex-col justify-between p-10 lg:p-14 relative overflow-hidden flex-shrink-0" style={{ minHeight: '800px' }}>
        {/* Decorative rings */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10" />
        <div className="absolute -bottom-14 -left-12 w-60 h-60 rounded-full border border-white/10" />

        <motion.h2
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-[0.15em] leading-[1.25]"
        >
          NOTRE<br />
          <span className="font-extrabold">PRESENCE</span><br />
          NATIONALE
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative z-10 mt-10 lg:mt-0"
        >
          {/* DBC logo text */}
          <p className="text-5xl font-black text-white tracking-tighter lowercase leading-none">dbc</p>
          <p className="text-[9px] font-bold text-white/65 tracking-[0.4em] uppercase mt-1">Synthese</p>
        </motion.div>
      </div>

      {/* ── Right map panel ── */}
      <div className="w-full lg:w-[72%] bg-[#f8fcfd]">
        {/* Morocco map image containing all pins and labels — dictates height of section */}
        <img
          src="/morocco-map-full.png"
          alt="Carte de présence nationale DBC Synthèse"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}

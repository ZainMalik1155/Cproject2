import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-mansion.jpg";
import villaImg from "@/assets/villa.jpg";
import livingRoomImg from "@/assets/living-room.jpg";

const projects = [
  {
    title: "The Meridian Estate",
    location: "Beverly Hills, CA",
    area: "12,500 sq ft",
    image: heroImg,
  },
  {
    title: "Villa Solaris",
    location: "Miami Beach, FL",
    area: "9,800 sq ft",
    image: villaImg,
  },
  {
    title: "The Obsidian Penthouse",
    location: "Manhattan, NY",
    area: "6,200 sq ft",
    image: livingRoomImg,
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-32 px-6 lg:px-8 bg-secondary/30">
      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ width: 0 }}
          animate={headerInView ? { width: "60px" } : {}}
          transition={{ duration: 0.8 }}
          className="h-px bg-primary mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
        >
          Selected Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-light text-foreground"
        >
          A Legacy of{" "}
          <span className="text-gold-gradient italic">Masterpieces</span>
        </motion.h2>
      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto space-y-24">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <ProjectRow key={project.title} project={project} index={i} isEven={isEven} bgY={bgY} />
          );
        })}
      </div>
    </section>
  );
};

const ProjectRow = ({
  project,
  index,
  isEven,
  bgY,
}: {
  project: typeof projects[0];
  index: number;
  isEven: boolean;
  bgY: any;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 0.2 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
    >
      {/* Image */}
      <div className="relative w-full lg:w-3/5 overflow-hidden group">
        <motion.div style={{ y: bgY }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
        {/* Gold corner accents */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-primary/40" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-primary/40" />
      </div>

      {/* Info */}
      <div className="w-full lg:w-2/5 space-y-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
          Project {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="font-display text-3xl md:text-5xl text-foreground font-light">
          {project.title}
        </h3>
        <div className="luxury-divider" />
        <div className="flex gap-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-1">Location</p>
            <p className="text-foreground font-body">{project.location}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-1">Area</p>
            <p className="text-foreground font-body">{project.area}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;

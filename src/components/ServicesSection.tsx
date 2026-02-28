import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import kitchenImg from "@/assets/kitchen.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import livingRoomImg from "@/assets/living-room.jpg";
import remodelingImg from "@/assets/remodeling.jpg";
import villaImg from "@/assets/villa.jpg";
import laundryImg from "@/assets/laundry.jpg";

const services = [
  {
    title: "House Construction",
    subtitle: "From Foundation to Perfection",
    description: "Ground-up luxury construction with meticulous attention to every architectural detail. We bring your dream home to life.",
    image: villaImg,
  },
  {
    title: "Kitchen Design",
    subtitle: "The Heart of Luxury",
    description: "Bespoke kitchens featuring marble countertops, gold fixtures, and state-of-the-art appliances in breathtaking settings.",
    image: kitchenImg,
  },
  {
    title: "Bathroom Sanctuaries",
    subtitle: "Spa-Grade Elegance",
    description: "Transform your bathroom into a private spa with freestanding tubs, rain showers, and floor-to-ceiling marble.",
    image: bathroomImg,
  },
  {
    title: "Living Spaces",
    subtitle: "Designed for Grandeur",
    description: "Open-concept living rooms with soaring ceilings, designer furniture, and dramatic ambient lighting.",
    image: livingRoomImg,
  },
  {
    title: "Full Remodeling",
    subtitle: "Reimagine Every Room",
    description: "Complete home transformations that preserve character while introducing modern luxury and sophistication.",
    image: remodelingImg,
  },
  {
    title: "Laundry & Utility",
    subtitle: "Luxury in Every Detail",
    description: "Even utility spaces deserve elegance. Custom cabinetry, premium finishes, and intelligent layouts.",
    image: laundryImg,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        {/* Gold accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Text */}
      <div className="relative p-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
          {service.subtitle}
        </p>
        <h3 className="font-display text-2xl text-foreground mb-3">
          {service.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6 lg:px-8 bg-background">
      {/* Section header */}
      <div ref={headerRef} className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ width: 0 }}
          animate={headerInView ? { width: "60px" } : {}}
          transition={{ duration: 0.8 }}
          className="h-px bg-primary mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
        >
          Our Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-light text-foreground"
        >
          Crafted for the{" "}
          <span className="text-gold-gradient italic">Extraordinary</span>
        </motion.h2>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "250+", label: "Luxury Homes Built" },
  { value: "18", label: "Years of Excellence" },
  { value: "$2.1B", label: "Project Value Delivered" },
  { value: "99%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "60px" } : {}}
            transition={{ duration: 0.8 }}
            className="h-px bg-primary mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            About Aurum Estates
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-light text-foreground max-w-3xl mx-auto"
          >
            Building <span className="text-gold-gradient italic">Tomorrow's</span> Landmarks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mt-8 font-light leading-relaxed"
          >
            For nearly two decades, we've set the standard in luxury residential construction. 
            Our team of world-class architects, designers, and craftsmen collaborate to create 
            homes that transcend expectations.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + i * 0.15 }}
              className="text-center glass-card p-8"
            >
              <p className="font-display text-4xl md:text-5xl text-gold-gradient mb-2">
                {stat.value}
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

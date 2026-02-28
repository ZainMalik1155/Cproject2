import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-8 bg-secondary/20">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
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
            Begin Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-light text-foreground"
          >
            Let's Create Something{" "}
            <span className="text-gold-gradient italic">Remarkable</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: MapPin, label: "Visit Us", value: "9400 Wilshire Blvd, Beverly Hills" },
            { icon: Phone, label: "Call Us", value: "+1 (310) 555-0199" },
            { icon: Mail, label: "Email Us", value: "hello@aurumestates.com" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass-card p-8 text-center group hover:border-primary/30 transition-colors duration-300">
              <Icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{label}</p>
              <p className="font-body text-foreground">{value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button variant="hero" size="xl">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

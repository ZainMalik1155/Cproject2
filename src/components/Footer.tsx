const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-xl tracking-wider text-foreground">
          <span className="text-gold-gradient">AURUM</span>
          <span className="text-foreground ml-1 font-light text-sm">ESTATES</span>
        </div>
        <p className="font-body text-xs tracking-[0.15em] text-muted-foreground">
          © 2026 Aurum Estates. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

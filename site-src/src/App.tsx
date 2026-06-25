import { useEffect, useMemo, useState } from "react";
import {
  AboutSection,
  FeaturesSection,
  Footer,
  Header,
  HeroSection,
  PartnersSection,
  ServicesSection
} from "./components/Sections";
import { navigationItems } from "./content/siteContent";

function App() {
  const [activeSection, setActiveSection] = useState("company");
  const [menuOpen, setMenuOpen] = useState(false);

  const navIds = useMemo(
    () => Array.from(new Set(navigationItems.map((item) => item.sectionId))),
    []
  );

  useEffect(() => {
    const sections = navIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navIds]);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const offset = Math.min(window.scrollY * 0.16, 64);
      document.documentElement.style.setProperty("--hero-shift", `${offset}px`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
        onNavigate={() => setMenuOpen(false)}
      />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <AboutSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

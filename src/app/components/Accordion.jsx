"use client";
import { useState } from "react";
import Item from "./Item";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen bg-slate-50 overflow-hidden">
        <section className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>
          <Item
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <Item
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <Item
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </section>
      </main>

      <footer
        className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left"
        role="contentinfo"
      >
        <a
          className="text-xs text-slate-500 hover:underline"
          href="https://cruip.com"
          aria-label="Cruip - Tailwind CSS templates"
        >
          &copy; Cruip - Tailwind CSS templates
        </a>
      </footer>
    </div>
  );
};

export default Accordion;

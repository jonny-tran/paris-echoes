import type { LucideIcon } from "lucide-react";
import { House, Landmark, ScrollText, Swords, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

type SectionItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const sections: SectionItem[] = [
  { id: "hero", label: "Mở đầu", icon: House },
  { id: "part-2", label: "Vì sao Mỹ đàm phán", icon: Landmark },
  { id: "part-3", label: "Chiến lược Việt Nam", icon: Swords },
  { id: "part-5", label: "Madame Bình", icon: UserRound },
  { id: "part-4", label: "Ý nghĩa lịch sử", icon: ScrollText },
];

export function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col items-end gap-3">
        {sections.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="group relative flex h-12 items-center justify-end"
              aria-label={label}
            >
              <span
                className={`label-archival pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-5 py-3 shadow-ambient transition-all duration-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 ${
                  active === id
                    ? "border-tertiary/60 bg-surface-highest/95 text-primary"
                    : "border-tertiary/25 bg-surface-highest/90 text-ink-soft/90"
                }`}
              >
                {label}
              </span>
              <span
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border shadow-ambient transition-all duration-300 ${
                  active === id
                    ? "border-tertiary bg-tertiary text-primary-foreground shadow-gold-glow"
                    : "border-surface-container-high bg-surface-container/95 text-ink-soft/90 group-hover:border-tertiary/40 group-hover:bg-surface-highest group-hover:text-primary"
                }`}
              >
                <Icon className="h-[18px] w-[18px] stroke-[2.2]" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Mở đầu" },
  { id: "part-2", label: "Vì sao Mỹ đàm phán" },
  { id: "part-3", label: "Chiến lược Việt Nam" },
  { id: "part-4", label: "Ý nghĩa lịch sử" },
  { id: "part-5", label: "Madame Bình" },
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
      <ul className="flex flex-col gap-5">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="group flex items-center justify-end gap-3"
              aria-label={s.label}
            >
              <span
                className={`label-archival font-sans whitespace-nowrap transition-all duration-500 ${
                  active === s.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                {s.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-500 ${
                  active === s.id
                    ? "h-3 w-3 bg-tertiary shadow-gold-glow"
                    : "h-2 w-2 bg-ink-soft/40 group-hover:bg-tertiary/70"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
